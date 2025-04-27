---
title: 'Windows "inetpub" Security Fix Abused to Block Updates: New Vulnerability Emerges'
date: '2025-04-27'
authors: ['zerodaily']
tags: ['windows', 'microsoft', 'vulnerability', 'exploit', 'incident-response']
draft: false
summary: 'A recent Windows security update intended to mitigate a symlink vulnerability (CVE-2025-21204) has introduced a new weakness: regular users can abuse the newly created inetpub folder to block all future Windows updates, leaving systems exposed to unpatched threats.'
type: Blog
---

## Key Takeaways

- **Microsoft’s April 2025 security update** created an empty `C:\inetpub` folder on all Windows systems as a mitigation for CVE-2025-21204 (symlink privilege escalation).
- **Security researcher Kevin Beaumont** discovered that regular (non-admin) users can create a symbolic link from `C:\inetpub` to a file (e.g., Notepad), disrupting the Windows servicing stack.
- **This allows any local user or malware to block all future Windows updates**—including critical security patches—without needing administrator privileges.
- **The attack is simple and requires only a single command**: `mklink /j c:\inetpub c:\windows\system32\notepad.exe` (see note below regarding symlink type).
- **No official fix is available yet**; Microsoft has been notified, but systems remain at risk until a new patch is released.

## What Happened?

In April 2025, Microsoft released a security update to address CVE-2025-21204, a vulnerability that allowed attackers to use symlinks for privilege escalation. The update created an empty `C:\inetpub` folder on all Windows systems. However, this change introduced a new denial-of-service vulnerability: non-admin users can create a symlink from `C:\inetpub` to a file (such as Notepad), which causes the Windows update process to fail and roll back all future updates.[^1], [^2]

### Technical Details

- The `inetpub` folder was intended to prevent symlink abuse as part of Microsoft's response to CVE-2025-21204, but it is created with default NTFS permissions that allow modification by any authenticated user. This means non-admin users can delete or replace it with a symlink/junction.
- **How the exploit works:**
  - The Windows servicing stack expects `C:\inetpub` to be a regular directory. If it is replaced with a symlink or junction (e.g., using `mklink`), update operations that interact with this path will fail.
  - Example attack command: `mklink /j c:\inetpub c:\windows\system32\notepad.exe`

(Note: `/j` creates a directory junction. To create a symlink to a file, use `/d` or omit the switch. The attack works by breaking the expected directory structure, causing Windows Update to misbehave.)

- **Error messages and logs:**
  - When the exploit is used, Windows Update may display generic error codes such as `0x80070002` (file not found) or `0x80070003` (path not found), and updates will repeatedly fail to install or roll back after reboot.
  - Event Viewer logs under `Applications and Services Logs > Microsoft > Windows > Servicing` may show servicing stack failures referencing the `inetpub` path.
- **NTFS permissions:**
  - By default, `C:\inetpub` is owned by the Administrators group but is writable by all authenticated users (`BUILTIN\Users`). This allows any local user or malware to exploit the vulnerability without privilege escalation.
- **Broader context:**
  - Symlink/junction vulnerabilities have been used in previous Windows update-blocking and privilege escalation attacks. This incident demonstrates the ongoing risk of improper directory permission management in Windows security design.
- Once this symlink is in place, the Windows servicing stack encounters errors during updates, causing updates to fail and roll back. This can leave Windows 10 and Windows 11 systems permanently unable to receive new security updates until the issue is resolved.

For more information on Windows update error codes and troubleshooting, see [Microsoft’s official Windows Update Troubleshooter](https://support.microsoft.com/en-us/windows/windows-update-troubleshooter-5d5b7630-9a3d-9a3c-6b2e-1a94a3e6c4b0).

## Impact and Exploitability

- **No administrator rights are required**—any local user or malware can exploit this.
- **All Windows systems with the April 2025 update are potentially affected.**
- Attackers can use this technique to intentionally block security updates, keeping systems vulnerable for further exploitation.
- The only mitigation is to prevent regular user access or monitor for suspicious symlinks at `C:\inetpub`.

## Recommendations

- **Monitor systems** for the presence of unexpected symlinks or junctions at `C:\inetpub`. Use PowerShell or command-line tools to detect directory type changes: `Get-Item C:\inetpub | Select-Object Name, LinkType, Target`

- **Audit NTFS permissions** on `C:\inetpub` and restrict modification rights to administrators only, if business requirements allow. This can be done via File Explorer or with: `icacls C:\inetpub /inheritance:r /grant:r Administrators:F`

- **Restrict local user access** and avoid running untrusted software. Principle of least privilege should be enforced for all user accounts.
- **Monitor Windows Event Logs** for update failures referencing `inetpub` or related error codes (`0x80070002`, `0x80070003`).
- **Incident response teams** should be aware that this can be used to intentionally block remediation efforts on compromised systems. If persistent update failures are observed, check for symlink/junction abuse.
- **Await further guidance from Microsoft**; currently, there is no official patch for this issue. Subscribe to [Microsoft Security Response Center (MSRC)](https://msrc.microsoft.com/) updates for the latest advisories.

## Timeline

- **April 9, 2025:** Microsoft releases security update creating `inetpub` folder (mitigating CVE-2025-21204).
- **April 23, 2025:** Security researcher Kevin Beaumont publishes analysis of the new vulnerability.[^1]
- **April 24–27, 2025:** Technical coverage and community discussion highlight the risk and lack of mitigation.[^2], [^3]

## Detection & Forensics

### How to Detect Symlink/Junction Abuse at `C:\inetpub`

- **PowerShell:**

  ```psh
  $inetpub = Get-Item C:\inetpub
  if ($inetpub.LinkType) { Write-Host "Symlink or junction detected: $($inetpub.LinkType) -> $($inetpub.Target)" }
  else { Write-Host "inetpub is a regular directory." }
  ```

- **Command Prompt:**

  ```cmd
  dir C:\ /AL
  ```

  Look for `inetpub` listed as a symlink or junction.
- **Event Logs:**
  - Check `Applications and Services Logs > Microsoft > Windows > Servicing` for errors referencing `inetpub`.
  - Look for repeated update failures or rollbacks after reboot.
- **File System Forensics:**
  - Use tools like Sysinternals' `junction.exe` or `fsutil reparsepoint query` to inspect the type of `inetpub`.
- **Indicators of Compromise:**
  - Presence of a symlink/junction at `C:\inetpub` pointing to an unexpected target (e.g., `notepad.exe`).
  - Persistent Windows Update failures after April 2025.

## Final Thoughts

This incident highlights the risks of rapid mitigations that introduce new attack surfaces and underscores the importance of robust directory permission management in Windows security.

Organizations should monitor for unexpected changes after major updates, proactively audit NTFS permissions, and remain vigilant for secondary vulnerabilities. Transparent communication from vendors, timely patching, and continuous monitoring are essential for maintaining security and update reliability.

## Related Articles

- [Windows NTLM Hash Leak CVE-2025-24054 Under Active Exploitation: Patch Now to Prevent Credential Theft](/blog/2025-04-18-windows-ntlm-cve-2025-24054-under-active-exploitation)
- [Critical Microsoft Zero-Day Vulnerability CVE-2025-29824: What You Need to Know](/blog/2025-04-08-microsoft-zero-day)
- [ConnectWise Releases ScreenConnect 25.2.4 Security Patch for Critical ViewState Vulnerability (2025-04-25)](/blog/2025-04-25-connectwise-screenconnect-25-2-4-security-patch)

[^1]: [Microsoft’s patch for CVE-2025-21204 symlink vulnerability introduces another symlink vulnerability](https://doublepulsar.com/microsofts-patch-for-cve-2025-21204-symlink-vulnerability-introduces-another-symlink-vulnerability-9ea085537741)
[^2]: [Deleting 'inetpub' folder lets hackers permanently stop Windows updates, Microsoft warns](https://windowsreport.com/deleting-inetpub-folder-lets-hackers-permanently-stop-windows-updates-microsoft-warns/)
[^3]: [Windows: Empty inetpub folder creates a new security problem - gHacks Tech News](https://www.ghacks.net/2025/04/23/windows-empty-inetpub-folder-creates-a-new-security-problem/)
