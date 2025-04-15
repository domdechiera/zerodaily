# Content Teams

This document defines the specialized teams responsible for different content types on ZeroDaily.me.

## Team Definitions

### Security Research Team
- **Scope**: Vulnerability analysis, CVE reports, security advisories
- **Content Types**: 
  - Vulnerability reports
  - CVE analysis
  - Security bulletins
- **Expertise Areas**:
  - Vulnerability assessment
  - Exploit analysis
  - Risk evaluation
  - Mitigation strategies

### Technical Analysis Team
- **Scope**: Deep technical analysis, implementation details, architecture reviews
- **Content Types**:
  - Technical deep dives
  - Architecture analysis
  - Implementation guides
  - Security patterns
- **Expertise Areas**:
  - System architecture
  - Code analysis
  - Security engineering
  - Performance optimization

### Security Standards Team
- **Scope**: Best practices, compliance guides, security standards
- **Content Types**:
  - Best practice guides
  - Compliance frameworks
  - Security checklists
  - Implementation standards
- **Expertise Areas**:
  - Security standards
  - Compliance requirements
  - Industry regulations
  - Security patterns

### Threat Intelligence Team
- **Scope**: Breaking news, threat analysis, industry trends
- **Content Types**:
  - News analysis
  - Threat reports
  - Industry updates
  - Trend analysis
- **Expertise Areas**:
  - Threat monitoring
  - Industry analysis
  - Attack patterns
  - Risk assessment

## Usage Guidelines

### Content Attribution
- Each content piece must be attributed to the appropriate team
- Attribution is done via the `authors` field in frontmatter
- Only one team should be listed as the author

### Team Selection
| Content Type | Primary Team | Secondary Team (if needed) |
|-------------|--------------|---------------------------|
| CVE Reports | Security Research | Technical Analysis |
| Deep Dives | Technical Analysis | Security Standards |
| Best Practices | Security Standards | Technical Analysis |
| News Analysis | Threat Intelligence | Security Research |

### Frontmatter Examples

```yaml
# For a vulnerability report
authors: ['security-research-team']

# For a technical deep dive
authors: ['technical-analysis-team']

# For a best practices guide
authors: ['security-standards-team']

# For a news analysis
authors: ['threat-intelligence-team']
```
