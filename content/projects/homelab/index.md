---
title: "Homelab"
date: 2025-01-26T16:31:49+01:00
draft: false
tags: [Homelab, proxmox, Docker, Container]
---

## Keypoints
- Maintain a small homelab to automate common house tasks and keep data locally

## Setup

In the begining of 2025, I moved to a new place. With that, I had the opportunity to finally setup a small homelab with home automation and services I wanted to try out for a long time.

Since I already knew I wanted to use HomeAssistant as my Home Automation and Smart home Platform, I knew I needed a setup that supports VMs and Docker Containers, so a small Kubernetes setup was (at least for the moment) not applicable. I decided to setup proxmox on a mini pc I still had left over.

## Deployed Tools, Software and Services

### Proxmox
I run a single instance of Proxmox for all VM needs. On it are currently four VMs:
- HomeAssistant OS
- Caddy
- Tailscale
- Debian as a Docker Host

### HomeAssistant
As described, I knew from the begining, that I wanted to run HomeAssistant. And since I wanted to run all sorts of Addons and have the possibility to extend HASS to whatever I needed in the moment, I decided to run HAOS on a VM.

Currently I only have a small set of Smart Home Devices, which I got when moving to this place, but I already have ideas of a bunch of "features" I want to have in my home (notifications when Mail arrives, Tracking of energy consumption, Notifications from all sorts of appliances when they are finished, ...).

### Caddy
To have automatic TLS Certificate management and the possibility to use my a domain for all my services, I needed a reverse proxy. Since I used nginx at work for a bunch of stuff and never really loved the config file I decided to use another proxy in my homelab.

After some research into traefik and failing to get it running with services that are not part of my docker network, I decided to check out Caddy. Since the configuration is so simple and the Features, especially handling TLS certificates and the renewal without any interference from my side seemed promising. Since I set it up in Proxmox as an LXC Container I never had any issue. Caddy is lightweight and just works for my usecases.

### Tailscale
To enable access from outside my home network, I wanted to use a VPN that was easy to setup and free. I knew Tailscale from a friend of mine, where the setup is extremly simple, just works and I only have two users, which means currently the whole setup is free of charge

### Debian Docker Host
Since I know my way around containers and the management of them, I wanted to have a docker host for all services that don't need a VM. And since I'm way more comfortable with Docker then with LXC I used a debian VM instead of proxmoxs integrated LXC capabilites.

On the docker host I have portainer running, if for whatever reason I need to look into logs of containers or something seems to break. For the most part I just SSH into the VM and execute the docker commands natively.

At the time of writing, I have 16 containers running with nine services that are usable in my home lab

#### Authelia
I knew I wanted to have OIDC wherever possible, so I decided to use Authelia as my centralized Auth component. The easy config and the very well documented integration into most services was the selling point here

#### Uptime Kuma
A Dashboard and Uptime tracking software, so I can generate notifications whenever a service seems to be down or needs my attention. Observability should never be an afterthought, so I put some Observability into my homelab

#### What's Up Docker
New addtion to the Lab, WUD tracks all containers running and generates notifications for updates. Especially for Hash updates, this is very useful. It could automatically update all the containers (like Watchtower does), but I really don't like the idea of running automatig updates without my knowledge, especially when I currently tend to deploy
`:latest` for a lot of services

#### Duplicati
I need Backups for my homelab, as I keep adding more data, that when lost would be quite painful (photos, important documents and so on). Since I don't want the backup to reside in my home, putting it offsite was a requirement. Duplicati allowed me to setup backups for all services and configration to an Azure Storage Account, encrypted with my own keys without any hassle. Yes, for a lot of data, this will be to expensive and I need to figure out another setup, but currently I only use around 100Gb, which is still fine to dump into an azure storage account.

#### Actual
I used YNAB for quite some time, but never liked the idea of paying a company. Also I could never link my acccount to YNAB, as my bank was not supported. With Actual I can keep nearly the same features I already used in YNAB and also link my account, even when that means I have to trust yet another party with my financial data

#### Immich
I store all my photos. And I didn't want to store them in Google Photos, since I want to degoogle my life a bit. With that beeing said, the UX of Immich is so close to Google Photos, that it feels like I never changed the App. Background uploads of Photos and Videos from my smartphone, Integration into OIDC and the timeline I'm used to from Google Photos made me pick Immich for my Photo Management solution. Also using my Gaming Setup as the machine learning server made the switch easy and fast, since running 5k pictures through the ML model would have taken ages with the two small cores my server runs on

#### Paperless-ngx
I wanted to digitalize all my paper documents for ages but could not find a usable Document Management System that felt modern and had all the features I wantes (auto tagging / categorizing, fast search and filter options and a usable file structure for when I need to grab the real PDF from the system without any webui). While Paperless fees a bit old and not that fancy, it works without any problem. The only exception is OCR, which produces nearly unusable outcomes on handwriting. I might change this out for a different, more modern DMS.

#### Heimdall
Having a Home page to find all the services and not remembering all the URLs and so on is quite important for me. Heimdall is a simple way to managed all the services and displays some nice information, e.g. how many photos im currently managing in immich, or how many documents are in my inbox in paperless

#### Speedtest Tracker
With the move to a new home I also had to change my ISP. Before that, I was one of the few lucky people in Germany who had FFTH. Unfortunately, moving to a much smaller city I don't have fibre in the new home. To measure my internet quality and check if the promised quality is delivered, I decided to run regular speedtests and track all the data that is produced by these.
