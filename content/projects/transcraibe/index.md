---
title: "TranscrAIbe"
date: 2024-10-01T11:48:16+02:00
draft: false
categories: [private, professional]
archived: false
tags: [OpenAI, Cloud, Azure, Kubernetes, Java, Micronaut, Azure AI Services]
---

## Keypoints

- Showcase of Micronaut and AI integration using Azure Open AI
- Based on real world usecase for client

## Used Technologies

Azure OpenAI, Azure Speech Service, Micronaut, Java, [POD](../pod)

## What did I do

For the Talk [Java and AI](../../talks/java-and-ai) I created a demo application in micronaut which takes .mp3 compressed podcast episodes and generates the transcript of the provided episode using Azure Speech. This transcript is then used to summarize the episode and generate some marketing relevant information using Azure OpenAI and GPT-4o. This is then used in the production of podcast episodes to create social media posts, podcast descriptions and handouts for the episode.

## Further Material
- [Talk](../../talks/java-and-ai)
- [Repository](https://github.com/Etone/transcraibe)
