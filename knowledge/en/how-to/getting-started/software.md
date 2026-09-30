---
id: guide.getting-started.software
variant_id: guide.getting-started.software.imported-current-guide
title: Install Screenberry
language: en
kind: how-to
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/getting-started/software.mdx
    sha256: 2a042c032181fb04937971fc1a6d3149fea35d549805e4f9ff31a5b537ce68d0
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/getting-started/software.mdx
  canonical_url: https://help.screenberry.com/en/getting-started/software
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 2a042c032181fb04937971fc1a6d3149fea35d549805e4f9ff31a5b537ce68d0
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Install Screenberry
    description: Install Screenberry Server and Screenberry Panel with the Screenberry Setup Wizard for Windows.
    openGraph:
      title: Install Screenberry
      description: Follow the Screenberry Setup Wizard to install the required Screenberry applications.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/getting-started/software.yaml
  visual_information_review: not-independently-verified
---

# Software Installation

Run **Screenberry Setup** on any Windows computer where **Screenberry Server** or **Screenberry Panel** will be used. Install **Screenberry Server** on a Media Server computer, **Screenberry Panel** on an Operator Workstation, or both applications when they will run on the same computer.

**Screenberry Configurator** is installed with Screenberry and does not require a separate download or installation procedure.

## Install Screenberry on Windows

1. Run the **Screenberry Setup** `.exe` file to open the **Screenberry Setup Wizard**.

   (Screenberry Setup Wizard welcome screen)

2. Choose the installation folder, then select **Next**.

   (Screenberry Setup Wizard installation-folder selection)

3. Select the Screenberry components required on this computer, then select **Next**.

   (Screenberry Setup Wizard component selection)

4. Review and accept the **End User License Agreement**, then select **Next**.



5. Choose where the Screenberry shortcuts should appear in the **Start menu**, then select **Next**.

   (Screenberry Start menu shortcut options)

   (Screenberry Setup Wizard shortcut-folder selection)

6. Select **Install** and wait for the installation to finish.

   (Screenberry Setup Wizard ready to install Screenberry)

7. Select **Finish** to close the Setup Wizard.

   (Screenberry installation completed in the Setup Wizard)

The selected Screenberry applications are now available from the Windows **Start menu**.

## Allow Screenberry through Windows Firewall

The first time **Screenberry Server** starts after installation, **Windows Security Alert** may ask whether to allow network communication through **Windows Firewall**.

Allow **Screenberry Server** on the trusted network used by the Media Server and Operator Workstation. Do not enable access for an untrusted public network unless it is intentionally part of the Screenberry system and has been reviewed by the system administrator.
