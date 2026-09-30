# Source-only archive

site/ retains 272 authored website files, including all original MDX pages and navigation, with their original bytes. Public resources are no longer bundled. source-manifest.json lists only retained source files. catalog/external-resources.json records excluded resource provenance without promising local availability.

The original MDX may still contain image references: it is immutable historical evidence, not the active knowledge corpus. Do not search or publish it as a second set of current knowledge.

presentation-migrations/ preserves historical manifests and reports from the earlier full-media snapshot. Their resource counts and restoration checks describe that earlier state only. pnpm restore-source reconstructs source files, not a runnable site with assets.
