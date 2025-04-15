# Content Preview Guide

This guide explains how to preview content locally before publishing to ZeroDaily.me.

## Local Preview Setup

### 1. Prerequisites
```bash
# Required local dependencies
node >= 18.0.0
yarn >= 1.22.0
```

### 2. Environment Setup
```bash
# Clone both repositories
git clone https://github.com/zerodaily/cyber-researcher.git
git clone https://github.com/zerodaily/platform.git

# Install dependencies
cd platform
yarn install
```

### 3. Configuration
```bash
# Create local config
cp .env.example .env.local

# Required environment variables
CONTENT_DIR=../cyber-researcher  # Path to cyber-researcher repo
PREVIEW_PORT=3000               # Local preview port
```

## Preview Process

### 1. Content Validation
```bash
# Run from platform directory
yarn validate-content

# This checks:
- Frontmatter schema
- Resource links
- Team attribution
- Required fields
```

### 2. Start Preview Server
```bash
# Run development server
yarn dev

# Access preview at:
http://localhost:3000/preview
```

### 3. Preview Features

#### Content Navigation
- Browse all content types
- Filter by team/category
- Search functionality
- Resource preview

#### UI Components
- Mobile responsive view
- Dark/light mode toggle
- Component playground
- Resource viewer

#### Validation Feedback
- Schema validation
- Resource status
- Team attribution
- Required fields

## Testing Content

### 1. Template Testing
```bash
# Test specific template
yarn test-template path/to/template.mdx

# Validates:
- Schema compliance
- Resource links
- Team attribution
- Required sections
```

### 2. Resource Testing
```bash
# Verify resource links
yarn verify-resources

# Checks:
- File existence
- Link validity
- Asset availability
- Resource permissions
```

### 3. UI Testing
- Mobile responsiveness
- Component rendering
- Resource display
- Interactive elements

## Troubleshooting

### Common Issues

1. **Schema Validation Errors**
   ```bash
   # View detailed validation
   yarn validate-content --verbose
   ```

2. **Missing Resources**
   ```bash
   # Check resource paths
   yarn verify-resources --fix
   ```

3. **Preview Server Issues**
   ```bash
   # Clear cache and restart
   yarn clean
   yarn dev
   ```

### Error Resolution

1. **Invalid Frontmatter**
   - Check schema requirements
   - Verify field types
   - Update team attribution

2. **Resource Problems**
   - Verify file paths
   - Check resource existence
   - Update resource links

3. **Component Issues**
   - Check component props
   - Verify resource imports
   - Update component version

## Best Practices

### 1. Content Creation
- Use template examples
- Follow style guide
- Include all metadata
- Test resources locally

### 2. Preview Process
- Validate before preview
- Check all viewports
- Test interactions
- Verify resources

### 3. Quality Checks
- Run all validations
- Test edge cases
- Check performance
- Verify accessibility

## Integration Testing

### 1. Platform Features
- Search functionality
- Related content
- Resource handling
- Analytics tracking

### 2. Content Flow
- Creation process
- Validation steps
- Preview accuracy
- Publication flow

### 3. Performance
- Load times
- Resource loading
- Component rendering
- Search response

## Deployment Checklist

### 1. Pre-deployment
- [ ] All validations pass
- [ ] Resources verified
- [ ] UI components tested
- [ ] Mobile responsive

### 2. Content Quality
- [ ] Technical accuracy
- [ ] Resource availability
- [ ] Link validity
- [ ] Schema compliance

### 3. Platform Integration
- [ ] Search indexing
- [ ] Analytics setup
- [ ] Cache configuration
- [ ] Performance metrics
