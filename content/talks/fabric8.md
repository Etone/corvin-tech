---
title: "Using Fabric8 to dynamically create workloads on Kubernetes"
date: 2020-12-16T23:23:15+02:00
draft: false
---

## Abstract

Kubernetes hat sich in den letzten Jahren als der de-facto Open Source Standard für Container Deployments und Orchestrierung etabliert. Um Anwendungen auf Kubernetes zu deployen gibt es eine verschiedene APIs, die gängigste ist wahrscheinlich die CLI mit "kubectl". Im Umfeld von Java gibt es dafür fabric8.io was als plain API verfügbar ist oder u.a. auch als Basis für andere wie z.B. Spring Cloud Kubernetes verwendet wird. Im Kontext eines Kundenprojekts hatten wir die Anforderung dynamisch und basierend auf dem Anwendungskontext Workloads auf Kubernetes zu deployen, öffentlich zugänglich zu machen und auch wieder zu entfernen. In Kubernetes Sprache so viel bedeutend wie Deployments, ReplicaSets, Pods und Services aus der ebenfalls in Kubernetes laufenden Java Anwendung anzulegen, über einen Ingress Controller dynamisch zu provisionieren und auch bei Bedarf wieder zu löschen.

Diese Erfahrung wollen wir in diesem Talk mit vielen Live Beispielen den Zuhörern näher bringen, von Erfahrungen und Problemen im "high scale" berichten und aufzeigen wie uns die API erfolgreich geholfen hat.

## Resources

### Recording JCON 2020

{{<youtube LyWBqFtb2io>}}