# Frontmatter Schema

This document defines the frontmatter schema used across cyber-researcher and ZeroDaily.me repositories.

## TypeScript Definitions

```typescript
// Team attribution types
type ContentTeam =
  | 'security-research-team'     // Vulnerability analysis, CVE reports
  | 'technical-analysis-team'    // Technical deep dives, implementation guides
  | 'security-standards-team'    // Best practices, compliance guides
  | 'threat-intelligence-team';  // News analysis, threat reports

// Content impact types
type ImpactLevel = 'critical' | 'high' | 'medium' | 'low';
type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// Base frontmatter interface
interface BaseFrontmatter {
  title: string;
  date: string;  // YYYY-MM-DD format
  tags: string[];
  draft: boolean;
  summary: string;
  authors: ContentTeam[];  // Must contain exactly one team matching content type
  estimated_read_time: number;
  featured: boolean;
  impact_level: ImpactLevel;
  affected_sectors: string[];
  related_resources: string[];
}

// Template-specific interfaces
interface VulnerabilityFrontmatter extends BaseFrontmatter {
  cvss_score?: number;
  related_cves?: string[];
}

interface TechnicalFrontmatter extends BaseFrontmatter {
  difficulty_level: DifficultyLevel;
  prerequisites: string[];
  series?: string;
  has_code_examples?: boolean;
  has_detection_rules?: boolean;
  recommended_tools?: string[];
}

interface BestPracticesFrontmatter extends BaseFrontmatter {
  frameworks: string[];
  compliance: string[];
}

interface VerifiableContentFrontmatter extends BaseFrontmatter {
  last_verified_date: string; // ISO date string (YYYY-MM-DD)
}
```

## Team Attribution Rules

Content teams are specialized groups responsible for different types of content. Each piece of content must be attributed to exactly one team based on its type:

1. **Security Research Team**
   - Content: Vulnerability analysis, CVE reports
   - Templates: vulnerability-analysis.mdx
   - Required tags: ['vulnerability', 'cve']

2. **Technical Analysis Team**
   - Content: Technical deep dives, implementation guides
   - Templates: technical-deep-dive.mdx
   - Required tags: ['deep-dive', 'technical']

3. **Security Standards Team**
   - Content: Best practices, compliance guides
   - Templates: best-practices-guide.mdx
   - Required tags: ['best-practices', 'guidelines']

4. **Threat Intelligence Team**
   - Content: Breaking news, threat analysis
   - Templates: news-analysis.mdx
   - Required tags: ['security-news', 'threat']

## Validation Rules

1. **Team Validation**
   - Each content file must have exactly one team in authors array
   - Team must match content type (see mapping above)
   - Team must be one of the defined ContentTeam types

2. **Tag Validation**
   - Content must include required tags for its team
   - Additional tags allowed but core tags mandatory

3. **Template Consistency**
   - Use appropriate template for content type
   - Follow template structure and sections
   - Include all required frontmatter fields

## Field Descriptions

### Common Fields

| Field | Type | Required | Description | UI/UX Considerations |
|-------|------|----------|-------------|---------------------|
| title | string | Yes | Post title | Primary display, SEO |
| date | string | Yes | Publication date (YYYY-MM-DD) | Sorting, filtering |
| tags | string[] | Yes | Content categorization | Navigation, filtering |
| draft | boolean | Yes | Publication status | Preview vs live |
| summary | string | Yes | Content description | Preview cards, SEO |
| authors | ContentTeam[] | Yes | Content team attribution | Team filtering, expertise |
| estimated_read_time | number | Yes | Reading time in minutes | User expectations |
| featured | boolean | Yes | Homepage promotion | Content highlighting |
| impact_level | ImpactLevel | Yes | Security impact | Priority indicators |
| affected_sectors | string[] | Yes | Target industries | Content relevance |
| related_resources | string[] | Yes | Internal resource links | Content discovery |

### Template-Specific Fields

#### Vulnerability Analysis
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| cvss_score | number | No | CVSS score if applicable |
| related_cves | string[] | No | Related vulnerability IDs |

#### Technical Deep Dive
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| difficulty_level | DifficultyLevel | Yes | Content complexity |
| prerequisites | string[] | Yes | Required knowledge |
| series | string | No | Series identifier |

#### Best Practices
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| frameworks | string[] | Yes | Security frameworks |
| compliance | string[] | Yes | Compliance standards |

#### Verifiable Content Types (Playbooks, Tool Guides, etc.)
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| last_verified_date | string | Yes | Date content was verified for accuracy (YYYY-MM-DD) |

## Validation Rules

1. **Title**
   - Must be non-empty
   - Max length: 100 characters
   - CVE titles must follow pattern: [CVE-YYYY-XXXXX]

2. **Date**
   - Must be valid date
   - Format: YYYY-MM-DD (ISO date string)
   - Cannot be future date

3. **Tags**
   - Minimum: 2 tags
   - Must include content type tag
   - Must include relevant sector tags
   - Maximum: 5 tags
   - Must be from approved taxonomy

4. **Authors**
   - Must contain exactly one team
   - Team must match content type:
     - Vulnerability analysis -> security-research-team
     - Technical deep dives -> technical-analysis-team
     - Best practices -> security-standards-team
     - News analysis -> threat-intelligence-team

5. **Summary**
   - Minimum: 50 characters
   - Maximum: 200 characters
   - No markdown

6. **Related Resources**
   - Must be valid internal paths
   - Must exist in repository

7. **Last Verified Date**
   - Required for: Playbooks, Tool guides, Compliance mappings, Framework implementations
   - Optional for: References, Best practices, Training materials
   - Format: YYYY-MM-DD (ISO date string)
   - Cannot be future date

## Examples

### Vulnerability Analysis
```yaml
---
title: '[CVE-2025-12345] Critical RCE Vulnerability'
date: '2025-03-15'
tags: ['vulnerability', 'rce', 'critical']
draft: true
summary: 'Analysis of a critical RCE vulnerability affecting cloud infrastructure'
authors: ['security-research-team']
estimated_read_time: 12
featured: true
impact_level: 'critical'
affected_sectors: ['cloud', 'enterprise']
related_resources: [
  '/resources/playbooks/rce-response',
  '/resources/tools/vulnerability-assessment'
]
cvss_score: 9.8
related_cves: ['CVE-2025-12345', 'CVE-2025-12346']
---
```

### Technical Deep Dive
```yaml
---
title: 'Technical Deep Dive: Zero Trust Architecture'
date: '2025-03-15'
tags: ['deep-dive', 'architecture', 'zero-trust', 'security']
draft: true
summary: 'A comprehensive analysis of implementing Zero Trust Architecture in modern enterprises'
authors: ['technical-analysis-team']
estimated_read_time: 15
featured: false
difficulty_level: 'intermediate'
has_code_examples: true
recommended_tools: ['identity-providers', 'network-segmentation-tools']
related_resources: [
  '/resources/playbooks/zero-trust-implementation',
  '/resources/references/segmentation-patterns'
]
prerequisites: ['security-fundamentals', 'networking']
series: 'zero-trust-series'
---
```

### Best Practices
```yaml
---
title: 'Security Best Practices for Cloud Environments'
date: '2025-03-15'
tags: ['best-practices', 'cloud-security', 'guidelines']
draft: false
summary: 'Essential security guidelines for securing cloud infrastructure across major providers'
authors: ['security-standards-team']
estimated_read_time: 10
featured: true
affected_sectors: ['cloud', 'enterprise', 'fintech']
related_resources: [
  '/resources/checklists/cloud-security-audit',
  '/resources/references/cloud-security-models'
]
frameworks: ['NIST CSF', 'CIS Controls']
compliance: ['SOC 2', 'ISO 27001']
---
```

### News Analysis
```yaml
---
title: 'Breaking: Major Banking Sector DDoS Campaign'
date: '2025-03-15'
tags: ['security-news', 'threat', 'ddos', 'financial-sector']
draft: false
summary: 'Analysis of ongoing DDoS attacks targeting major financial institutions'
authors: ['threat-intelligence-team']
estimated_read_time: 8
featured: true
impact_level: 'high'
affected_sectors: ['banking', 'fintech']
related_resources: [
  '/resources/playbooks/ddos-response',
  '/resources/references/financial-sector-threats'
]
---
```

### Verifiable Content (Playbook)
```yaml
---
title: 'Ransomware Incident Response Playbook'
date: '2025-03-15'
tags: ['playbook', 'ransomware', 'incident-response']
draft: false
summary: 'Step-by-step response procedures for ransomware incidents'
authors: ['security-research-team']
estimated_read_time: 20
featured: false
impact_level: 'critical'
affected_sectors: ['all']
related_resources: [
  '/resources/tools/malware-analysis',
  '/resources/frameworks/nist-incident-response'
]
last_verified_date: '2025-03-01' # Required for playbooks, tool guides, etc.
---
```

## Implementation Notes

### For cyber-researcher
- Use for content validation
- Enforce during content creation
- Template generation

### For ZeroDaily.me
- Database schema design
- API type definitions
- UI component requirements
- Search/filter implementation
