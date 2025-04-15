# Validation Setup Guide

This guide explains how to set up and configure content validation for the cyber-researcher repository.

## Prerequisites

```bash
# Required dependencies
node >= 18.0.0
yarn >= 1.22.0
```

## Installation

```bash
# Clone repositories
git clone https://github.com/zerodaily/cyber-researcher.git
git clone https://github.com/zerodaily/platform.git

# Install dependencies
cd platform
yarn install

cd ../cyber-researcher
yarn install
```

## Validation Components

### 1. Schema Validation

```typescript
// validation/schema.ts
import { ContentTeam, ImpactLevel, DifficultyLevel } from '@zerodaily/types';

// Team validation
const validateTeamAttribution = (team: ContentTeam, contentType: string): boolean => {
  const teamMappings = {
    'vulnerability-analysis': 'security-research-team',
    'technical-deep-dive': 'technical-analysis-team',
    'best-practices': 'security-standards-team',
    'news-analysis': 'threat-intelligence-team'
  };
  return team === teamMappings[contentType];
};

// Content validation rules
export const validateContent = {
  title: (value: string): boolean => {
    return value.length > 0 && value.length <= 100;
  },
  date: (value: string): boolean => {
    const date = new Date(value);
    return date <= new Date();
  },
  tags: (value: string[]): boolean => {
    return value.length >= 2;
  }
  // Add other validation rules
};
```

### 2. Resource Validation

```typescript
// validation/resources.ts
import { ResourceType } from '@zerodaily/types';

export const validateResources = {
  exists: async (path: string): Promise<boolean> => {
    // Check if resource exists
  },
  accessibility: async (url: string): Promise<boolean> => {
    // Verify resource is accessible
  },
  permissions: async (path: string): Promise<boolean> => {
    // Check resource permissions
  }
};
```

### 3. Content Structure

```typescript
// validation/structure.ts
import { ContentType } from '@zerodaily/types';

export const validateStructure = {
  required_sections: (content: string, type: ContentType): boolean => {
    // Verify required sections exist
  },
  format: (content: string): boolean => {
    // Check content formatting
  }
};
```

## Configuration

### 1. Validation Rules

```yaml
# .validation.yml
validation:
  schema:
    strict: true
    ignore_patterns:
      - "drafts/*"
      - "*.temp.mdx"
  
  resources:
    verify_links: true
    check_permissions: true
    allowed_domains:
      - zerodaily.me
      - github.com
  
  content:
    required_sections: true
    spell_check: true
    link_validation: true
```

### 2. Team Configuration

```yaml
# .teams.yml
teams:
  security-research-team:
    content_types:
      - vulnerability-analysis
    validation_rules:
      - cvss_required
      - cve_format
  
  technical-analysis-team:
    content_types:
      - technical-deep-dive
    validation_rules:
      - code_samples
      - architecture_diagrams
  
  security-standards-team:
    content_types:
      - best-practices
    validation_rules:
      - compliance_mapping
      - control_references
  
  threat-intelligence-team:
    content_types:
      - news-analysis
    validation_rules:
      - source_verification
      - impact_assessment
```

## Usage

### 1. Command Line Interface

```bash
# Validate single file
yarn validate content/blog/example-post.mdx

# Validate directory
yarn validate content/blog/

# Validate with specific rules
yarn validate --rules=schema,resources content/blog/

# Generate validation report
yarn validate --report content/blog/
```

### 2. Git Hooks

```bash
# Install and initialize husky
yarn add --dev husky
npx husky init

# Create pre-commit hook
# .husky/pre-commit
#!/bin/sh
yarn validate-staged

# Add lint-staged for efficient validation
yarn add -D lint-staged

# .lintstagedrc
{
  "*.{md,mdx}": [
    "yarn validate --fix",
    "prettier --write"
  ]
}
```

### 3. CI/CD Integration

```yaml
# .github/workflows/validate.yml
name: Content Validation

on:
  pull_request:
    paths:
      - 'content/**'
      - 'drafts/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: yarn install
      - run: yarn validate
```

## Error Handling

### 1. Validation Errors

```typescript
// Example validation error
{
  type: 'schema_error',
  file: 'content/blog/example-post.mdx',
  field: 'tags',
  message: 'Must include at least 2 tags',
  line: 5
}
```

### 2. Resource Errors

```typescript
// Example resource error
{
  type: 'resource_error',
  file: 'content/blog/example-post.mdx',
  resource: '/images/diagram.png',
  message: 'Resource not found',
  line: 25
}
```

## Best Practices

### 1. Local Development
- Run validation before commits
- Address all validation errors
- Test with different content types
- Verify resource availability

### 2. Team Workflow
- Follow team-specific rules
- Use appropriate templates
- Include required metadata
- Verify team attribution

### 3. Continuous Integration
- Enable validation checks
- Review validation reports
- Monitor error patterns
- Update validation rules

## Troubleshooting

### Common Issues

1. **Schema Validation Failures**
   - Check frontmatter format
   - Verify field types
   - Update team attribution
   - Fix date formats

2. **Resource Problems**
   - Verify file paths
   - Check permissions
   - Update broken links
   - Fix resource references

3. **Content Structure Issues**
   - Add missing sections
   - Fix formatting
   - Update headings
   - Check code blocks

## Maintenance

### 1. Regular Tasks
- Update validation rules
- Review error patterns
- Optimize validation
- Update documentation

### 2. Version Control
- Track rule changes
- Document updates
- Test new rules
- Maintain changelog
