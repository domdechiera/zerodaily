---
title: 'Apple Patches Two Actively Exploited Zero-Days (CVE-2025-31200, CVE-2025-31201) – April 2025 Emergency Security Update'
date: '2025-04-16'
authors: ['default']
tags: [apple, zero-day, emergency-patch, ios, ipad, macos, security-update]
draft: false
summary: 'Apple has released emergency security updates for iOS, iPadOS, macOS, tvOS, and visionOS, patching two zero-day vulnerabilities (CVE-2025-31200, CVE-2025-31201) exploited in targeted attacks.'
type: Blog
---

On April 16, 2025, Apple issued emergency security updates for iOS 18.4.1 and iPadOS 18.4.1, addressing two zero-day vulnerabilities actively exploited in the wild. The update also applies to macOS Sequoia 15.4.1, tvOS 18.4.1, and visionOS 2.4.1. Both vulnerabilities are listed in CISA’s Known Exploited Vulnerabilities Catalog and have been observed in highly targeted attacks.

### CVE-2025-31200 – CoreAudio Remote Code Execution

- **Severity:** HIGH (CVSS 7.5)
- **Description:** A memory corruption issue in CoreAudio could allow remote code execution if a user processes a maliciously crafted audio stream or media file. Apple and Google’s Threat Analysis Group discovered the flaw, which has been exploited in sophisticated attacks against specific iOS users.
- **Affected Devices:** iPhone XS and later, iPad Pro 13-inch, iPad Pro 12.9-inch 3rd gen and later, iPad Pro 11-inch 1st gen and later, iPad Air 3rd gen and later, iPad 7th gen and later, iPad mini 5th gen and later. Also patched in macOS Sequoia 15.4.1, tvOS 18.4.1, visionOS 2.4.1.
- **Technical Fix:** Improved bounds checking to prevent memory corruption.

### CVE-2025-31201 – RPAC Pointer Authentication Bypass

- **Severity:** MEDIUM (CVSS 6.8)
- **Description:** An arbitrary read/write issue in RPAC could allow attackers to bypass Pointer Authentication, potentially escalating privileges. The flaw has been exploited in targeted attacks. Apple addressed the issue by removing the vulnerable code.
- **Affected Devices:** Same as above.

### Update and Mitigation Guidance

Apple urges all users of affected devices to update immediately:

- **iOS/iPadOS:** Settings → General → Software Update
- **macOS:** System Settings → General → Software Update
- **tvOS/visionOS:** System → Software Updates

These updates cannot be downgraded once installed. Organizations should prioritize patching due to the active exploitation of these vulnerabilities.

### Timeline

- **April 16, 2025:** Emergency updates released by Apple
- **April 17, 2025:** CVEs added to CISA Known Exploited Vulnerabilities Catalog

### Sources

1. [Apple Security Advisory: iOS 18.4.1 and iPadOS 18.4.1](https://support.apple.com/en-us/122282)
2. [NIST NVD: CVE-2025-31200](https://nvd.nist.gov/vuln/detail/CVE-2025-31200)
3. [NIST NVD: CVE-2025-31201](https://nvd.nist.gov/vuln/detail/CVE-2025-31201)
4. [CISA KEV Catalog](https://cisa.gov/known-exploited-vulnerabilities-catalog)

### Related Articles

- [Apple Patches Two Zero-Days in Early April 2025](2025-04-08-apple-zero-days.md)
- [Microsoft Zero-Day Patched in April 2025](2025-04-08-microsoft-zero-day.md)
- [CrushFTP Vulnerability: What You Need to Know](2025-04-13-crushftp-vulnerability.md)
