type ModalProps =
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    };

export const Modal = ({ variant, title }: ModalProps) => {
  if (variant === "no-title") {
    return <div>No title</div>;
  } else {
    return <div>Title: {title}</div>;
    7;
  }
};

export const Test = () => {
  return (
    <div>
      <Modal variant="title" title="hello" />
      <Modal variant="no-title" />

      {/* @ts-expect-error */}
      <Modal />
      <Modal
        variant="no-title"
        // @ts-expect-error
        title="Hello"
      />
    </div>
  );
};
