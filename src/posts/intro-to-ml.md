---
title: Introduction to Machine Learning
description: ML, RL, and Attention Sparsity
date: '2026-01-20'
categories:
  - machine learning
published: true
---
*Note - this is a living, unfinished post that will keep growing as I keep learning.*

Machine learning and AI, right now, feels very loud. There's a huge spectrum of how deeply we, as software engineers and developers, understand how the technology works as well as how we can use it effectively - two ideas that are not necessarily tightly correlated. I feel as though it's crucial to develop an aptitude in both - this is a summary on my current perception of ML from the ground up. 

## What I Know About ML
I'd start with the distinction between machine learning, AI, neural networks, and deep learning - all terms that relate to one another, but are not interchangeable. 
- **Artificial intelligence**: most broadly, the ability for a computer to perform tasks associated with 'human intelligence' - this includes the human ability to reason, to percieve the world, to learn, and more. This encompasses vast fields, including natural language processing, vision, robotics, and reasoning.
- **Machine learning**: a subset of AI, with a focus on models that make predictions based on data. This includes both supervised and unsupervised algorithms, with the key distinction being whether the data on which the algorithms are trained must be explicitly labelled. This includes traditional ML techniques, such as regression, k-means clustering, support vector machines, decision trees, and neural networks.
- **Neural Networks**: a subset of machine learning, which involves a series of interconnected nodes (neurons) which form layers.
- **Deep Learning**: a subset of neural networks, which use multilayered neural networks. This is heavily inspired by the brain's architecture, which consists of neurons that fire with electric signals.

## Attention Sparsity
- The core idea is this: attention, in its naive implementation, scales quadratically with prompt length. 
- For each token, we have a query matrix and a key matrix, and we must do a dot product to calculate their similarity in order to get the attention score. For a prompt of token length 10, that's 10\*10 = 100 dot products. For a prompt of token length 100, that's 100\*100 = 10,000 dot products.
- There are many ways we can optimize this, both baked into the model architecture itself, and as a runtime optimization. Some of these include sparse attention - see [MInference](https://github.com/microsoft/MInference/tree/main) and [XAttention](https://arxiv.org/abs/2503.16428) for excellent starting points.

## Resources
This blog heavily references a lot of incredible content put out by some of the leading voices in the field:
- Lilian Weng's blog, specifically [An Overview of Deep Learning for Curious People](https://lilianweng.github.io/posts/2017-06-21-overview/)
- Andrej Karpathy's autograd, micrograd, and other [video series](https://www.youtube.com/@AndrejKarpathy).
- 3Blue1Brown's [Neural Networks series](https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi), which explains the calculus behind backpropagation and machine learning.
- The Dwarkesh podcast, which has influenced my perception of both the magnitude and direction of the machine learning field