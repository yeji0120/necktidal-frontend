import React from "react";

const CLASS_NAME = "navigation-with-keyboard";

export const FocusOutlineHelper = () => {
  const [isKeyboard, setKeyboard] = React.useState(false);

  React.useEffect(() => {
    const clickHandler = () => {
      setKeyboard(false);
    };

    const keydownHandler = e => {
      if (e.key === "Tab" && !e.defaultPrevented) {
        setKeyboard(true);
      }
    };

    window.addEventListener("mousedown", clickHandler);
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("mousedown", clickHandler);
      window.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  React.useEffect(() => {
    if (isKeyboard) {
      document.body.classList.add(CLASS_NAME);
    } else {
      document.body.classList.remove(CLASS_NAME);
    }
  }, [isKeyboard]);

  return null;
};
