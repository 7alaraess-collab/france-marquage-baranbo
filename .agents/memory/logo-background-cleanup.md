---
name: Logo background cleanup
description: Local fallback for removing solid outer backgrounds from uploaded logos when automated background removal is unavailable.
---

Use ImageMagick flood-fill from the image border with a small fuzz tolerance, rather than globally making all white pixels transparent. This preserves white details inside circular or illustrated logos while removing only the connected outer background.

**Why:** Automated background removal may be unavailable in the current environment, and global white-to-transparent conversion can damage white lettering or artwork inside a logo.

**How to apply:** Generate a transparent PNG for web use, verify corner pixels are fully transparent, and visually inspect the result before replacing the source asset.