---
title: "Masterdata Query Service"
date: 2022-12-31T00:00:00+01:00
draft: false
categories: [professional]
archived: false
---

## Keypoints

- Sales system storing configuration data for sold items
- Migration of existing legacy application to new, microservice based architecture
- Migration from self-managed VM deployment to cloud hosted Kubernetes
- Dynamically provisioned "caching" services to keep [Multidimensional Decision Trees](https://en.wikipedia.org/wiki/Decision_tree) in memory for currently available items sold

## Description

Based on an exsiting system, which stored and made configurations accessible a modernisation of the tech stack was done. The main issue to solve was scalability to more markets, especially since the existing system was limited to a small amount of data and compute hosted in their own datacenters

## What did I do

The first task was to define a stategy to migrate the existing system. As wished, we decided to replatform the application, meaning the API and functionality was build very close to what was already present, while the framework, that the application was build with was changed. Also the whole application was designed cloud-native, with Kubernetes and the capabilities of Kubernetes in mind.

To increase the scalability, the application was split into multiple smaller services, each holding a smaller amount of configuration. The user was then routed to the correct deployment, which could be scaled individually. Also it was possible to deploy the configuration API individually or in deployment groups based on attribute selectors.

Besides developiong the application a huge focus on CICD and modern software engineering was set to keep the application as compliant with the 12-factor apps as possible and allow for much faster development cycles.

## Used Technologies

Kubernetes, Fabric8, Concourse, Java, SpringBoot, Vue.JS, Vuetify

## Further Material

- [Talk - Using Fabric8 to dynamically create workloads on Kubernetes](/talks/fabric8/)
- [Talk - Concourse in Action](/talks/concourse/)
