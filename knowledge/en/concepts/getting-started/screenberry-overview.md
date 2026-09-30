---
id: guide.getting-started.screenberry-overview
variant_id: guide.getting-started.screenberry-overview.imported-current-guide
title: Screenberry Overview
language: en
kind: concepts
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/getting-started/screenberry-overview.mdx
    sha256: 2fa085c656acfaceb79ca6c465ab8c2bcb48501ae2e6c1c23c9775c3fc7ec408
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/getting-started/screenberry-overview.mdx
  canonical_url: https://help.screenberry.com/en/getting-started/screenberry-overview
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 2fa085c656acfaceb79ca6c465ab8c2bcb48501ae2e6c1c23c9775c3fc7ec408
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Overview
    description: Understand the main Screenberry applications and common one-computer and two-computer system configurations.
    openGraph:
      title: Screenberry Overview
      description: Learn how Screenberry Server and Screenberry Panel work together.
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
---

# Screenberry Overview

Screenberry is a media-server platform for real-time, multi-screen playback and control. It is used for projection mapping, dome projection, stage screens, and multimedia installations.

Screenberry has two main applications. **Screenberry Server** processes media, runs projects, and produces video and audio output. **Screenberry Panel** connects to **Screenberry Server** and provides the interface for creating, configuring, and controlling projects.

Screenberry also includes **Screenberry Configurator**, a small utility used for system configuration and software-license management.

## System Setup

In a typical two-computer setup, **Screenberry Server** runs on the Media Server computer while **Screenberry Panel** runs on a separate Operator Workstation. The two computers communicate through the network, allowing the operator to control the project without using the Media Server computer directly.

**Screenberry Server** and **Screenberry Panel** can also run on the same computer. This is useful for learning Screenberry, preparing a project, testing, or operating a compact system.

More advanced systems can use one **Screenberry Panel** workstation to control multiple **Screenberry Servers** or allow multiple **Screenberry Panel** workstations to connect to one **Screenberry Server**.
