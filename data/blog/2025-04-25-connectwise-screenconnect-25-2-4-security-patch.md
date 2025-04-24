---
title: 'ConnectWise Releases ScreenConnect 25.2.4 Security Patch for Critical ViewState Vulnerability (2025-04-25)'
date: '2025-04-24'
authors: ['zerodaily']
tags: ['vulnerability', 'exploit', 'incident-response', 'authentication']
draft: false
summary: 'ConnectWise has released ScreenConnect 25.2.4 to address a high-severity ViewState code injection vulnerability (CWE-287, CVSS 8.8) affecting versions 25.2.3 and earlier. All on-premises users are urged to patch immediately.'
type: Blog
---

ConnectWise has issued an urgent security patch for its ScreenConnect remote access software, addressing a high-severity vulnerability (CWE-287, CVSS 8.8) that could allow remote code execution if exploited. The vulnerability affects ScreenConnect versions 25.2.3 and earlier, and is related to ViewState code injection in ASP.NET Web Forms. While exploitation requires privileged access to obtain machine keys, ConnectWise recommends immediate patching for all on-premises deployments. Cloud-hosted instances have been automatically updated.[^1]

## Vulnerability Details

- **Vulnerability Type:** ViewState code injection (CWE-287: Improper Authentication)
- **Severity:** High (CVSS 8.8)
- **Impacted Versions:** ScreenConnect 25.2.3 and earlier
- **Potential Impact:** Remote code execution on the server if machine keys are compromised
- **Remediation:** Upgrade to ScreenConnect 25.2.4 (cloud users are already protected)

ScreenConnect's use of ASP.NET ViewState enables state preservation between requests. If an attacker obtains the server's machine keys (requiring privileged access), they could craft a malicious ViewState payload to execute code on the server. The 25.2.4 patch disables ViewState and removes related dependencies, mitigating the risk.

## Remediation & Recommendations

**For Cloud Users:**

- No action required; cloud servers have been patched automatically.

**For On-Premises Users:**

- Check your version in Administration/License > Version Check.
- If running 25.2.3 or earlier, download and install the 25.2.4 update from the [ScreenConnect Download Page](https://www.screenconnect.com/download).
- If your license is out of maintenance, renew or apply the free security patch for supported older versions (back to 23.9).
- Follow ConnectWise's [upgrade instructions](https://docs.connectwise.com/ScreenConnect_Documentation/On-premises/Get_started_with_ConnectWise_ScreenConnect_On-Premise/Upgrade_an_on-premises_installation?_gl=1%2A1hwcbrq%2A_gcl_au%2AMjYwMzc4NzY3LjE3MzkyMDI3ODM.%2A_ga%2AOTYxODA0Njk0LjE3Mzg2NzI5NzM.%2A_ga_QSGE0F7K8V%2AMTc0MTYyMjg1OC4yNS4xLjE3NDE2Mjc5ODMuNTQuMC4yMDI5MzI5NjMy) and security best practices.

**Incident Response:**
If compromise is suspected, isolate affected systems, follow your incident response plan, and do not bring servers back online until fully investigated and patched. Review the [ScreenConnect Security Guide](https://docs.connectwise.com/ConnectWise_Control_Documentation/Get_started/Security_guide) for additional hardening steps.

## Final Thoughts

While exploitation of this vulnerability requires privileged access, the risk of remote code execution is significant. All ScreenConnect on-premises users should prioritize patching to version 25.2.4 or apply the relevant security patch for their version. Regularly review security best practices and monitor vendor advisories for further updates.

## Related Articles

- [Critical CrushFTP Authentication Bypass Vulnerability CVE-2025-31161: What You Need to Know](/blog/2025-04-13-crushftp-vulnerability)
- [CISA Advisory: Critical Bugs in Siemens and Schneider Electric Industrial Gear (2025-04-24)](/blog/2025-04-24-cisa-advisory-siemens-schneider-electric-critical-bugs)

[^1]: [ScreenConnect 25.2.4 Security Patch - ConnectWise Security Bulletin](https://www.connectwise.com/company/trust/security-bulletins/screenconnect-security-patch-2025.4)
