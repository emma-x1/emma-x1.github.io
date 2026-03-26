---
title: Long Context for AI - RAG vs. RLM
description: RAG, RLMs, and effectively managing long context
date: '2026-03-26'
categories:
  - machine learning
published: false
---

One of the things that's struck me about AI performance is that so much of it comes down to engineering problems - it's not a matter of *what* to do so much as *how* to do it. One such area is the need for long, extensive context in LLMs. This is the length of tokens that a language model recieves and performs inference on to generate a response. 

It seems plausible that more information here is better - the more information I give it, the more clearly it can recieve my instructions and accomplish my goal. However, the opposite is often true. Past a certain limit, additional context leads to dilution - attention, the mechanism by which the LLM processes and draws correlations between tokens, is finite. With more overall tokens, the model must pay less attention to each one, leading to less emphasis on important tokens. This is a phenomenon known as context rot - as context length grows, the model experiences worse performance.