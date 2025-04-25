---
title: 'Apple Patches Two Actively Exploited Zero-Days (CVE-2025-31200, CVE-2025-31201) – April 2025 Emergency Security Update'
date: '2025-04-16'
authors: ['zerodaily']
tags: ['apple', 'zero-day', 'vulnerability', 'exploit', 'cisa', 'cyber-attack']
draft: false
summary: 'Apple has released emergency security updates for iOS, iPadOS, macOS, tvOS, and visionOS, patching two zero-day vulnerabilities (CVE-2025-31200, CVE-2025-31201) exploited in targeted attacks.'
type: Blog
---

On April 16, 2025, Apple issued emergency security updates for iOS 18.4.1 and iPadOS 18.4.1, addressing two zero-day vulnerabilities actively exploited in the wild.[^1] The update also applies to macOS Sequoia 15.4.1, tvOS 18.4.1, and visionOS 2.4.1. Both vulnerabilities are listed in CISA’s Known Exploited Vulnerabilities Catalog and have been observed in highly targeted attacks.[^4]

## CVE-2025-31200 – CoreAudio Remote Code Execution

- **Severity:** HIGH (CVSS 7.5)[^2]
- **Description:** A memory corruption issue in CoreAudio could allow remote code execution if a user processes a maliciously crafted audio stream or media file.[^2] Apple and Google’s Threat Analysis Group discovered the flaw, which has been exploited in sophisticated attacks against specific iOS users.[^1]
- **Affected Devices:** iPhone XS and later, iPad Pro 13-inch, iPad Pro 12.9-inch 3rd gen and later, iPad Pro 11-inch 1st gen and later, iPad Air 3rd gen and later, iPad 7th gen and later, iPad mini 5th gen and later. Also patched in macOS Sequoia 15.4.1, tvOS 18.4.1, visionOS 2.4.1.
- **Technical Fix:** Improved bounds checking to prevent memory corruption.[^1]

## CVE-2025-31201 – RPAC Pointer Authentication Bypass

- **Severity:** MEDIUM (CVSS 6.8)[^3]
- **Description:** An arbitrary read/write issue in RPAC could allow attackers to bypass Pointer Authentication, potentially escalating privileges.[^3] The flaw has been exploited in targeted attacks.[^4] Apple addressed the issue by removing the vulnerable code.[^1]
- **Affected Devices:** Same as above.[^1]

## Update and Mitigation Guidance

Apple urges all users of affected devices to update immediately:

- **iOS/iPadOS:** Settings → General → Software Update
- **macOS:** System Settings → General → Software Update
- **tvOS/visionOS:** System → Software Updates

These updates cannot be downgraded once installed.[^1] Organizations should prioritize patching due to the active exploitation of these vulnerabilities.[^4]

## Timeline

- **April 16, 2025:** Emergency updates released by Apple.[^1]
- **April 17, 2025:** CVEs added to CISA Known Exploited Vulnerabilities Catalog.[^4]

## Final Thoughts

Apple’s rapid response to multiple zero-day vulnerabilities highlights the critical importance of timely patching for all users and organizations. With active exploitation confirmed and inclusion in CISA’s Known Exploited Vulnerabilities Catalog, immediate updates are essential to protect against real-world attacks.

Regularly monitoring official advisories and adopting robust device management practices remain foundational to maintaining security in the evolving threat landscape. For the latest guidance, always consult Apple’s official support pages and referenced security bulletins.

## Related Articles

- [Apple Emergency Patches Released for Three Actively Exploited Zero-Day Vulnerabilities](/blog/2025-04-08-apple-zero-days)
- [Critical Microsoft Zero-Day Vulnerability CVE-2025-29824: What You Need to Know](/blog/2025-04-08-microsoft-zero-day)
- [Critical CrushFTP Authentication Bypass Vulnerability CVE-2025-31161: What You Need to Know](/blog/2025-04-13-crushftp-vulnerability)

[^1]: [Apple Security Advisory: iOS 18.4.1 and iPadOS 18.4.1](https://support.apple.com/en-us/122282)
[^2]: [NIST NVD: CVE-2025-31200](https://nvd.nist.gov/vuln/detail/CVE-2025-31200)
[^3]: [NIST NVD: CVE-2025-31201](https://nvd.nist.gov/vuln/detail/CVE-2025-31201)
[^4]: [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
