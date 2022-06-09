import React from "react";
import classes from "./style.module.scss";

const Container = ({ children, style }) => {
  return (
    <div className={classes.container} style={style}>
      {children}
    </div>
  );
};

export default Container;
