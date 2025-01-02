---
sidebar_position: 3
---

# Supported Events

ScriptFlow for Jira supports a wide range of Jira events that you can use to trigger your automation scripts. Below is a comprehensive list of all supported events, organized by category.

## Issue Events
- `avi:jira:created:issue` - Issue Created
- `avi:jira:updated:issue` - Issue Updated
- `avi:jira:deleted:issue` - Issue Deleted
- `avi:jira:assigned:issue` - Issue Assigned
- `avi:jira:viewed:issue` - Issue Viewed
- `avi:jira:mentioned:issue` - Issue Mentioned

## Issue Links
- `avi:jira:created:issuelink` - Issue Link Created
- `avi:jira:deleted:issuelink` - Issue Link Deleted

## Worklogs
- `avi:jira:created:worklog` - Worklog Created
- `avi:jira:updated:worklog` - Worklog Updated
- `avi:jira:deleted:worklog` - Worklog Deleted

## Comments
- `avi:jira:commented:issue` - Comment Created
- `avi:jira:mentioned:comment` - Mentioned in Comment
- `avi:jira:deleted:comment` - Comment Deleted

## Custom Fields
- `avi:jira:created:field` - Field Created
- `avi:jira:updated:field` - Field Updated
- `avi:jira:trashed:field` - Field Trashed
- `avi:jira:restored:field` - Field Restored
- `avi:jira:deleted:field` - Field Deleted

## Projects
- `avi:jira:created:project` - Project Created
- `avi:jira:updated:project` - Project Updated
- `avi:jira:softdeleted:project` - Project Moved to Trash
- `avi:jira:deleted:project` - Project Deleted
- `avi:jira:archived:project` - Project Archived
- `avi:jira:unarchived:project` - Project Unarchived
- `avi:jira:restored:project` - Project Restored

## Attachments
- `avi:jira:created:attachment` - Attachment Created
- `avi:jira:deleted:attachment` - Attachment Deleted

## Users
- `avi:jira:created:user` - User Created
- `avi:jira:updated:user` - User Updated
- `avi:jira:deleted:user` - User Deleted

## Versions
- `avi:jira:created:version` - Version Created
- `avi:jira:updated:version` - Version Updated
- `avi:jira:deleted:version` - Version Deleted
- `avi:jira:released:version` - Version Released
- `avi:jira:unreleased:version` - Version Unreleased
- `avi:jira:archived:version` - Version Archived
- `avi:jira:unarchived:version` - Version Unarchived
- `avi:jira:moved:version` - Version Moved
- `avi:jira:merged:version` - Version Merged

## Components
- `avi:jira:created:component` - Component Created
- `avi:jira:updated:component` - Component Updated
- `avi:jira:deleted:component` - Component Deleted

## Jira Software

### Board Events
- `avi:jira-software:created:board` - Board Created
- `avi:jira-software:updated:board` - Board Updated
- `avi:jira-software:deleted:board` - Board Deleted
- `avi:jira-software:configuration-changed:board` - Board Configuration Changed

### Sprint Events
- `avi:jira-software:created:sprint` - Sprint Created
- `avi:jira-software:updated:sprint` - Sprint Updated
- `avi:jira-software:deleted:sprint` - Sprint Deleted
- `avi:jira-software:configuration-changed:sprint` - Sprint Configuration Changed

## Other Events
- `avi:jira:timetracking:provider:changed` - Time Tracking Provider Changed
- `avi:jira:failed:expression` - Workflow Expression Failed


