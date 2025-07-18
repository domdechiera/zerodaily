---
title: 'CISA Includes Actively Exploited Broadcom and Commvault Vulnerabilities to KEV Database'
date: '2025-04-29'
authors: ['zerodaily']
tags: ['vulnerability', 'industry-news']
draft: false
summary: 'CISA has added critical Broadcom and Commvault vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog after evidence of active exploitation, urging immediate remediation.'
type: Blog
---

CISA has expanded its Known Exploited Vulnerabilities (KEV) Catalog to include actively exploited vulnerabilities in Broadcom Brocade Fabric OS and Commvault software, following confirmed in-the-wild attacks. This article provides a technical deep dive into the vulnerabilities, exploitation methods, detection strategies, and sector impact, with actionable guidance for defenders and security leaders. [^1], [^2]

## Key Takeaways

The following points summarize the most urgent facts and actions for organizations:

- CISA added CVE-2025-1976 (Broadcom Brocade Fabric OS) and CVE-2025-3928 (Commvault Web Server) to the KEV Catalog on April 28, 2025, after confirming active exploitation in the wild.
- CVE-2025-1976 allows admin-level users on Brocade Fabric OS (versions 9.1.0–9.1.1d6) to escalate privileges and execute arbitrary code as root, bypassing intended security controls.
- CVE-2025-3928 enables remote, authenticated attackers to deploy webshells and execute arbitrary code on Commvault Web Servers. Multiple versions are affected; exploitation requires valid credentials, often obtained via phishing or prior compromise.
- Commvault also disclosed CVE-2025-34028, a critical unauthenticated ZIP path traversal flaw in Command Center Innovation Release 11.38, allowing remote code execution (CVSS 10). This can enable full takeover of backup infrastructure.
- Exploitation of these vulnerabilities can result in full system compromise, lateral movement, and data theft, impacting both public and private sector organizations.
- CISA urges all organizations (not just federal agencies) to remediate KEV-listed vulnerabilities as a top priority.

## How the Exploits Work

Understanding the technical exploitation methods is critical for both defenders and incident responders:

- **Brocade Fabric OS (CVE-2025-1976):** Despite the removal of root access in versions 9.1.0+, attackers with admin-level credentials can leverage a code injection flaw to escalate privileges and execute arbitrary commands as root. This is typically achieved through command-line manipulation or exploitation of poorly sanitized inputs in the OS management interface. The vulnerability is local, but can be chained with remote access flaws or credential theft for remote exploitation. [^2]

- **Commvault Web Server (CVE-2025-3928):** This vulnerability allows remote, authenticated attackers to upload and execute webshells on the Commvault Web Server. Attackers often gain valid credentials via phishing, credential stuffing, or exploiting unrelated vulnerabilities. Once authenticated, they exploit insufficient input validation in the web server module to write arbitrary files, leading to remote code execution. The attack vector is particularly dangerous in environments where Commvault is internet-facing or where internal segmentation is weak. [^3]

- **Commvault Command Center (CVE-2025-34028):** A path traversal flaw in ZIP file handling allows unauthenticated attackers to upload specially crafted ZIP archives. When the server expands these archives, arbitrary files are written outside the intended directory, enabling remote code execution. This can be exploited directly from the internet if the Command Center is exposed, or via lateral movement inside compromised networks. [^4]

## Detection and Response

Organisations with affected devices should implement the following technical controls and monitoring strategies to detect exploitation and respond effectively:

- Continuously monitor authentication and access logs for anomalous admin activity, such as failed logins, new device fingerprints, or logins from unusual locations.
- Analyze web server logs for suspicious file uploads, especially ZIP archives or files with double extensions (e.g., .php.zip) in Commvault environments.
- Deploy and tune endpoint detection and response (EDR) solutions to alert on privilege escalation attempts and unexpected process launches on Brocade Fabric OS devices.
- Scan Commvault web server directories for known webshell signatures and unexpected script execution.
- Enable comprehensive audit logging on all backup, storage, and management systems to support forensic investigations.
- Use network segmentation, firewall rules, and access controls to limit exposure of management interfaces and critical infrastructure.
- Prepare incident response playbooks for rapid containment and recovery in the event of compromise.

## Attacker TTPs and Threat Landscape

Recent exploitation trends highlight how threat actors leverage these vulnerabilities:

- Attackers frequently target backup infrastructure and storage management platforms due to their privileged access to sensitive data and lateral movement potential.
- Credential theft (via phishing, malware, or previous breaches) is a common precursor to exploiting authenticated vulnerabilities like CVE-2025-3928.
- Public proof-of-concept exploits and rapid weaponization have accelerated exploitation timelines, as seen with previous Brocade and Commvault vulnerabilities.
- Ransomware groups and advanced persistent threat (APT) actors have increasingly targeted backup systems to maximize impact and hinder recovery efforts.

## Sector and Risk Impact

The following sectors and risk factors are most relevant:

- **Critical Infrastructure:** Organizations in government, healthcare, and finance are at heightened risk due to the widespread use of Brocade and Commvault products in these environments.
- **Public Sector:** U.S. Federal agencies are mandated to remediate KEV-listed vulnerabilities, but private sector organizations face similar risks and should adhere to CISA guidance.
- **SMBs and Enterprises:** Any organization with exposed management interfaces or weak credential hygiene is vulnerable to exploitation and lateral movement.

## Timeline of Events

The following timeline outlines the key disclosure and remediation milestones for these vulnerabilities:

- **April 11, 2025:** Commvault issues advisory for CVE-2025-34028.
- **April 25, 2025:** Commvault updates advisory with CVE ID.
- **April 28, 2025:** CISA adds Broadcom and Commvault vulnerabilities to KEV Catalog. [^1]

## Impact and Recommendations

The following strategic and operational actions are recommended to reduce organizational exposure and regulatory risk:

- Immediately inventory and prioritize patching of all affected Broadcom and Commvault systems, in line with CISA KEV deadlines and vendor advisories. [^1]
- Establish and enforce patch management policies that ensure critical vulnerabilities are remediated within mandated timeframes.
- Communicate the risk and remediation plan to stakeholders across IT, security, and business units.
- Review and update business continuity and disaster recovery plans to account for the potential compromise of backup and storage infrastructure.
- If patching is not immediately feasible, isolate vulnerable systems from external and internal threats using network segmentation and access controls.
- Conduct post-remediation reviews to validate that patches are applied and that no indicators of compromise remain.

## Final Thoughts

The inclusion of these vulnerabilities in CISA’s KEV Catalog underscores their active exploitation and the urgency for organizations to remediate. Delayed patching increases the risk of compromise and regulatory non-compliance. Security teams should prioritize these vulnerabilities in their patch management workflows.

## Related Articles

- [Kali Linux Archive Signing Key Update: How to Fix 'apt update' Failing](</blog/2025-04-28-kali-linux-archive-signing-key-fix-apt-update-failing>)
- [CrushFTP Vulnerability](</blog/2025-04-13-crushftp-vulnerability>)

[^1]: [CISA Adds Three Known Exploited Vulnerabilities to Catalog | CISA](https://www.cisa.gov/news-events/alerts/2025/04/28/cisa-adds-three-known-exploited-vulnerabilities-catalog)
[^2]: [NVD - CVE-2025-1976](https://nvd.nist.gov/vuln/detail/CVE-2025-1976)
[^3]: [NVD - CVE-2025-3928](https://nvd.nist.gov/vuln/detail/CVE-2025-3928)
[^4]: [CV_2025_04_1](https://documentation.commvault.com/securityadvisories/CV_2025_04_1.html)
