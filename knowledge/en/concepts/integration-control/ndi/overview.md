---
{
  "id": "guide.integration-control.ndi.overview",
  "variant_id": "guide.integration-control.ndi.overview.owner-approved-2026-11-19",
  "title": "NDI in Screenberry",
  "language": "en",
  "kind": "concepts",
  "status": "in_review",
  "owner": "Andre",
  "applies_to": {
    "from": "3.4",
    "until_exclusive": "3.5"
  },
  "verified_in": [],
  "last_verified": null,
  "evidence": [
    {
      "type": "owner-approved-guide",
      "url": "https://help.screenberry.com/en/integration-control/ndi/overview",
      "scope": "Owner reviewed the concise NDI revision and Settings formatting, and approved GitHub publication on 2026-11-20. Deployment awaits Vercel administrator approval; not independently runtime-tested."
    },
    {
      "type": "implementation-review",
      "snapshot": "3.5.0 beta, source build 2422",
      "scope": "NDI node and receiver implementation inspected locally; source-backed prose approved for the guide. Original private source is not included."
    }
  ],
  "aliases": [
    "NDI"
  ],
  "related": [
    "guide.integration-control.ndi.receiving-ndi-streams",
    "guide.integration-control.ndi.sending-ndi-streams",
    "guide.integration-control.ndi-network-configuration"
  ],
  "presentation": {
    "mode": "text-only",
    "illustrations": null,
    "visual_information_review": "not-applicable"
  },
  "source": {
    "path": "content/en/integration-control/ndi/overview.mdx",
    "canonical_url": "https://help.screenberry.com/en/integration-control/ndi/overview",
    "sha256": "fb4c3579d0b51643e6eaf7ee7dc1627dbffb3f94e6b7a8dfc759155ebc159cf9"
  },
  "review": {
    "publication_approved_by": "Andre",
    "publication_approved_on": "2026-11-20",
    "runtime_verified": false,
    "deployment_status": "pending-administrator-approval",
    "applicability": "Screenberry 3.4; owner explicitly instructed that NDI functionality is the same in 3.4 and the inspected 3.5.0 beta build 2422 snapshot. Version parity is an owner-provided assumption, not runtime verification. Windows-specific configuration remains scoped to the documented NDI runtime settings."
  }
}
---

# NDI in Screenberry

Screenberry exchanges video and audio over NDI through two nodes: **NDI In** receives external streams, and **NDI Out** sends project output to other applications or devices. See [Receiving NDI Streams](https://help.screenberry.com/en/integration-control/ndi/receiving-ndi-streams) and [Sending NDI Streams](https://help.screenberry.com/en/integration-control/ndi/sending-ndi-streams).

Both nodes run on the computer hosting **Screenberry Server**, including when you configure them from **Screenberry Panel** on a separate Operator Workstation.

## NDI Previews in Screenberry Panel

**Screenberry Panel** also receives NDI video previews from **Screenberry Server**. These do not require an **NDI In** node.

If **Screenberry Panel** controls work but its NDI preview does not, check reception on the Operator Workstation. For an **NDI In** problem, check the Media Server instead. On Windows systems with multiple adapters, see [NDI Network Configuration](https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration).
