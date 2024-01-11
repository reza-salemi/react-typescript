type ModalProps =
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    };

/**
 * 1. How do we add a 'buttonColor prop to the 'ModalProps type that
 * is _always_ required across different variants?
 */

export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return (
      <div>
        <span>title</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click Me!
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <span>title: {props.title}</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click Me!
        </button>
      </div>
    );
    7;
  }
};

export const Test = () => {
  return (
    <div>
      <Modal variant="title" />
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
