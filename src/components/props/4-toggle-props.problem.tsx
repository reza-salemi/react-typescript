type EmbeddedPlayGroundProps = {
  useStackblitz?: boolean;
  stackblitzId?: string;
  codeSandboxId?: string;
};

export const EmbeddedPlayGround = (props: EmbeddedPlayGroundProps) => {
  if (props.useStackblitz) {
    return (
      <iframe src={`https://stackblitz.com/edit/${props.stackblitzId}`}>
        EmbededPlayGround
      </iframe>
    );
  }
  return (
    <iframe src={`https://codesandbox.io/embed/${props.codeSandboxId}`}>
      EmbededPlayGround
    </iframe>
  );
};

<>
  <EmbeddedPlayGround useStackblitz stackblitzId="my-stackblitz-id" />
  <EmbeddedPlayGround codeSandboxId="my-codesandbox-id" />

  <EmbeddedPlayGround
    useStackblitz
    //@ts-expect-error
    codeSandboxId="my-code-sandbox-id"
  />

  {/* @ts-expect-error */}
  <EmbeddedPlayGround useStackblitz stackblitzId="my-code-sandbox-id" />
</>;
