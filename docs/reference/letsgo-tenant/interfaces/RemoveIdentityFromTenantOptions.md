[@letsgo/tenant](../README.md) / RemoveIdentityFromTenantOptions

# Interface: RemoveIdentityFromTenantOptions

Options for removing a user from a tenant.

## Hierarchy

- `DeploymentOptions`

  ↳ **`RemoveIdentityFromTenantOptions`**

## Table of contents

### Properties

- [deployment](RemoveIdentityFromTenantOptions.md#deployment)
- [identity](RemoveIdentityFromTenantOptions.md#identity)
- [region](RemoveIdentityFromTenantOptions.md#region)
- [tenantId](RemoveIdentityFromTenantOptions.md#tenantid)

## Properties

### deployment

• `Optional` **deployment**: `string`

LetsGo deployment name.

#### Inherited from

DeploymentOptions.deployment

#### Defined in

db/dist/index.d.ts:18

___

### identity

• **identity**: `Identity`

LetsGo identity.

#### Defined in

[tenant/src/index.ts:756](https://github.com/tjanczuk/letsgo/blob/c32fd97/packages/tenant/src/index.ts#L756)

___

### region

• `Optional` **region**: `string`

AWS region.

#### Inherited from

DeploymentOptions.region

#### Defined in

db/dist/index.d.ts:14

___

### tenantId

• **tenantId**: `string`

LetsGo tenant Id.

#### Defined in

[tenant/src/index.ts:752](https://github.com/tjanczuk/letsgo/blob/c32fd97/packages/tenant/src/index.ts#L752)
