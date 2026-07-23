---
title: Understanding the J-Lens
description: Understanding model internals, and possibly also how we think
date: '2026-07-22'
categories:
  - machine learning
published: true
---

There has been a lot of excitement about Anthropic's new interpretability technique - the Jacobian lens - lately, and its implications both as a tool for understanding model internals and as a possible bridge to neuroscience and the notion of a ‘global workspace.'

It's a really interesting tool, and something I want to better understand. Notably, you don't need very much math background to ‘get it' - just a little bit of linear algebra (bases and linear transformations) and calculus (partial derivatives, the Jacobian). Let us play and let us explore. 

# What is the J-lens?

Put most simply, the J-lens is a way for us to understand the intermediate layers of a decoder transformer model. These models are composed of dozens of layers (GPT-2's base model has 12 layers; its largest 1.5B parameter model has 48 layers), each of which is composed of an attention block and a feed-forward block. Each layer *reads from* the residual stream and *writes to* it - it's an updating matrix of vectors, one per token position, which starts as a simple representation of tokens, and gradually is updated to reflect meaning through token relationships. We typically don't see the state of the residual stream in its intermediary states - we only see the input stream of tokens, and the output of the next likely token. 

There are two important parameters to consider when we discuss the J-lens: the layer, and the position. The layer is how far along the residual stream  we're at - in earlier layers, this is generally less coherent while at later ones, we tend to settle into tokens close to the actual observed output (see Aside 1). Then, the position is the specific activation we're focusing on. We then say we apply the J-lens at layer $l$, to the activation at position $t$.

Overall, the J-lens is a tool that helps us translate the internal layers of the transformer into recognizable outputs - it shows us how intermediate activation vectors map to the eventual output token, or in other words, what the model is ‘thinking' before it outputs a final answer.

# Mathematically

From a mathematical lens, the J lens $J_l$ is a series of matrices of dimension $d_{model} \times d_{model}$ which each correspond to a layer of the model - it's unique to the model's parameters and is computed for a given model, on a corpus of base text. 

As per the repo README, “it linearly transports a residual-stream vector at any layer and position into the final-layer basis, then decodes it with the model's own unembedding into a ranked list of vocabulary tokens.” 

First, the notation/big picture: the J-lens takes a given intermediate activation vector $h_l$ (we use  $h_l$ to represent the residual stream at layer $l$, at token position $t$). We want to capture how this $h_l$ impacts our final output, $h_{final, t'}$. We know that a change to a given $h_{l, t}$ will impact all future layers, $l' > l$, as well as all future tokens $t' \geq t$ (because of how attention is masked - in the sentence “the dog ran around the park,” we capture the token “dog”'s influence on “ran,” “around,” etc., but not the token “park”'s influence on “dog” - forward only, not backward.). 

How do we then turn this internal activation into something that we can understand? I think of it as two main components: the linear transform and Jacobian, and an averaging/normalizing component.

First, the linear transform. In intermediate layers, activations don't map cleanly onto vectors that we understand - we can't just unembed any given activation to get a token, the model does its intermediate work in different coordinate systems. Thus, we apply a linear transform, expressing this intermediate activation as a linear combination of activations of the final layer - in other words, changing its basis to that of the final layer. (Think: $\begin{bmatrix} 1 \\ 2 \end{bmatrix}$is $1 \times \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 2 \times \begin{bmatrix} 0 \\ 1 \end{bmatrix}$ in the basis $B_1=\begin{bmatrix} 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, or it can be $1 \times \begin{bmatrix} 1 \\ 2 \end{bmatrix} + 0 \times \begin{bmatrix} 3 \\ 4 \end{bmatrix}$ in the basis $B_2=\begin{bmatrix} 1 \\ 2 \end{bmatrix}, \begin{bmatrix} 3 \\ 4 \end{bmatrix}$. We have the same ‘activation' [1, 2], but expressed in different systems.)

We express this linear transform in the form of a per-prompt Jacobian - the first order derivative of a final layer output with respect to a given activation. For a given prompt, a layer $l$, and a source position $t$, a nudge in that activation will affect all future layers and tokens. Let's abstract away everything beyond the layer $l$ - we can think of it just as some big function $F$ which takes the current state $h_l$ and produces the final output layer $h_{final}$. Then, in order to compute the effect of a given activation in our layer $l$ to our final output, all we have to do is take the first-order derivative of the final layer, with respect to the current layer: $F(h_l + \beta) \approx F(h_l) + (\delta F / \delta h_l) \beta$. (Think: if my function $F$ is defined as $F = 2h_{l, 1} + 3h_{l,2} + 4h_{l,3}$ for activations $h_{l,1}, h_{l,2}, h_{l,3}$, then my partial derivatives would be $\frac{\delta F}{\delta h_{l,1}} = 2, \frac{\delta F}{\delta h_{l,2}} = 3, \frac{\delta F}{\delta h_{l,3}} = 4$. This is, of course, a simplification, and there's a couple of non-linear components and far more activations and layers, but the first order Jacobian is a good approximation. Note the actual $F$ outputs a d-dimensional vector, so our Jacobian will have d rows rather than a single scalar value. See Aside 2). 

Second, there's also this notion of averaging - we want a way to separate ‘here is how this activation vector affects this particular prompt's output,' to ‘here is how this activation vector, on average across all positions, future positions, and prompts, affects the model's output.' That is, we take the expectation (average) over all positions $t$ (what does this activation mean not only in this position, but if it were in any position), future positions $t' \geq t$ (will the model say this not only at position $t$, but at any position past position $t$) and over all prompts (will the model say this, not only for this specific prompt, but across any prompt in the training corpus). 

We end up with these equations: 

- The Jacobian lens itself: $J_l = E_{t, t' \geq t, prompt} \begin{bmatrix} \frac{\delta h_{final, t'}}{\delta h_{l, t}} \end{bmatrix}$
    - The $\begin{bmatrix} \frac{\delta h_{final, t'}}{\delta h_{l, t}} \end{bmatrix}$is the linear transform and Jacobian component
    - The $E_{t, t' \geq t, prompt}$ is the averaging expectation component
- Applying it to an activation $h_l$: $lens(h_l) = softmax(W_U norm(J_l h_l))$
    - To apply the lens means we replace all future layers with the appropriate lens matrix and apply unembedding operations, which gives us “a score for every token in the model's vocabulary”
    - $norm(J_l h_l)$ is the normalization of the J-lens applied to activation $h_l$, followed by $W_U$, the unembedding matrix (turning a residual stream vector into logits), and a softmax (turning those logits into probabilities).
- In the code, it's represented as $lens_l(h) = unembed( J_l @ h ), J_l = E[∂h_{final} / ∂h_l]$
    - We have $J_l$ itself, computed as above, and apply the unembedding matrix to it. The norm and softmax are implicit.

# Aside 1:  Why are earlier layers less ‘interpretable'/messier?

There's two big hypotheses around why earlier layers (roughly the first 1/3 of the model) produce outputs that are less interpretable - we see a lot of randomness and not a lot of tokens that ‘make sense.' 

The first is that there is genuinely no verbalizable content yet - we've gone through fewer cycles of the attention/feed-forward block, so there is no coherent content to output at all (in technical terms, there's no linearly accessible and causally relevant verbalizable content). The second, more interestingly, is that the J-lens isn't able to capture the concepts that are in fact there - it's a tool that's not well-suited for these early layers because they're encoded in a way that doesn't make sense to be translated to our output basis.

Think of, hypothetically, translating from French to English (also a transformer architecture, where the input and output vocabularies are different, making it easier to understand with the same underlying theory. We're analogizing languages to coordinate systems). The first hypothesis would say that the early layers have no meaningful content - it's closer to representing raw spellings and phonemes than actual language, in either French or English. The second would say that the context is there, but we can't easily translate it to our final layer basis as effectively as in later layers. This is partly because of the averaging we do across all tokens and prompts - as we go through more and more layers, each activation holds more contextual information. In earlier layers, we lack context, and so an ambiguous token (say, the French word “livre” could mean either book or pound depending on context, and in early layers, that context has not yet been embedded into the activations).

Another example - imagine an activation with direction $d$ that maps to $+v$ in half of contexts, and $-v$ in the other half of contexts. When we average over all contexts ($t, t' \geq t, prompts$), we get $J_l d = 0$. In other words, when the downstream meaning of a direction is dependent on context, this gets ‘smeared' and obscured.  

# Aside 2: Math intuition on the Jacobian

We take the Jacobian  $\frac{\partial h_{final, t'}}{\partial h_{l, t}}$ to represent how an activation changes the final output layer, but how does this first-order partial derivative actually capture that relationship? This is an interesting mathematical property of the partial derivative. For a given function $f(x)$, we can represent the function with a Taylor series, an infinite sum of polynomial terms. This is given as: $f(x) = \sum_{n=0}^\infty \frac{f^{(n)} (a)}{n!}(x-a)^n$. Expanded, this looks like: $f(x) = \frac{f(a)}{0!}(x-a)^0 + \frac{f'(a)}{1!}(x-a)^1 + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + …$ 

In other words, this gives us a way of expressing the function's value related to a center point $a$. If $a$ is reasonably close to the point we care about $x$, then notice that $(x-a) := \beta$ is  small - if it's less than 1, then a decreasing term in the numerator $(x-a)^n$, combined with a growing term $n!$ in the denominator means our terms get smaller and smaller. Each successive term, the ‘tail' of the Taylor series, has less of an impact on the final value $f(x)$. This means that we can truncate that tail and get a reasonably good approximation for $f(x)$ - not a perfect value, but something good enough for our purposes. 

This is how the Jacobian approximates the value of the final output $h_{final, t'}$ with respect to a given input layer and position $h_{l,t}$. Recall our function $F$, defined earlier as that which takes as input our current state $h_l$ and maps to our final output state $h_{final}$. Let's perturb $h_l$ slightly and see how that impacts the final layer: we'll express that perturbation as $h_l + \beta$. The Taylor approximation of $F$ would be:  $F(x) = \frac{F(a)}{0!}(x-a)^0 + \frac{F'(a)}{1!}(x-a)^1 + \frac{F''(a)}{2!}(x-a)^2 + ...$, or, simplified, $F(x) = F(a) + F'(a)(x-a) + \frac{F''(a)}{2!}(x-a)^2 + …$. Applying it to our case, where we start at layer $a = h_l$ and want to compute the effect on the value of $x=h_l + \beta$, we have: $F(h_l + \beta) = F(h_l) + F'(h_l)(h_l + \beta-h_{l}) + \frac{F''(h_l)}{2!}(h_l + \beta-h_l)^2 + …$

$$
F(h_l + \beta) = F(h_l) + F'(h_l)(h_l + \beta-h_{l}) + \frac{F''(h_l)}{2!}(h_l + \beta - h_l)^2 + …
\\
F(h_l + \beta) = F(h_l) + F'(h_l)(\beta) + \frac{F''(h_l)}{2!}(\beta)^2 + …
$$

So, when we nudge input $h_l$ by some amount $\beta$, we move this much: $F'(h_l)(\beta) + \frac{F''(h_l)}{2!}(\beta)^2 + …$. Cutting out the tail, and just taking the first term, we approximate that movement by $F'(h_l)(\beta)$, or $\frac{\partial F}{\partial(h_l)}(\beta)$. 

*Note that this is a scalar intuition. In the multivariate case, we have a $F$ taking in a vector input - the generalization of $F'(a)$ is itself the Jacobian matrix. Note that higher-order matrix derivatives aren't as direct as taking $F''(a)$ (we would have to look at the Hessian) but luckily the first order derivative suffices as approximation in our case.*

So how do we get from this small, localized update to our effect on the final layer? 

Consider the update equation - each layer of the model (attention + MLP) updates our residual stream, so $h_{k+1} = h_k + f_k(h_k)$ where $f$ represents the attention and MLP updates. Differentiating, we get $h'_{k+1} = \frac{\partial h_{k+1}}{\partial h_k} = I + \frac{\partial f_k}{\partial h_k}$ (I is the identity matrix!). 

Then, altogether to get from layer $l$ to final layer $L$, we essentially stack these updates: $\frac{\partial h_{final}}{\partial h_l} = \Pi_{k=l}^{L-1} (I + \partial f_k / \partial h_k)$. 

In more technical terms, the Jacobian lens represents a perturbation's impact on the final layer, having been relayed through all intermediate layers - all as a single matrix. In other words, $F$ is really a composition, taking into consideration each layer's update map: define $g_k(h) = h + f_k(h)$. Then, $F$ is really $g_{L-1} \circ g_{L-2} \circ … \circ g_{l}$. By the chain rule, then, $F'(h_l) = g'_{L-1} \times g'_{L-2} \times … \times g'_{l} = \Pi_{k=l}^{L-1} (I + \frac{\partial f_k}{\partial h_k})$. (Note the right-to-left order $L-1, L-2, … l$ - this is important since matrix operations aren't commutative).

All in all, the Taylor series shows us that we only need to keep the first order term for a reasonable approximation of how a small perturbation in our input layer affects later outputs. The chain rule shows us how we compose that into the Jacobian. Then, we add an expectation component - the averaging over positions and prompts to collapse all of these context-specific Jacobians into a transport map $J_l$.

# Conclusion

I'd love to keep exploring ideas around the J-lens - how it can be connected back to representations of the mind, how it can show different cognitive science theories of concepts. There's lots more to understand and to tinker with - to be continued!

# Sources
- Paper itself: https://transformer-circuits.pub/2026/workspace/index.html
- Accompanying repo: https://github.com/anthropics/jacobian-lens
- Research blog: https://www.anthropic.com/research/global-workspace