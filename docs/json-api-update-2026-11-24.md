# JSON API Guide Update — 24 November 2026

Andre supplied the complete revised English reference and a separate change description, and explicitly requested publication to both the User Guide and this knowledge base.

The [current reference](../knowledge/en/reference/integration-control/screenberry-json-api-current.md) supersedes the imported English API reference for current-guide questions. The [imported reference](../knowledge/en/reference/integration-control/screenberry-json-api.md) remains unchanged solely to preserve the immutable legacy-guide-3.4 export. Do not combine the two as equally current answers. Japanese content has not been translated or reviewed as part of this update.

The supplied revision documents 58 command names, adding RenameNode, GetCategories, AutoLayoutNodes, ForwardParameter, RemoveForwardedParameter, RenameForwardedParameter, ReorderForwardedParameter, GetLicenses, and SaveProject. It corrects listener reply conventions, plain-text errors, queued-success semantics, node types, playlist queries, item selectors and properties, marker updates, and invalid media information.

The supplied change description reports comparison with JsonApiFactory.cpp and verification of the saved document, without executing API commands. This is supplied review evidence, not an independently reproduced runtime test. The local source snapshot inspected during publication has GetPerformanceStats registered and no SaveProject registration, unlike the supplied revision. Consequently this update does not claim that the revision matches that local snapshot, or infer a Screenberry release from the date. Product-version applicability remains unspecified pending confirmation; publication approval is recorded separately. No private implementation source is included.

The new record remains in_review, with no verified_in or last_verified values. It is outside the immutable legacy baseline and version-filtered exports until applicability is established. The existing legacy record, baseline hashes, and archive remain unchanged.
