---
sidebar_position: 2
---

# Issue Scripts
Below are some example scripts that can be used to automate your Jira workflows.

## Add a comment when an issue is created

**Event Type**: `Issue Created`

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
await sfj.post(`/rest/api/3/issue/${issueIdOrKey}/comment`,bodyData);


console.log('Done');

```

## change status to "In Progress" when an comment is added

**Event Type**: `Comment Added`
**Script**:
```javascript
// Subscribe to the "Comment Added" event
const event = sfj.getEvent();

async function handleCommentAdded() {
    try {
        // Get issue key from the event data
        const issueKey = event.issue.key;

        // Fetch issue details to check its current status
        const issueResponse = await sfj.get(`/rest/api/3/issue/${issueKey}`);
        const issue = issueResponse.fields;
        console.log(`Fetched issue details for ${issueKey}:`, issue);

        // Check if the issue status is not "In Progress"
        if (issue.status.name !== "In Progress") {
            console.log(`Issue ${issueKey} is in status '${issue.status.name}'. Transitioning to 'In Progress'.`);

            // Fetch transitions to get the ID of the "In Progress" transition
            const transitionsResponse = await sfj.get(`/rest/api/3/issue/${issueKey}/transitions`);
            const transitions = transitionsResponse.transitions;
            const inProgressTransition = transitions.find(t => t.to.name === "In Progress");

            if (inProgressTransition) {
                // Transition the issue to "In Progress"
                await sfj.post(`/rest/api/3/issue/${issueKey}/transitions`, JSON.stringify({
                    transition: {
                        id: inProgressTransition.id
                    }
                }));
                console.log(`Successfully transitioned issue ${issueKey} to 'In Progress'.`);
            } else {
                console.error(`No 'In Progress' transition found for issue ${issueKey}.`);
            }
        } else {
            console.log(`Issue ${issueKey} is already in 'In Progress' status. No action taken.`);
        }
    } catch (error) {
        console.error("Error handling 'Comment Added' event:", error);
    }
}

await handleCommentAdded()

```