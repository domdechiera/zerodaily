---
title: "Linux Server Hardening Checklist"
description: "A comprehensive checklist for securing Linux servers in production environments."
date: "2025-04-15"
tags: ['cybersecurity', 'linux', 'server-hardening', 'checklist']
draft: false
summary: "A step-by-step checklist covering essential security controls for Linux servers, including user management, network security, file system protections, and monitoring configurations."
type: "Resource"
category: "security-hardening-checklists"
---

## Initial Setup and Configuration

### Minimal Installation

- [ ] Install only necessary packages and services
- [ ] Remove or disable unnecessary services and packages
- [ ] Document all installed packages for future reference

### User and Authentication Management

- [ ] Change default passwords for all accounts
- [ ] Disable root login via SSH
- [ ] Create individual user accounts for administrators
- [ ] Implement strong password policies
- [ ] Configure password aging controls
- [ ] Implement multi-factor authentication where possible
- [ ] Remove or disable unused/default user accounts

### File System Security

- [ ] Set appropriate permissions on system files
- [ ] Restrict mount points with noexec, nodev, and nosuid options
- [ ] Separate partitions for /home, /tmp, /var, and /var/log
- [ ] Enable and configure file system quotas
- [ ] Implement disk encryption for sensitive data

## Network Security

### SSH Hardening

- [ ] Change default SSH port
- [ ] Limit SSH access to specific IP addresses/ranges
- [ ] Configure SSH key-based authentication
- [ ] Disable SSH protocol version 1
- [ ] Set idle timeout interval
- [ ] Disable empty passwords
- [ ] Restrict SSH cipher suites to strong algorithms

### Firewall Configuration

- [ ] Enable and configure host-based firewall (iptables/nftables/ufw)
- [ ] Implement default deny policy
- [ ] Allow only necessary inbound connections
- [ ] Implement rate limiting for SSH and other critical services
- [ ] Document all firewall rules with justification

### Network Service Hardening

- [ ] Disable IPv6 if not needed
- [ ] Configure NTP for accurate time synchronization
- [ ] Disable unnecessary network protocols
- [ ] Implement TCP wrappers for additional access control
- [ ] Configure services to listen only on required interfaces

## System Hardening

### Kernel Hardening
- [ ] Enable and configure kernel security modules (SELinux/AppArmor)
- [ ] Set secure kernel parameters via sysctl
- [ ] Disable core dumps
- [ ] Enable address space layout randomization (ASLR)
- [ ] Restrict access to kernel logs

### Package Management
- [ ] Configure automatic security updates
- [ ] Verify package integrity during installation
- [ ] Use only trusted repositories
- [ ] Implement a patch management process
- [ ] Regularly audit installed packages

### Service Hardening
- [ ] Configure each service to run with least privilege
- [ ] Use systemd service sandboxing features
- [ ] Implement resource limits for services
- [ ] Remove default/example configuration files

## Monitoring and Logging

### System Logging
- [ ] Configure centralized logging
- [ ] Enable detailed audit logging
- [ ] Secure log files with appropriate permissions
- [ ] Implement log rotation
- [ ] Configure remote logging to a secure log server

### Intrusion Detection
- [ ] Install and configure a host-based IDS (AIDE, Tripwire, etc.)
- [ ] Set up regular file integrity checks
- [ ] Configure automated alerts for suspicious activities
- [ ] Implement process and user monitoring

### Performance Monitoring
- [ ] Configure resource usage monitoring
- [ ] Set up alerts for abnormal system behavior
- [ ] Implement regular system health checks

## Regular Maintenance

### Backup and Recovery
- [ ] Implement regular backup strategy
- [ ] Test backup restoration process
- [ ] Secure backup files with encryption
- [ ] Store backups in multiple locations

### Security Testing
- [ ] Perform regular vulnerability scans
- [ ] Conduct periodic penetration testing
- [ ] Review and test security controls
- [ ] Update hardening configuration based on test results

### Documentation
- [ ] Maintain detailed system documentation
- [ ] Document all security configurations
- [ ] Create and maintain incident response procedures
- [ ] Document recovery procedures

## Additional Resources

- [CIS Linux Benchmarks](https://www.cisecurity.org/benchmark/linux)
- [NIST Special Publication 800-123](https://csrc.nist.gov/publications/detail/sp/800-123/final)
- [Linux Server Monitoring Guide](/resources/security-hardening-checklists/linux-monitoring)
