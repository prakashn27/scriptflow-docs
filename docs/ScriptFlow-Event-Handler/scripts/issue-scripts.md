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

## Change status to "In Progress" when a comment is added

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

## Auto Assign new Jira issues to a particular user

**Event Type**: `Issue Created`

**Script**:
```javascript
// Listen for the "Issue Created" event
const event = sfj.getEvent();

// Retrieve the issue details from the event payload
const issueKey = event.issue.key;

// Define the account ID of the user to whom the issue should be assigned
// https://community.atlassian.com/t5/Jira-questions/where-can-i-find-my-Account-ID/qaq-p/976527
const assigneeAccountId = "712020:fccd1360-a1c6-408c-9a57-afffcd6b93f0"; // Replace with the actual account ID of the user

async function assignIssue() {
  try {
    // Construct the API endpoint for assigning the issue
    const endpoint = `/rest/api/3/issue/${issueKey}/assignee`;

    // Define the body payload for the assignment
    const body = JSON.stringify({
      accountId: assigneeAccountId
    });

    // Perform the assignment
    const response = await sfj.put(endpoint, body);

    // Log success
    console.log(`Issue ${issueKey} successfully assigned to user with account ID: ${assigneeAccountId}`);
    console.log(`Response:`, response);
  } catch (error) {
    // Log errors, if any
    console.error(`Failed to assign issue ${issueKey}.`, error);
  }
}

// Invoke the function to assign the issue
await assignIssue();
```