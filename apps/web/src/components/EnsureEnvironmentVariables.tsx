type EnsureEnvironmentVariablesProps = React.PropsWithChildren<{
  requiredEnvironmentVariables: string[];
  component: string;
  docsUrl?: string;
  docsText?: string;
}>;

function EnsureEnvironmentVariables({
  children,
  requiredEnvironmentVariables,
  component,
  docsText,
  docsUrl,
}: EnsureEnvironmentVariablesProps) {
  const missingEnvironmentVariables = requiredEnvironmentVariables.filter(
    (v) => process.env[v] === undefined
  );

  if (missingEnvironmentVariables.length > 0) {
    return (
      <div>
        <p>
          {component} is not configured correctly. Some of the required
          environment variables are not set:
        </p>
        <ul>
          {requiredEnvironmentVariables.map((v) => (
            <li key={v}>
              {v}
              {process.env[v] === undefined ? (
                <span style={{ color: "red" }}> is missing</span>
              ) : (
                `=${v.match(/secret/i) ? "****" : process.env[v]}`
              )}
            </li>
          ))}
        </ul>
        <p>
          If you are running the web component locally, you can provide them in
          the <code>apps/web/.env.local</code> file.{" "}
        </p>
        <p>
          If you are running in AWS, you can set them using the{" "}
          <code>yarn ops config set</code> command prior to running{" "}
          <code>yarn ops deploy</code>.{" "}
        </p>
        {docsUrl && docsText && (
          <p>
            <a href={docsUrl} target="_blank">
              {docsText}
            </a>
          </p>
        )}
      </div>
    );
  }

  return <div>{children}</div>;
}

export function Auth0EnsureEnvironmentVariables({
  children,
}: {
  children: React.ReactNode;
}) {
  const Auth0RequiredEnvironmentVariables = [
    "AUTH0_SECRET",
    "AUTH0_ISSUER_BASE_URL",
    "AUTH0_CLIENT_ID",
    "AUTH0_CLIENT_SECRET",
    "AUTH0_AUDIENCE",
    "AUTH0_SCOPE",
    "AUTH0_BASE_URL",
    "LETSGO_API_URL",
  ];

  return (
    <EnsureEnvironmentVariables
      requiredEnvironmentVariables={Auth0RequiredEnvironmentVariables}
      component="Auth0"
      docsUrl="https://github.com/tjanczuk/letsgo/blob/main/docs/tutorials/setting-up-authentication-with-auth0.md"
      docsText="Follow this tutorial to set up Auth0 in LetsGo"
    >
      {children}
    </EnsureEnvironmentVariables>
  );
}
