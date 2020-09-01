import React from "react";
import classes from "./Button.module.css";

const classSelector = (btnType) => {
  if (btnType === "danger") {
    return classes.Danger;
  } else if (btnType === "continue") return classes.continue;
  else return null;
};
const Button = (props) => {
//   console.log(props)
  const arr = [classes.Button, classSelector(props.btnType)];
  return (
      <button onClick={props.clicked} className={arr.join(' ')}>
        {props.children}
      </button>
  );
};

export default Button;
