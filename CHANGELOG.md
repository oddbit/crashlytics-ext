## 0.0.14

- Stabilizing the extension for release
- Fixing HTTP calls to chat APIs

## 0.0.13

- Updating node version to 18
- Moving webhooks into secrets instead of Firestore configuration.

## 0.0.7

Fixing function trigger type

## 0.0.1

Initial release.

Implementing support for webhook integration with Google Chat to send a
card with Github and Crashlytics quick actions.

- Refactoring Github repo information in App Info
- Adding crashlytics support for Slack and Discord
- Adding functions to capture billing, app distribution and performance alerts
  with no handling apart from debug logging. Needed for collecting sample data.
