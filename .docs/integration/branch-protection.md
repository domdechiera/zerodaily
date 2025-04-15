# Branch Protection Configuration Guide

This document outlines the required branch protection settings for this repository.
These settings should be configured manually by a repository administrator.

## Manual Setup Instructions

To set up branch protection:

1. Go to the repository on GitHub
2. Click Settings > Branches
3. Click "Add rule" next to "Branch protection rules"
4. Enter "main" as the branch name pattern
5. Configure the following settings:

## Required Configuration

### Required Status Checks
- [x] Require branches to be up to date before merging
- Required status checks:
  - `commitlint` - Enforces commit message format
  - `Team Attribution Check` - Verifies team attribution in commits

### Pull Request Requirements
- [x] Require a pull request before merging
- [x] Require approvals (1)
- [x] Dismiss stale pull request approvals when new commits are pushed
- [x] Require review from Code Owners

### Additional Protections
- [ ] Do not require status checks to pass before merging for administrators
- [x] Require linear history (no merge commits)
- [ ] Allow force pushes
- [ ] Allow deletions

## Technical Implementation

The above settings are equivalent to the following GitHub API configuration:

```json
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["commitlint", "Team Attribution Check"]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": true,
    "required_approving_review_count": 1
  },
  "restrictions": null,
  "required_linear_history": true,
  "allow_force_pushes": false,
  "allow_deletions": false
}
```

## Note on Automation

GitHub Actions tokens cannot modify branch protection settings without admin-level personal access tokens, which are not recommended to be stored in the repository. Therefore, this configuration must be applied manually.
