---
title: 'Phishers Abuse Google Sites and DKIM Replay to Send Legitimately Signed Emails and Harvest Credentials'
date: '2025-04-22'
authors: ['zerodaily']
tags: ['phishing', 'exploit']
draft: false
summary: 'Campaign abuses Google Sites and DKIM replay to bypass email security and steal Google account credentials.'
type: Blog
---

_Note: As of publication (April 22, 2025), Google has not issued a dedicated public advisory or incident report specifically addressing this DKIM replay and Google Sites phishing campaign. This article is based on original discovery, reputable security research, and general official Google documentation._

A newly uncovered phishing campaign exploits weaknesses in Google Sites and the DKIM email authentication protocol, allowing attackers to send emails that appear to be legitimately signed by Google.

The campaign, first disclosed by Ethereum Name Service (ENS) developer Nick Johnson on April 16, 2025, demonstrates how phishers can bypass traditional security checks and harvest credentials using trusted Google infrastructure.[^1]

## Attack Overview: DKIM Replay & Google Sites Phishing

The attack begins with a security alert email that appears to originate from no-reply[@]google.com. Because the email is DKIM-signed by accounts.google.com, it passes all authentication checks and is threaded alongside genuine Google alerts in Gmail.[^1]

The message links to a portal hosted on sites.google.com — a Google-owned domain—which mimics Google's design and prompts the recipient to take actions such as “upload documents” or “view case files.” These actions redirect to a phishing login page designed to steal credentials.[^1]

## Technical Details: Google Sites Abuse and DKIM Replay

The campaign exploits two principal weaknesses:

1. **Google Sites Abuse:** Attackers use legacy Google Sites to host convincing phishing pages on google.com subdomains. This platform allows arbitrary scripts and embeds, making it easy to imitate Google's UI and difficult to take down malicious content quickly.
2. **DKIM Replay via OAuth Alerts:** Attackers create a Google account and register an OAuth app with a name containing a phishing message. When the attacker grants the app access, Google sends a DKIM-signed security alert email. The attacker then forwards this message to victims, preserving the DKIM signature. Because DKIM only authenticates headers and the message body—not the SMTP envelope—forwarding the message does not invalidate its cryptographic authenticity.[^1], [^2]

## Timeline and Discovery

- **April 16, 2025:** Nick Johnson (Ethereum Name Service) publicly discloses the attack after being targeted and investigating the phishing attempt in detail.[^1]
- **April 2025:** Security firm EasyDMARC publishes a technical analysis, confirming the DKIM replay method and its impact.[^2]
- **Following Disclosure:** Google initially dismissed the issue as “working as intended,” but later acknowledged the OAuth vector and committed to mitigation efforts after increased scrutiny.[^1], [^3]

## Google’s Response and Mitigations

Google has committed to addressing the OAuth abuse vector by altering how user-generated content appears in security alerts, such as prefixing system-generated text and using more descriptive subject lines.

However, the legacy Google Sites platform remains vulnerable, as it still permits scripting and embeds. Security experts recommend Google disable these features for public-facing content or restrict them further.[^1], [^2]

In October 2023, Google announced new requirements for bulk email senders, mandating stronger authentication and improved email validation.[^3]

However, this 2025 incident demonstrates that, despite these measures, significant weaknesses persisted in Google’s infrastructure. Attackers were still able to exploit trusted services and protocol edge cases, underscoring the need for continuous improvement and rapid response to emerging threats.

## Recommendations for Defenders

- Always verify that Google login pages are hosted on accounts.google.com, not sites.google.com or other subdomains.
- Inspect the “mailed-by” and “from” headers for inconsistencies.
- Treat any unexpected Google security alert with caution, especially if it requests document uploads or account verification via unfamiliar portals.
- Educate users about the risks of DKIM replay and the abuse of trusted cloud platforms in phishing campaigns.

## Final Thoughts

The Google Sites DKIM replay phishing campaign exposes the ongoing challenges of securing cloud platforms and email authentication protocols against sophisticated abuse.

This incident underscores the necessity for both vendors and defenders to continuously review and strengthen security controls, respond rapidly to new attack vectors, and educate users about emerging threats. Ongoing collaboration between researchers, vendors, and the security community is essential to closing gaps and protecting users from evolving phishing tactics.

## Related Articles

- [OCC Email Breach Exposes Sensitive Bank Data in Multi-Year Cyberattack (May 2023–2025)](/blog/2025-04-19-occ-email-breach)
- [Critical CrushFTP Authentication Bypass Vulnerability CVE-2025-31161: What You Need to Know](/blog/2025-04-13-crushftp-vulnerability)
- [Widespread Microsoft Entra Lockouts Disrupt Organizations Globally – April 2025](/blog/2025-04-20-microsoft-entra-mace-lockout)

[^1]: [Nick Johnson (ENS) original disclosure thread](https://threadreaderapp.com/thread/1912439023982834120.html)
[^2]: [EasyDMARC technical analysis](https://easydmarc.com/blog/google-dkim-replay-phishing/)
[^3]: [Gmail introduces new requirements to fight spam - Google Blog](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/)
