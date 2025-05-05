---
title: '"AirBorne" AirPlay Zero-Click Wormable RCE Vulnerability Threatens Billions of Apple Devices'
date: '2025-05-05'
authors: ['zerodaily']
tags: ['exploit', 'vulnerability']
draft: false
summary: 'Oligo Security has uncovered 23 vulnerabilities, dubbed “AirBorne, in Apple’s AirPlay protocol and SDK.'
type: Blog
---

Researchers have revealed a sweeping set of vulnerabilities in Apple’s AirPlay protocol and SDK, collectively named “AirBorne”. These flaws enable attackers to remotely compromise Apple and third-party devices, including through zero-click, wormable remote code execution (RCE). While Apple has released patches, the scale and nature of the vulnerabilities mean that millions of devices—especially third-party AirPlay-enabled products—may remain exposed for years. [^1], [^2]

## Key Takeaways

- **23 vulnerabilities discovered, 17 assigned CVEs:** Affecting both Apple and third-party AirPlay implementations.
- **Zero-click, wormable RCE:** Two vulnerabilities (CVE-2025-24252, CVE-2025-24132) allow attackers to compromise devices without user interaction and propagate malware across networks.
- **Wide device impact:** Macs, iPhones (with AirPlay enabled), Apple TV, visionOS, CarPlay, and tens of millions of third-party devices are affected.
- **Attack vectors:** RCE, access control bypass, user interaction bypass, local file read, sensitive data disclosure, MITM, and DoS.
- **Apple patched quickly:** Updates released for all supported Apple devices, but third-party device patching is inconsistent.
- **Massive exposure:** Over 2.3 billion Apple devices worldwide, plus tens of millions of third-party AirPlay-enabled products.

## Technical Overview

The vulnerabilities stem from flaws in the AirPlay protocol’s use of property list (plist) data structures and insufficient validation in the AirPlay SDK. Many attacks exploit type confusion or improper parsing of plist payloads sent over port 7000. Notably, the most severe issues allow attackers to:

- Achieve remote code execution (RCE) on vulnerable devices
- Bypass access controls and user interaction requirements
- Chain vulnerabilities to create wormable exploits that can spread malware across local networks

Oligo Security demonstrated that chaining CVE-2025-24252 and CVE-2025-24132 enables a zero-click, wormable RCE scenario—an attacker can compromise a device and use it as a launchpad to infect others on the same or future networks. [^1]

## Affected Devices and Software

According to Apple’s advisories and Oligo’s analysis, the following are impacted:

- **Apple Devices:**
  - iPhones (AirPlay receiver enabled)
  - Macs (default AirPlay settings)
  - Apple TV
  - visionOS devices
  - CarPlay
- **Third-Party Devices:**
  - Speakers, smart TVs, set-top boxes, and more using the AirPlay SDK
  - Estimated tens of millions globally

Apple patched affected products in updates including iOS 18.4, macOS Sequoia 15.4, tvOS 18.4, visionOS 2.4, and corresponding SDKs. However, many third-party vendors are slow to update, leaving a persistent attack surface. [^1], [^2]

## Attack Scenarios and Exploitation

The vulnerabilities enable a range of attacks, as outlined by Oligo Security and confirmed by independent reporting:

- Zero-click and one-click remote code execution
- Access control and user interaction bypass (including zero-click takeover)
- Local arbitrary file read and sensitive data disclosure
- Man-in-the-middle (MITM) and denial-of-service (DoS) attacks

Attackers can exploit these flaws via Wi-Fi or peer-to-peer connections. For example, a compromised device on a home or office network could automatically spread malware to other vulnerable devices, enabling espionage, ransomware, or supply-chain attacks. [^1], [^2]

## Mitigation and Recommendations

Security experts, including Oligo and Apple, recommend the following steps:

- Update all Apple devices (iOS, macOS, tvOS, visionOS, CarPlay) to the latest software releases
- For third-party AirPlay-enabled devices, check for firmware updates from manufacturers
- Use strong, unique Wi-Fi passwords to limit attacker access to local networks
- Monitor vendor advisories and apply security updates promptly

Organizations should prioritize patching, especially for devices exposed to untrusted networks or used in sensitive environments. For unpatchable third-party devices, consider network segmentation or disabling AirPlay features where feasible. [^1]

## Final Thoughts

The "AirBorne" vulnerabilities underscore the risks of protocol-level flaws in widely adopted consumer and enterprise technology. While Apple’s rapid response has mitigated risk for most users, the long tail of vulnerable third-party devices means this threat will persist. Regular patching, strong network hygiene, and ongoing monitoring are essential to defend against exploitation.

## Related Articles

- [Apple Emergency Patches Released for Three Actively Exploited Zero-Day Vulnerabilities](/blog/2025-04-08-apple-zero-days)
- [Apple Patches Two Actively Exploited Zero-Days (CVE-2025-31200, CVE-2025-31201)](/blog/2025-04-16-apple-zero-day-emergency-patch)
- [SAP Patches CVE-2025-31324 Zero-Day: Critical NetWeaver Vulnerability Actively Exploited](/blog/2025-04-27-sap-zero-day-cve-2025-31324-patched)

[^1]: [Airborne: Wormable Zero-Click RCE in Apple AirPlay Puts Billions of Devices at Risk](https://www.oligo.security/blog/airborne)
[^2]: [Millions of Apple Airplay-Enabled Devices Can Be Hacked via Wi-Fi](https://www.wired.com/story/airborne-airplay-flaws/)
