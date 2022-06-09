import React from "react";
import classes from "./style.module.scss";

/**
 * Produces a text element
 * @param {string} [param.variant=text] Which styling you want to add to your text, see ./style.modiule.scss for
 * @param {string} param.component Which html tag you want to give your text
 */
const Typography = ({ variant = "text", component, children, style = {} }) => {
  switch (component) {
    case "h1":
      return <h1 style={style} className={classes[variant]}>{children}</h1>;
    case "h2":
      return (
        <h2 style={style} className={classes[variant]}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 style={style} className={classes[variant]}>
          {children}
        </h3>
      );
    case "p":
      return (
        <p style={style} className={classes[variant]}>
          {children}
        </p>
      );
    default:
      return (
        <p style={style} className={classes[variant]}>
          {children}
        </p>
      );
  }
};

export default Typography;
