---
title: 'Widespread Microsoft Entra Lockouts Disrupt Organizations Globally – April 2025'
date: '2025-04-20'
authors: ['zerodaily']
tags: ['microsoft', 'authentication', 'incident-response', 'cloud', 'windows']
draft: false
summary: "A silent rollout of Microsoft Entra's MACE Credential Revocation feature triggered mass account lockouts worldwide on April 20, 2025, impacting thousands of organizations and sparking debate over automation in identity security."
type: Blog
---

On April 20, 2025, organizations worldwide experienced widespread user account lockouts due to a silent rollout of Microsoft Entra ID's new MACE Credential Revocation feature.[^1][^2] The incident, which began overnight, left IT teams scrambling as legitimate users were locked out en masse—sometimes up to a third of an organization's workforce—despite strong passwords and multi-factor authentication (MFA).[^1]

### What Happened?

Microsoft Entra ID (formerly Azure Active Directory) introduced MACE Credential Revocation to proactively disable accounts suspected of credential compromise.[^2] However, a misconfiguration or bug in the rollout caused the system to generate false positives, flagging legitimate accounts as compromised.[^1] Affected organizations received error code 53003, typically associated with conditional access policy failures.[^1] Managed service and detection providers reported over 20,000 lockout alerts in a single night, with the impact spanning multiple tenants and global regions.[^1]

### Community and Industry Response

- IT admins confirmed no evidence of actual compromise—tools like "Have I Been Pwned" showed no matches for affected accounts.[^1]
- The incident exposed a lack of transparency: the MACE feature was enabled without prior administrator notification or opt-in.[^1]
- Microsoft had not issued an official public statement as of April 20, leaving admins to rely on peer forums and unofficial channels for updates and workarounds.[^1][^2]
- The event has reignited debate about the risks of automated security controls without sufficient human oversight and staged rollouts.[^1]

### Key Takeaways for Organizations

- **Balance Security and Usability:** Automated credential revocation can prevent breaches, but false positives can disrupt operations and erode trust in security alerts.[^1]
- **Demand Transparency:** Organizations should insist on clear communication and opt-in for major security feature changes, especially those impacting user access.[^1]
- **Incident Response:** Admins should have manual override options and clear escalation paths when automation goes wrong.[^1]
- **Security Burnout:** Flooding IT teams with false alerts can lead to alert fatigue, diminishing vigilance for real threats.[^1]

### Timeline

- **April 19–20, 2025:** Mass lockouts begin overnight; reports surge from global organizations and managed service providers.[^1]
- **April 20, 2025:** News and community sources confirm the incident; Microsoft remains silent publicly.[^1][^2]

### Related Articles

- [Critical Microsoft Zero-Day Vulnerability CVE-2025-29824: What You Need to Know](/blog/2025-04-08-microsoft-zero-day)
- [Apple Patches Two Actively Exploited Zero-Days (CVE-2025-31200, CVE-2025-31201) – April 2025 Emergency Security Update](/blog/2025-04-16-apple-zero-day-emergency-patch)
- [Critical CrushFTP Authentication Bypass Vulnerability CVE-2025-31161: What You Need to Know](/blog/2025-04-13-crushftp-vulnerability)

[^1]: [Mass Account Lockouts Hit Organizations Due to Microsoft Entra’s MACE Rollout Error](https://undercodenews.com/mass-account-lockouts-hit-organizations-due-to-microsoft-entras-mace-rollout-error/)
[^2]: [Microsoft Entra releases and announcements](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new)
