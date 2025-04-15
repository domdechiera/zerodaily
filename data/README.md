# ZeroDaily.me Content Structure

This directory contains all content and data for ZeroDaily.me. The content is organized into distinct categories to maintain clarity and ease of management.

## Directory Structure

```
data/
├── authors/           # Author profiles and information
├── blog/             # Blog posts and templates
│   └── templates/    # Blog post templates by type
├── resources/        # Security resources and tools
│   ├── tools/       # Security tool reviews
│   ├── training/    # Training materials
│   ├── references/  # Reference guides
│   └── frameworks/  # Framework documentation
├── headerNavLinks.ts # Navigation configuration
├── logo.svg         # Site logo
├── projectsData.ts  # Project information
└── siteMetadata.js  # Site configuration
```

## Content Types

### 1. Blog Posts (`/blog`)
Primary content types:
- Vulnerability Analysis
- News Analysis
- Technical Deep-dives
- Best Practices Guides

### 2. Resources (`/resources`)
Resource categories:
- Security Tool Reviews
- Training Resources
- Reference Guides
- Framework Documentation

## Content Creation Guidelines

1. Use appropriate templates for content type
2. Follow frontmatter requirements
3. Include necessary cross-references
4. Maintain consistent formatting
5. Update relevant metadata

## Cross-linking System

Content is interconnected through:
- `related_resources` in blog posts
- `related_articles` in resources
- Common tags and categories

## Metadata Standards

### Common Fields
- Titles: Clear and descriptive
- Dates: YYYY-MM-DD format
- Tags: Minimum 2 relevant tags
- Authors: Valid author IDs
- Status: draft/published or maintained/archived

### SEO Requirements
- Descriptive titles
- Meaningful summaries
- Proper tag usage
- Optimized metadata

## Content Review Process

1. Use templates for consistency
2. Fill all required fields
3. Maintain up-to-date information
4. Archive outdated content
5. Regular review cycles

## Additional Resources

- Blog templates: `/blog/templates/README.md`
- Resource templates: `/resources/README.md`
- Project documentation: `/README.md`
- Style guide: [Link to style guide]
