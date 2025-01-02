---
sidebar_position: 2
---

# Issue Scripts
Below are some example scripts that can be used to automate your Jira workflows.

## Add a comment when an issue is created

**Event Type**: `issueCreated`

**Script**:
```javascript
// Get the current event data
const event = sfj.getEvent();

// Get the issue id or key
const issueIdOrKey = event.issue.key;
console.log('issueIdOrKey', issueIdOrKey);

const bodyData = `{
  "body": {
    "content": [
      {
        "content": [
          {
            "text": "Thanks for contacting us. We will get back to you soon.",
            "type": "text"
          }
        ],
        "type": "paragraph"
      }
    ],
    "type": "doc",
    "version": 1
  }
}`; 

// Post the comment to the issue 
const response = await sfj.post(`/rest/api/3/issue/${issueIdOrKey}/comment`,bodyData);
console.log(`Response: ${response.status} ${response.statusText}`);

console.log('Done');

```


