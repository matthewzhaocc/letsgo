import { TenantNewMessage } from "@letsgo/types";
import { MessageHandler } from "./index";
import { sendSlackMessage } from "@letsgo/slack";
import { serializeIdentity } from "@letsgo/trust";

export const tenantNewHandler: MessageHandler = async (
  message,
  event,
  context
) => {
  const tenant = (message as TenantNewMessage).payload.tenant;

  console.log("NEW TENANT", tenant);

  const text = [
    `:rocket: New tenant created`,
    `*Tenant Id:* ${tenant.tenantId}`,
    `*Name:* ${tenant.displayName}`,
    `*Plan Id:* ${tenant.plan.planId}`,
    `*Created by:* ${serializeIdentity(tenant.createdBy)}`,
    `*Timestamp:* ${tenant.createdAt}`,
  ];

  await sendSlackMessage(text.join("\n"));
};