---
title: "Using Fabric8 to dynamically create workloads on Kubernetes"
date: 2020-12-16T23:23:15+02:00
draft: false
keywords: [kubernetes,fabric8,java]
---

## Abstract

Kubernetes has established itself as the de-facto open source standard for container deployments and orchestration in recent years. To deploy applications on Kubernetes there are several APIs, the most common is probably the CLI with "kubectl". In the Java environment, there is fabric8.io, which is available as a plain API or is also used as a basis for others such as Spring Cloud Kubernetes. In the context of a customer project, we had the requirement to dynamically deploy workloads to Kubernetes based on the application context, to make them publicly accessible and also to remove them again. In Kubernetes language as much significant as creating deployments, ReplicaSets, pods and services from the Java application also running in Kubernetes, dynamically provisioning them via an ingress controller and also deleting them when needed.

We want to share this experience with the audience in this talk with many live examples, report on experiences and problems in "high scale" and show how the API has helped us successfully.

## Slides

Will be uploaded shortly, Sorry

## Recordings

### JCON 2020 (german)

{{<youtube LyWBqFtb2io>}}
