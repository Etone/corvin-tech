---
title: "Task Management platform for lean construction"
date: 2023-12-31T00:00:00+01:00
draft: false
categories: [professional]
archived: false
---

## Keypoints

- Event driven architecture with infinite retention policy
- Development of BIM integration
- Management of large files (mutliple GB), including virus scanning and post processing

## Used Technologies

Kubernetes, Terrafrom, Kotlin, Spring Boot, Kafka, Azure, Azure DevOps, Confluent Cloud, DataDog, MongoDB

## What did I do

My tasks in RmS where focused on the infrastructure and operations of RmS. Within the project I implemented the following tasks:

### Replacing the existing OIDC implementation (Angular based in the frontend) with a session cookie based approach

The main task was to enable Token Replacement in the API Gateway from the Session Cookie to the JWT used in the backend services. Another aspect was the session management and storage in the existing infrastructre.

### Large file handling for upload of IFC files

To enable uploads of 3D Models the implementated file handling had to be reworked. For smaller profile pictures it was no issue keeping the uploaded file in memory for a short time, but for IFC files which where several gb in size, this was no longer possible. The reworked solution was based on a centralized "Quarantine" Azure storage account and the needed eventing infrastructure to notify consuming services when a file upload was finished.

### Replacing the malware and anti-virus solution

The reworked large file handling solution enabled the replacement of a self managed virus scanning solution with azures build in capabilities. This was needed as the self managed scanning solution did not support file streaming, meaning a scan would need to load the whole file into memory, a no go for large IFC models. 

### Enabling CD for most of the backend

The team already had an established staging and release concept which had very minimal manual work needed. To further increase our deployment speed we automated the manual steps, removed the gates and established more communication between backend and frontend facing applications to enable us to not rollout breaking changes. These changes lead to a 100% Uptime for customers in 2022 while we did Kafka topic migrations, replaced the OIDC provider and migrated databases to new servers

### Enabling DataDog Browser Tests for severe outages

To reduce our alerting noise we created a less noise, more focused alerting channel. This channel was filled with alerts that meant downtimes for the users (e.g. DataDog Browser test could not login and read the asscoiated project).

## Further Material
- [Blog post - Handling large files in Azure](https://blog.axels.cloud/posts/2023-09-05-handling-large-files-in-kubernetes-on-azure/)
- [Open Source - Backend](https://github.com/boschglobal/bosch-pt-refinemysite-backend)
- [Open Source - Frontend](https://github.com/boschglobal/bosch-pt-refinemysite-frontend)
- Unfortunately the IaC Code will not be open sourced except for a small part in the utilities of the backend to setup a Confluent Cloud Kafka Cluster
