[@letsgo/types](../README.md) / GetMeResponse

# Interface: GetMeResponse

Details of the user represented by an access token. This includes the identity of the user as well
as the list of tenants that user has access to.

## Table of contents

### Properties

- [identity](GetMeResponse.md#identity)
- [identityId](GetMeResponse.md#identityid)
- [tenants](GetMeResponse.md#tenants)

## Properties

### identity

• **identity**: `Identity`

Deserialized identity of the user.

#### Defined in

[index.ts:104](https://github.com/tjanczuk/letsgo/blob/c32fd97/packages/types/src/index.ts#L104)

___

### identityId

• **identityId**: `string`

Serialized identityId of the user.

#### Defined in

[index.ts:100](https://github.com/tjanczuk/letsgo/blob/c32fd97/packages/types/src/index.ts#L100)

___

### tenants

• **tenants**: `Tenant`[]

List of tenants that the user has access to.

#### Defined in

[index.ts:108](https://github.com/tjanczuk/letsgo/blob/c32fd97/packages/types/src/index.ts#L108)
