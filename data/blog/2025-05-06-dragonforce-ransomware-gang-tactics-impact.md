---
title: 'DragonForce Ransomware Gang: Affiliate Model, Tactics, and Global Impact'
date: '2025-05-06'
authors: ['zerodaily']
tags: ['malware', 'cyber-attack']
draft: false
summary: 'DragonForce, a ransomware group with hacktivist origins in Malaysia, has evolved into a major global threat using a distributed affiliate model and multi-extortion tactics.'
type: Blog
---

## Key Takeaways

- DragonForce began as a Malaysian hacktivist group in August 2023 and quickly transitioned to a ransomware-as-a-service (RaaS) operation with a global reach.
- In March 2025, DragonForce rebranded as a "cartel," allowing affiliates to create their own brands using shared infrastructure and tools.
- The group’s operations blend political hacktivism with financially motivated extortion, targeting government, commercial, and retail sectors worldwide.
- DragonForce’s ransomware payload is based on the leaked LockBit 3.0 source code, reflecting a broader trend in the ransomware ecosystem.
- The group employs a multi-extortion model, threatening data leaks and reputational damage to pressure victims.

## Background

DragonForce ransomware operations emerged in August 2023, originating from Malaysia and initially presenting as a pro-Palestine hacktivist collective. Over time, the group’s focus shifted toward financial gain, while retaining elements of political targeting. By March 2025, DragonForce had rebranded as a "cartel", pioneering a distributed affiliate model that enables threat actors of varying skill levels to launch ransomware campaigns under their own brands using DragonForce’s infrastructure. [^1], [^3]

## Technical Analysis and Tactics

The following details are drawn from original research sources including Secureworks, Palo Alto Networks Unit 42, and SentinelOne:

- **Affiliate Model:** DragonForce’s distributed model provides affiliates with admin panels, encryption and negotiation tools, file storage, Tor-based leak sites, and support services. Affiliates are not required to use DragonForce’s ransomware, increasing operational flexibility. [^1]
- **Victimology:** The group has targeted government institutions, law firms, medical practices, commercial enterprises, and major UK retailers. Notable campaigns have affected organizations in Israel, India, Saudi Arabia, and the UK.
- **Initial Access:** DragonForce commonly uses phishing, exploitation of known vulnerabilities, and credential stuffing attacks on RDP and VPN services. Leaked or stolen credentials are also leveraged for access to internet-facing systems. [^3]
- **Tools and Payloads:** The group uses Cobalt Strike, mimikatz, Advanced IP Scanner, PingCastle, SystemBC backdoor, and other remote management utilities. The ransomware payload is derived from LockBit 3.0 source code, a tactic shared by other emerging groups. [^2]
- **Exploited Vulnerabilities:**
  - CVE-2021-44228 (Apache Log4j2 – Log4Shell)
  - CVE-2023-46805, CVE-2024-21887, CVE-2024-21893 (Ivanti Connect Secure/Policy Secure)
  - CVE-2024-21412 (Windows SmartScreen)
- **Multi-Extortion:** DragonForce threatens both data leakage and reputational harm, operating leak sites on Tor to publish stolen data. [^3]

## Timeline of Activity

- **August 2023:** DragonForce emerges as a ransomware operator from Malaysia, initially with a hacktivist focus.
- **February 2024:** Group begins advertising its RaaS offering on underground forums.
- **March 2025:** DragonForce rebrands as a cartel, launching a distributed affiliate model. By March 24, 2025, 136 victims are listed on its leak site.
- **2024–2025:** Campaigns expand to target major retailers in the UK and organizations across multiple sectors and geographies.

## Impact & Risks

DragonForce’s operations pose significant risks to organizations across multiple sectors and regions. The consequences of a successful attack can be severe:

- **Operational Disruption:** Ransomware deployment can halt business operations, disrupt supply chains, and lead to downtime for critical services.
- **Data Exposure:** Multi-extortion tactics mean sensitive data may be leaked even if a ransom is paid, causing reputational harm and regulatory consequences.
- **Financial Loss:** Ransom payments, incident response, legal fees, and potential regulatory fines can result in substantial financial impact.
- **Sectoral Targeting:** Law firms, healthcare, retail, and government entities are especially at risk due to the group’s victimology and opportunistic targeting.

## Recommendations

Defenders should take the following steps to mitigate the risks posed by DragonForce and similar ransomware groups:

- **Patch Management:** Prioritize patching of known exploited vulnerabilities, especially those listed above (e.g., Log4Shell, Ivanti, Windows SmartScreen).
- **Credential Hygiene:** Enforce strong, unique passwords and enable multi-factor authentication (MFA) for all remote access services.
- **Network Segmentation:** Restrict RDP, VPN, and other remote services to only those who need access, and monitor for unusual login attempts.
- **Endpoint Protection:** Deploy advanced endpoint detection and response (EDR) solutions to detect tools like Cobalt Strike, SystemBC, and other common attacker utilities.
- **Backup Strategy:** Maintain offline, immutable backups and regularly test recovery procedures.
- **Employee Training:** Educate users on phishing, credential theft, and social engineering tactics commonly used for initial access.

## Final Thoughts

DragonForce’s rapid evolution from hacktivist collective to a sophisticated ransomware cartel exemplifies the dynamic nature of the threat landscape. The group’s distributed affiliate model lowers the barrier to entry for cybercriminals and increases the scale of potential attacks.

Organizations should remain vigilant, prioritize vulnerability management, and adopt a layered security approach to defend against multi-extortion ransomware threats. Ongoing collaboration between industry, researchers, and law enforcement is essential to disrupt these criminal ecosystems and protect potential victims.

## Related Articles

- [Golden Chickens, TerraStealerV2, and TerraLogger: The Evolving Malware-as-a-Service Threat](/blog/2025-05-05-golden-chickens-terrastealerv2-terralogger)
- [Airborne: AirPlay Zero-Click Worm Exploit Puts Apple Devices at Risk](/blog/2025-05-05-airborne-airplay-zero-click-worm-exploit-apple-risk-vulnerability)
- [ToyMaker’s LAGTOY Backdoor Enables CACTUS Ransomware Double Extortion Attacks](/blog/2025-04-26-toymaker-lagtoy-cactus-ransomware-supply-chain)

[^1]: [Ransomware Groups Evolve Affiliate Models](https://www.secureworks.com/blog/ransomware-groups-evolve-affiliate-models) — Secureworks
[^2]: [Ransomware Review: First Half of 2024](https://unit42.paloaltonetworks.com/unit-42-ransomware-leak-site-data-analysis/) — Unit 42, Palo Alto Networks
[^3]: [DragonForce Ransomware Gang | From Hacktivists to High Street Extortionists](https://www.sentinelone.com/blog/dragonforce-ransomware-gang-from-hacktivists-to-high-street-extortionists/) — SentinelOne
