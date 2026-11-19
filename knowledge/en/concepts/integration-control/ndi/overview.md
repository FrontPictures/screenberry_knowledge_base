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
      "scope": "Owner reviewed the local guide and approved GitHub publication on 2026-11-19. Deployment awaits Vercel administrator approval; not independently runtime-tested."
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
    "sha256": "a5cf5e18350feac6e6faf6d70ccfd82afdcdae7cddc7917423089e52691bdc2f"
  },
  "review": {
    "publication_approved_by": "Andre",
    "publication_approved_on": "2026-11-19",
    "runtime_verified": false,
    "deployment_status": "pending-administrator-approval",
    "applicability": "Screenberry 3.4; owner explicitly instructed that NDI functionality is the same in 3.4 and the inspected 3.5.0 beta build 2422 snapshot. Version parity is an owner-provided assumption, not runtime verification. Windows-specific configuration remains scoped to the documented NDI runtime settings."
  }
}
---

# NDI in Screenberry

NDI transfers video and audio between applications and devices over a network. In Screenberry, use **NDI In** to bring an external stream into a project and **NDI Out** to make a project's image and audio available to another NDI receiver.

**Screenberry Panel** also uses NDI to receive video previews from **Screenberry Server**. These previews are separate from the streams you configure with **NDI In** and **NDI Out** nodes.

Both **NDI In** and **NDI Out** run on the computer hosting **Screenberry Server**, even when you select a source or edit their settings from **Screenberry Panel** on a separate Operator Workstation.

## Before You Start

- Connect the source and receiver to a network that allows communication between them. For the initial setup, use a wired connection on the same subnet where possible. See [Network Requirements](https://help.screenberry.com/en/getting-started/hardware#network).
- Start the sending application or device and enable its NDI output. A running application does not necessarily publish an NDI stream.
- Identify the computer that receives the stream. Its network access and NDI settings determine whether it can discover and receive the source.
- Check that the sender's and receiver's **Groups** settings allow the source to be discovered. With empty **Groups** fields, the Screenberry NDI nodes use **Public**.
- Allow the required applications through the firewall on the intended network. On managed networks, ask the administrator to check discovery and media traffic.

Begin with one source and one receiver. Confirm that the expected moving image and, if required, audio arrive before adding further streams or processing.

## Source Discovery and Reception

Discovery makes a source appear in a receiver's source list. Reception transfers its video and audio. A source appearing in the list confirms that it has been discovered; it does not establish that media can reach the receiver.

For **NDI In**, **Groups** selects the groups to search, and **IP Addresses** supplies additional remote computers to query for sources. Neither parameter selects the local network adapter used by Windows.

If a source is missing, begin with its NDI output and discovery settings. If it is listed but delivers no image, check the source's content, receiver settings, and network path. The receiving and sending guides include checks for both situations.

## NDI Previews in Screenberry Panel

When **Screenberry Panel** displays an NDI video preview from **Screenberry Server**, the receiving computer is the Operator Workstation. You do not need to add an **NDI In** node to receive that Panel preview.

A successful connection to **Screenberry Server** does not by itself confirm that preview video can arrive. If controls work but the NDI preview does not, check the network on the computer running **Screenberry Panel**. If an external stream fails in an **NDI In** node, check the computer running **Screenberry Server** instead.

For Windows computers with multiple network adapters, follow [NDI Network Configuration](https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration). Start with adapter priorities and use the transport workarounds only if needed.

## Related Topics

- [Adding and Managing Nodes](https://help.screenberry.com/en/working-with-nodes/adding-and-managing-nodes)
- [Linking Nodes](https://help.screenberry.com/en/working-with-nodes/linking-nodes)
- [Working with Audio](https://help.screenberry.com/en/working-with-audio)
