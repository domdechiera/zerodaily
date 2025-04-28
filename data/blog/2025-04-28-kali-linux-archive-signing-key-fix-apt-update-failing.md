---
title: "Kali Linux Archive Signing Key Update: How to Fix 'apt update' Failing"
date: '2025-04-28'
authors: ['zerodaily']
tags: ['industry-news']
draft: false
summary: 'Kali Linux users must manually install a new archive signing key to restore secure updates after the previous key was lost. Failure to act will break package management for all users.'
type: Blog
---

Kali Linux users will soon experience a critical issue: the official package repository signing key has changed, and all users must install the new key to continue receiving updates. Without this manual intervention, `apt update` and package management will break for all Kali installations.[^1]

## Key Takeaways

- All Kali Linux users must update the archive signing key immediately.
- Failure to act will result in broken updates and potential security risks.
- The new key is valid until February 2027.
- Manual action is required; automated updates will fail until resolved.
- The change affects all installations using the official Kali repositories.

## What Happened?

On April 28, 2025, the Kali Linux team announced that they lost access to their previous repository signing key. As a result, the repository was frozen temporarily to prevent update failures. With the rollout of a new signing key, users must now manually install it to restore secure package updates. The repository is now signed with the new key, and the freeze has been lifted. [^1], [^2]

## How to Fix: Step-by-Step

To restore updates and maintain security, follow these steps:

1. Download and install the new signing key:

   ```sh
   sudo wget https://archive.kali.org/archive-keyring.gpg -O /usr/share/keyrings/kali-archive-keyring.gpg
   ```

   Or, using curl:

   ```sh
   sudo curl https://archive.kali.org/archive-keyring.gpg -o /usr/share/keyrings/kali-archive-keyring.gpg
   ```

2. Verify the keyring checksum:

   ```sh
   sha1sum /usr/share/keyrings/kali-archive-keyring.gpg
   # Expected: 603374c107a90a69d983dbcb4d31e0d6eedfc325
   ```

3. Resume normal updates:

   ```sh
   sudo apt update && sudo apt upgrade
   ```

The new keyring contains both the old (ED444FF07D8D0BF6) and new (ED65462EC8D5E4C5) signing keys for compatibility.[^1]

## Technical Details & Timeline

- The repository was frozen after the signing key was lost, preventing updates since April 18, 2025.
- The new signing key was published in the package `kali-archive-keyring 2024.1`.
- The new key is valid until February 2027, ensuring long-term update security.

## Impact & Severity

- **Severity:** High. All Kali Linux users will be unable to update or install packages until the new key is installed.
- **Affected Systems:** All installations of Kali Linux using the official repositories.
- **Risk:** Inability to update may expose users to unpatched vulnerabilities and disrupt workflows.

## Final Thoughts

This incident underscores the importance of repository signing key management and prompt user action in the open source ecosystem. All Kali Linux users should act immediately to restore secure updates and minimize risk.

## Related Articles

- [Vibe Coding with LLMs: Security Flaws and Real-World Risks Revealed](</blog/2025-04-25-vibe-coding-llms-security-flaws>)
- [ConnectWise Releases ScreenConnect 25.2.4 Security Patch for Critical ViewState Vulnerability (2025-04-25)](</blog/2025-04-25-connectwise-screenconnect-25-2-4-security-patch>)
- [CISA Advisory: Critical Bugs in Siemens and Schneider Electric Industrial Gear (2025-04-24)](</blog/2025-04-24-cisa-advisory-siemens-schneider-electric-critical-bugs>)

[^1]: [A New Kali Linux Archive Signing Key](https://www.kali.org/blog/new-kali-archive-signing-key/)
[^2]: [kali-archive-keyring 2024.1 migrated to kali-rolling](https://pkg.kali.org/news/572421/kali-archive-keyring-20241-migrated-to-kali-rolling/)
