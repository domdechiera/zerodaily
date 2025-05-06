---
title: 'TeleMessage SGNL Hack Exposes Government and Financial Data'
date: '2025-05-06'
authors: ['zerodaily']
tags: ['data-breach', 'cyber-attack']
draft: false
summary: 'A breach at TeleMessage, provider of a Signal-based messaging archiver used by U.S. government agencies and major financial institutions, exposed sensitive group chats, contact information, and backend credentials.'
type: Blog
---

## Key Takeaways

- TeleMessage, which provides a modified, archiving-enabled Signal app (SGNL) to U.S. government agencies and financial firms, was hacked in May 2025.
- The breach exposed message contents, contact information for government officials, backend credentials, and group chats from the Signal clone and other messaging apps.
- The hack demonstrates the risks of modifying end-to-end encrypted apps for regulatory archiving, undermining their original security guarantees.
- Data related to U.S. Customs and Border Protection, Coinbase, Galaxy Digital, and Scotiabank were among the exposed material.
- The breach was trivial to execute, with the hacker gaining access in under 30 minutes due to serious vulnerabilities in TeleMessage's systems.

## What Happened?

TeleMessage, an Israeli-founded company acquired by Smarsh in 2024, provides secure messaging and mobile archiving solutions for regulated industries and government agencies. Its SGNL product is a modified version of Signal designed to capture and archive encrypted messages for compliance purposes.

In May 2025, a hacker breached TeleMessage's systems, stealing data that included the contents of direct messages and group chats, backend usernames and passwords, and contact information for officials and employees at several high-profile organizations. The breach was first reported by 404 Media and subsequently confirmed by affected parties. [^1]

## Technical Details

The technical aspects of the breach are based on the 404 Media investigation, which included direct analysis of the stolen data and interviews with the hacker:

- The hacker exploited vulnerabilities in TeleMessage's backend infrastructure, hosted on AWS, to access archived message data and administrative credentials.
- Data accessed included:
  - Message contents and group chat logs from TeleMessage's Signal clone (SGNL), as well as from modified versions of WhatsApp, Telegram, and WeChat.
  - Names, phone numbers, and emails of U.S. government officials (including up to 747 CBP officials), Coinbase, Galaxy Digital, Scotiabank, and the D.C. Metropolitan Police Intelligence Branch.
  - Backend panel usernames and passwords, enabling further access to TeleMessage systems.
- The hacker reported that compromising the system took less than 30 minutes and required little effort.
- Archived messages were not end-to-end encrypted between the app and TeleMessage's servers, exposing them to interception if the archive was breached.
- 404 Media verified the authenticity of the data by contacting affected individuals and using OSINT tools to confirm identities. [^1]

## Impact & Risks

- Sensitive, timely discussions about government operations and financial legislation were exposed, including active group chats about U.S. Senate bills and cryptocurrency regulation.
- The breach highlights the systemic risk of archiving solutions that break the end-to-end encryption model of secure messaging apps.
- Contact information for hundreds of government and financial sector personnel was exposed, increasing the risk of targeted phishing and social engineering attacks.
- While Coinbase stated no sensitive customer data was exposed, the presence of backend credentials and live message content underscores the potential for further compromise.
- The incident raises questions about the security of compliance-driven modifications to secure messaging platforms.

## Recommendations

Based on the technical findings and expert commentary, organizations using modified or archived messaging solutions should:

- Require vendors to undergo independent security assessments and provide clear documentation of their security model.
- Limit the use of unofficial or modified messaging apps for sensitive communications, especially in government or regulated environments.
- Monitor for targeted phishing and credential stuffing attacks against exposed personnel.
- Re-evaluate compliance requirements that mandate message archiving at the expense of security.

## Timeline

- **April 30, 2025:** Mike Waltz photographed using TeleMessage's Signal clone in a White House cabinet meeting.
- **Early May 2025:** 404 Media receives and verifies data from the hacker, confirming the breach.
- **May 4, 2025:** 404 Media publishes its report on the TeleMessage/SGNL hack.

## Final Thoughts

The TeleMessage breach is a cautionary tale for organizations that rely on compliance-driven modifications to secure messaging platforms. By introducing archiving features that break end-to-end encryption, vendors create new attack surfaces and centralize sensitive data, often with inadequate security controls. This incident underscores the need for rigorous, independent security assessments and a re-examination of regulatory requirements that may inadvertently increase risk.

## Related Articles

- [2025-04-19 OCC Email Breach](</blog/2025-04-19-occ-email-breach>)
- [2025-04-24 No Evidence TikTok Hack R00TK1T Password Leak Debunked](</blog/2025-04-24-no-evidence-tiktok-hack-r00tk1t-password-leak-debunked>)
- [4chan Hacked: Major Data Breach Exposes Internal Data and Source Code](</blog/2025-04-16-4chan-hack>)

[^1]: [The Signal Clone the Trump Admin Uses Was Hacked](https://www.404media.co/the-signal-clone-the-trump-admin-uses-was-hacked/)
