[@letsgo/types](../README.md) / ContactMessage

# Interface: ContactMessage

Message of [MessageType.Contact](../enums/MessageType.md#contact) type representing the contact form submission.

## Hierarchy

- [`Message`](Message.md)

  ↳ **`ContactMessage`**

## Table of contents

### Properties

- [payload](ContactMessage.md#payload)
- [type](ContactMessage.md#type)

## Properties

### payload

• **payload**: [`ContactMessagePayload`](ContactMessagePayload.md)

Message payload.

#### Overrides

[Message](Message.md).[payload](Message.md#payload)

#### Defined in

[index.ts:245](https://github.com/tjanczuk/letsgo/blob/d6c3e04/packages/types/src/index.ts#L245)

___

### type

• **type**: [`Contact`](../enums/MessageType.md#contact)

Message type.

#### Overrides

[Message](Message.md).[type](Message.md#type)

#### Defined in

[index.ts:241](https://github.com/tjanczuk/letsgo/blob/d6c3e04/packages/types/src/index.ts#L241)