[@letsgo/slack](../README.md) / SlackMessage

# Interface: SlackMessage

Slack message to send.

## Indexable

▪ [key: `string`]: `any`

Any other properties to be included in the message, see [Slack message API](https://api.slack.com/messaging/composing).

## Table of contents

### Properties

- [blocks](SlackMessage.md#blocks)
- [text](SlackMessage.md#text)

## Properties

### blocks

• `Optional` **blocks**: `any`[]

Slack blocks. See [Block Kit](https://api.slack.com/reference/block-kit/blocks) for more information.

#### Defined in

[index.ts:19](https://github.com/tjanczuk/letsgo/blob/c32fd97/packages/slack/src/index.ts#L19)

___

### text

• **text**: `string`

The text of the message, including any formatting supported by Slack.

#### Defined in

[index.ts:15](https://github.com/tjanczuk/letsgo/blob/c32fd97/packages/slack/src/index.ts#L15)
