# Repository Integration Documentation

This documentation serves as the source of truth for integration between two repositories:

1. **cyber-researcher**
   - Purpose: Content creation and management
   - Focus: Research, writing, and content organization
   - Role: Content provider

2. **ZeroDaily.me** (this repository)
   - Purpose: Content delivery platform
   - Focus: User experience and content presentation
   - Role: Content consumer

## Directory Structure

```
.docs/
├── integration/          # Integration specifications
│   ├── content-pipeline  # How content flows between repos
│   ├── frontmatter      # Schema definitions
│   └── validation       # Content validation rules
├── shared/              # Shared resources
│   ├── templates        # Template documentation
│   ├── taxonomies       # Tags, categories, sectors
│   └── resources        # Common resource paths
└── development/         # Development guides
    ├── preview          # Content preview setup
    ├── workflow         # Development workflow
    └── releases         # Release process
```

## Integration Points

### 1. Content Schema
- Frontmatter definitions (TypeScript)
- Field validation rules
- Required vs optional fields

### 2. Content Pipeline
- Content creation workflow
- Validation process
- Publication flow

### 3. Development Workflow
- Local development setup
- Testing procedures
- Release coordination

## Maintaining This Documentation

1. **Updates**
   - Both repositories must maintain identical copies
   - Changes require coordination between teams
   - Version control through git

2. **Validation**
   - Schema changes require updates in both repos
   - Breaking changes must be coordinated
   - Automated tests ensure compatibility

3. **Reviews**
   - Regular documentation reviews
   - Keep examples up to date
   - Maintain changelog

## Getting Started

1. Read the [content pipeline](./integration/content-pipeline.md) guide
2. Review [frontmatter schema](./integration/frontmatter-schema.md)
3. Set up [local preview](./development/preview.md)

## Contributing

When contributing to this documentation:
1. Ensure changes are reflected in both repositories
2. Update examples and validation rules
3. Test changes in both environments
4. Update version numbers if applicable
