---
sidebar_position: 4 
---

# API Reference

The ScriptFlow for Jira (SFJ) API provides a set of methods to interact with Jira. This API is available in your event handler scripts.

## Core Methods

### getEvent()
Returns the current event data that triggered the handler.

```javascript
const event = sfj.getEvent();
```

Throws an error if no event data is available.

## HTTP Methods

### get(path)
Performs a GET request to the Jira API.

```javascript
const issue = await sfj.get('/rest/api/3/issue/PROJ-123');
```

- **Parameters:**
  - `path` (string): The Jira REST API endpoint path
- **Returns:** Promise resolving to the JSON response

### post(path, body)
Performs a POST request to the Jira API.

```javascript
const newIssue = await sfj.post('/rest/api/3/issue', {
  fields: {
    summary: 'New issue',
    project: { key: 'PROJ' }
  }
});
```

- **Parameters:**
  - `path` (string): The Jira REST API endpoint path
  - `body` (object): The request payload
- **Returns:** Promise resolving to the JSON response

### put(path, body)
Performs a PUT request to the Jira API.

```javascript
const updatedIssue = await sfj.put('/rest/api/3/issue/PROJ-123', {
  fields: {
    summary: 'Updated summary'
  }
});
```

- **Parameters:**
  - `path` (string): The Jira REST API endpoint path
  - `body` (object): The request payload
- **Returns:** Promise resolving to the JSON response

### delete(path)
Performs a DELETE request to the Jira API.

```javascript
await sfj.delete('/rest/api/3/issue/PROJ-123');
```

- **Parameters:**
  - `path` (string): The Jira REST API endpoint path
- **Returns:** Promise resolving to the response text

## Headers

All API requests automatically include the following headers:
- `Accept: application/json`
- `Content-Type: application/json` (for POST and PUT requests)

The API uses app-level authentication, ensuring secure access to Jira resources.