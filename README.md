# Slack Notification

This is a simple action which sends a plain text message to a Slack webhook. Both inputs are required:

- `WEBHOOK`: a Slack webhook URL.

- `MESSAGE`: a plain text message.

Example code:

```yaml
name: JS-based Slack Notification
on: workflow_dispatch
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - uses: kxue43/slack-notification@v1
        with:
          WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
          MESSAGE: "Plain text message to Slack channel."
```
