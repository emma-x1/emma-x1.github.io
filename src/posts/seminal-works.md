---
title: Seminal Works, Pt. 1
description: An entirely-too short exploration of the writing that has shaped today’s ‘intelligence.’
date: '2026-06-14'
categories:
  - machine learning
published: true
---

I believe that reading and writing are some of the best ways to absorb and process information. Lately, I've been interested in some of the discourse around AI - not the technical implementation, but its effects that will ripple through the economy and broader society. I'm interested in how people will _live_ with AI. 

I'm planning on doing another read, later, of more technical pieces. For now, here are some of the essays that have changed how I thought about AI - just unfiltered notes and thoughts. The essays covered in this piece are:
- "The Bitter Lesson," Rich Sutton
- "Machines of Loving Grace," Dario Amodei
- "Silicon Valley is Bracing for a Permanent Underclass," Jasmine Sun

The goal with putting this out is (1) to show works in progress and encourage others to do the same, and along the way push to continue to tease out my own thoughts (2) to encourage more discourse around the implications of AI beyond this little tech bubble, and (3) so that I can be corrected about my biases and blind spots.

# 1. The Bitter Lesson
*Rich Sutton, March 2019, read May 2026* http://www.incompleteideas.net/IncIdeas/BitterLesson.html

Summary: a solution to a computational problem that scales with data will outperform a fine-tuned, architected approach. This is because scaling computation is getting cheaper, and our attempts at building fine-tuned methods underestimate their complexity and often get in the way of scaling up computation.

- “General methods that leverage computation are ultimately the most effective”
- Moore’s Law: “generalization of continued exponentially falling cost per unit of computation”
    - Don’t leverage knowledge of the task itself to optimize within fixed amount of computation (ie. heuristics, ‘hand-crafted’ solutions). Instead scale up computation.
    - Generally, these optimizations simply complicate the method → less suited to take advantage of general methods leveraging computation
- Case studies:
    - Computer chess defeats Kasparov in 1997 with massive deep search.
    - Go ‘solved’ using search and self-play using value function (**search and learning)**.
    - Speech recognition based on statistical hidden Markov models or even deep learning outperforms heuristic-based. Led to generalization in all NLP processing.
- Patterns: in broad strokes, NLP (deep learning) and computer vision (convolution, invariances) move towards generalized methods
    - Note that replicating one’s own mind - how we understand human minds to work - is not necessarily best
- We learn this lesson through experience - it’s not intuitive. This is based on historical observations: AI researchers try to build knowledge into agents, which helps in short term and ‘feels right’ but plateaus and inhibits the long run. Breakthroughs arrive through scaling computation by search and learning.
    - It *feels* like effort and ‘hard problems’ should lead to reward. It’s unsatisfying to brute force it.
- The takeaway: “the great power of general purpose methods, of methods that continue to scale with increased computation even as the available computation becomes very great.”
    - Our minds are complex - we do not understand them, and so we cannot hope to achieve better results by trying to imitate them. “We want AI agents that can discover like we can, not which contain what we have discovered. Building in our discoveries only makes it harder to see how the discovering process can be done.”

# 2. Machines of Loving Grace
*Dario Amodei, October 2024, read May 2026.* https://darioamodei.com/essay/machines-of-loving-grace

Summary: There is little doubt that AI capabilities have, and will continue to, grow, both in capability and in adoption within society. This is an optimistic reckoning of what changes will take place, their potential across biology/health, neuroscience/mind, economic development, peace/governance, and work/meaning. There's going to be a period of figuring things out - a period in which it's crucial to set the right norms and boundaries - but AI can be a beautiful thing.

- A focus on AI risk is not a pessimist/doomer perspective - it is an identification of “the only thing standing between us and what [he sees] as a fundamentally positive future.” Most people underestimate the upside of AI.
- Big categories in positive applications of AI: biology and physical health, neuroscience and mental health, economic development and poverty, peace and governance, work and meaning. The implication here is that it’s involved almost everywhere.

Assumptions/Framework

- Define “powerful AI” as something that:
    - “will come reasonably soon”
    - “smarter than a Nobel Prize winner across most relevant fields” - this is re: general problem solving ability (”reasoning, learning, planning, creativity”)
    - “has all the ‘interfaces’ available to a human working virtually”
    - “can be given tasks that take hours, days, or weeks to complete”
    - “does not have a physical embodiment [… but] can control existing physical tools, robots, or laboratory equipment through a computer[, … even designing] robots or equipment for itself to use”
    - has reusable training resources which “can be repurposed to run millions of instances of it,” each acting independently but with the ability to collaborate
    - ie. a “country of geniuses in a datacenter”
- How fast will this new intelligence work? Something in between two extremes (instantaneous vs. not at all, due to physical limits and ample real-world problems and data, respectively).
- There’s “factors of production” for AI, with which we can talk about marginal returns to intelligence. These factors include:
    - “Speed of outside world” specifically in hardware, scientific experiments, and just the passage of time in the real world
    - “Need for [raw] data”
    - “Intrinsic complexity” in chaotic, messy-to-model problems
    - “Constraints from humans” in social (including legal) norms and habits
    - “Physical laws” in how the world itself works
    - Note the timescales associated with these factors - some, perhaps, dissolve or can be otherwise circumvented as time goes on

Biology and health

- A shift from just alleviating suffering (ie. by curing disease) to raising the baseline (ie. by controlling human processes, extending lifespan, etc - almost by engineering a human being).
- Think of AI not just as a means of processing data, but to truly drive new discovery - whether in technologies, techniques, therapies, etc.
    - This is uniquely powerful because some of these discoveries are serially dependent, and a few discoveries drive a large amount of our understanding.
- The prediction: “compress the progress that human biologists would have achieved over the next 50-100 years into 5-10 years,” such as by preventing/treating all infectious diseases, eliminating most cancers, curing genetic diseases, enabling “biological freedom,” and doubling the human lifespan.

Neuroscience and mind

- Neuroscience is a subset of biology, with similar trends in few discoveries driving vast progress.
- There are additional cross-links between AI and neuroscience - cognitive science (the mix of psychology, neuroscience, computer science, and philosophy) feels apt here, notably exemplified through interpretability research. This relationship is a two-way flow, where AI drives progress in neuroscience, and vice versa.
- The prediction: accelerated progress across “fine-grained neural measurement and intervention,” “advanced computational neuroscience,” and “behavioural interventions.” This looks like most mental illness cured, especially through genetic interventions, and an elevated “human baseline experience.”

Economic development and poverty

- Equality - the distribution of technologies and discoveries - is a fuzzier problem than developing the technologies themselves. This is partly because modelling this broad concept - “the economy,” involves so many layers of complexity, from each individual actor, to the emergent behaviours of political systems, to corruption, historical factors, etc.
    - There is a crucial need for collaboration (across companies, across policymakers) if AI is to make a dent in providing value in economic development.
- The prediction (notably a significantly less confident one): increased equality in the form of “distribution of health interventions” through logistic optimization, “economic growth” in developing nations and “inequality within countries” through AI adoption and its assistance in policy decisions, “food security” and “mitigating climate change” through AI-assisted technological advances,
    - Interestingly, “the opt-out problem” - an individual decision to avoid the use of AI - is noted here as something AI could itself help address through education. Note this isn’t a problem unique to AI - it mirrors anti-technology trends of the past.
- This section is also largely focused on economic development and poverty in developing nations. It is safe to say that its effects in developed nations, most notably the USA and China, are an ample topic worthy of its own discussion.

Peace and governance

- People, and conflict between them, is one of the biggest risks to cause human suffering. This is conflict at the scale of nations - fundamental ideological differences. Here, AI is a tool that does not implicitly favour a “good” side.
- This is the closest we get to discussing normativity directly: “the triumph of liberal democracy and political stability is not guaranteed, perhaps not even likely, and will require great sacrifice and commitment on all of our parts”
- We (”we” as the “good guys,” the ‘ideologically right’) accomplish this by gaining an absolute advantage in powerful AI: “by securing its supply chain, scaling quickly, and blocking or delaying adversaries’ access to key resources like chips and semiconductor equipment.”
- Note both the inter-nation conflict and intra-nation conflict. There is this implication that improvements in this field are an inherent good: that democracy, free speech, fair legal systems, etc are an inherent good.
- AI is suggested as a potential means of establishing a *more fair* system than one governed by human judgement. I would strongly, strongly hesitate on this front - there is no data that is inherently neutral. If we cannot ourselves define and follow a standard of “fair,” how can we create a system that does that consistently?

Work and meaning

- Consider for a moment that we do accomplish all that we set out to do in the previous sections. What, then, do *we* do as humans?
- There’s fuzzy ideas of what matters - “meaning comes mostly from human relationships and connection, not from economic labor. […] The facts that (a) an AI somewhere could in principle do this task better, and (b) this task is no longer an economically rewarded element of a global economy, don’t seem to me to matter very much.”
- There seems to be a tipping point - AI, now, is used to *supercharge* human productivity. Eventually, it will be used to replace it. There is, in a way, precedent for major economic change of this scale à la hunting/gathering → farming → feudalism → industrialism, and yet the nature of this change, let alone its implementation details, will still be an unknown unknown.

Thoughts

- Seems to be hedging quite a bit, because predictions of this nature are *hard* - “everything I’m saying could very easily be wrong… but I’ve at least attempted to ground my views in a semi-analytical assessment of how much progress in various fields might speed up and what that might mean in practice.”
- This definition of “powerful AI” feels, in some ways, achieved. We have seen frontier models and frameworks solve Erdos problems and work on long-range tasks (especially on the coding front) asynchronously. OpenClaw, Project Glasswing - these all feel like flavours of powerful AI.
- As cliche as it is, “with great power comes great responsibility.” An understanding of AI and its true capabilities comes with a need to guide it to the right path - we must ask not only “what can it do,” but “what should it do?” Is the ability to defy biological truths, or to create a synthetic human experience, or necessarily a good?
- On the changing meaning of work and purpose, all I’d have to say is that this is a deeply personal reckoning. That which drives an individual is so unique, so central to their being. There can be no universal statement made here. This is also an interesting reflection of American work culture as a whole - this centrality is what makes it at all necessary to ask how we find purpose in the absence of work.

Overall, this is a reckoning of what technology - specifically AI - will look like in an ideal world, at a timescale that’s not too far away. But beyond that, it’s a questioning of how we ought to be; who we as a people even are. What goodness looks like, what comes naturally, how dynamics between people work - when Amodei says, “it is a thing of transcendent beauty,” it is a reference to this fantasy. “We have the opportunity to play some small role in making it real.” What an *exciting* time to be alive.

# 3. Silicon Valley is Bracing for a Permanent Underclass
*Jasmine Sun, April 2026, read June 2026* https://www.nytimes.com/2026/04/30/opinion/ai-labor-work-force-silicon-valley.html?unlocked_article_code=1.e1A.zFGe.sWGP3oHShI4x&smid=url-share

Summary: We - individuals, AI labs, policy officials, society at large - are aware of the possible magnitude of implications related to AI's coming. This is a change that could be directed positively or negatively - it has the potential to cause benefit or harm, to both individual quality of life or at broader societal scale. This isn't the first time such a far-reaching technological change has occured, but it is unique in that its risks affect a power-holding group in society. There's a huge gap of work that needs to be done to shape the direction of impact, ensuring that this transformative technology is a boon. 

- There is this public sentiment felt almost universally across industries - AI is replacing human labour, and there is limited time before we are frozen in our class positions
- The idea of a permanent underclass, that there is little time remaining to be a part of innovation before it is taken over by AI is a self-fulfilling prophecy - “If left to its own devices, Silicon Valley may summon a permanent underclass through its own market logic. If you believe that human-substituting A.I. is inevitable, then every company should race to be the one to build it — and claim a market valuation the size of the economy and then some.”
    - There’s almost a parallel to nuclear weaponry - a technological arms race of sorts, where *because* we recognize the danger and power that these tools hold, we cannot afford to be the side that doesn’t have it.
- New models are benchmarked for real world tasks - specifically in their ability to replace jobs, to produce economic value. It’s interesting to note - the origins of LLMs, the transformer architecture, was created for translation. How did we go from simple translation to creating general intelligence?
- Companies accelerate AI-fueled layoffs and automation because of almost a sense of peer pressure - other companies around them do it, and so perhaps they feel a desire to cut jobs prematurely.
- For some individuals, there’s a sense of ethical unease in adopting AI-forward roles, and yet they do it anyways, perhaps because of a belief “that the arc of technological progress is fixed.” In other words, if it’ll happen anyways, why shouldn’t I be among the ones who take advantage of it? This, again, is a similar argument to weaponry - “why should it not be me who steers the direction that this is in?” or perhaps “why should I not be the one to benefit?”
- There is, though, another crowd (or perhaps some of the same ones) who believe in a a world that is ultimately better - more prosperous, more fair, more abundant - than today’s. But the question is what it’ll take, and who and what we’re willing to sacrifice to get there. The real changemakers, though, are those that control frontier AI labs - “OpenAI, Anthropic and Google DeepMind,” which are filled with “a well of worry, good ideas and limited commitments”
- OpenAI has always predicted that AI systems would be unstoppable, would catch up to human capability. We’d need systemic change - “shift power from labor to capital, […] aggressively tax assets”
    - Research about negative effects - environmental, gender bias, etc has been shut down in favour of AI benefits, coinciding with lobbyist Chris Lehane’s joining of the company
    - There are radical ideas of a shorter workweek, public wealth fund, higher taxes on corporations and capital gains, but no concrete steps to get there.
- Anthropic predicts a reality in which AI surpasses much of human capability - this is a dangerous world, in which the average person does not have economic leverage. More than just an economic threat, this is a democratic threat. This seems to be thought of as the ‘default path’ for AI by AI lab leaders, though they agree that it is not our fate given enough direction. The question remains - who will step up to take that action, who’s job is it?
- Then, power becomes ever more concentrated in large companies and government, whose interests are often aligned and not for the benefit of the general public - “this concentration can lead to ‘the reluctance of tech companies to criticize the U.S. government, and the government’s support for extreme anti-regulatory policies on A.I.’”
- There’s a version of the future in which human labour can be spent more on relational work - work where relationships and interactions are crucial, like teaching, healthcare, etc - and these jobs are better paid. The money comes from the AI labs, especially agents (major driver for Anthropic’s annualized revenue jump from $9B to $30B from 2025 to 2026). The money can clearly be made, what is less clear is the incentive for labs to use that in service of this vision they point to.
- AI is deeply disruptive, especially to entry-level work. So what does this mean for the system we've built of a career progression, a pipeline from junior to senior that trains and teaches? "Anthropic researchers found that junior engineers who relied on A.I. coding agents not only didn’t complete tasks much faster; they also understood their work less when quizzed about it afterward. The labor market implications are grim. At the same time that early-career workers are competing with A.I. for jobs, they may be stunting their own skill development by overusing A.I. tools."
- There’s political changes associated with AI job loss narratives - favour for job protection, taxation on AI-driven profits, a safety net. Data around AI, though, is sparse - for AI development (quality of models/performance), spread (adoption), second-order effects on inequality, whether demand is elastic or capped, and shape of economic growth. What we currently see: employment declining, automation of knowledge work.
- “The work force will shift toward less automatable jobs where humans retain a comparative advantage — such as entrepreneurship, care work, the skilled trades and entertainment like sports and the performing arts. We will also see new jobs we haven’t imagined yet, in numbers we cannot predict. […] At a societal level, the result of mass automation is a decline in worker bargaining power and the labor share of income.” The broad picture is that we don’t know - maybe there’s always going to be a need for human labour in some capacity, or maybe anything that can be done by a person can be better (more efficiently?) done by AI. In the short run, it is clear that it will cause disruption in traditional career pathways.
- There’s precedent for some of these shapes of changes - outsourcing labour overseas, previous technological revolutions. This, though, feels existential to a class that has always previously been safe.

"It is not as if the United States has never before seen problems of wealth inequality, a declining labor share of the economy or technological shocks to jobs. But this time we might finally do something about it, now that some of the most privileged are vulnerable."

- It feels like there’s broad awareness that AI is a force that’s coming, and that with no action, it’s likelier to be a net negative to the average person than a boon. And yet, there seems to be no real action. We, the powerful, say that it’s coming. We see the warning signs. So why don’t we act? *How* do we act, to align incentives, to protect the everyman?

# Concluding Thoughts
Zooming out from the technical details to investigate how AI will shape our lives is, I think, something that everybody working with the technology ought to do. We need to think about where we are going rather than blindly running towards a set goal, with little regard for where we're going and the impacts along the way. Sutton's piece focuses more on the implementation and architecture, but reminds us that our intuitions - 'research taste,' if you will - can be misguided, and to instead focus on that which compounds. Amodei's piece is optimistic about a world with powerful AI, but reminds us that the future is not yet written and that we must point AI at the right problems to solve. Finally, Sun's piece is more a warning - another technological revolution is already underway, and there is work to be done to cushion its disruptive effects and emphasize its benefits. AI may be coming to replace knowledge work, but there is a whole class of new problems - directional, applied, strategic - that it brings.

My personal view - as a software engineer, as a prospective researcher, as a technologist - is towards not stopping technological advancement, but instead shifting brainpower as a collective towards shaping how AI works, and where it should go. If knowledge work - the work of data analysts and software engineers, for example - can be largely displaced, we have the intellectual horsepower to retrain and redirect individuals to shape and direct a new type of work. More crucially, and more immediately actionably, I believe that everyone working with AI, whether as a researcher, or software engineer, or consultant, or something else entirely - has a responsibility to think carefully about their work in relation to this technological wave. Read the essays, talk about its effects, think about the real people implicated by each decision. Think about the reason behind each choice, and what is right rather than just what _is_. Only then can we create a world that is good for people.