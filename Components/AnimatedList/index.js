import React, { useMemo, useContext, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const AnimatedList = ({ list = [], Element, refresh, suspect }) => {

  const transitions = useTransition(list, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 100,
    config: (notification, index, phase, other) => (key) => {
      return phase === "enter" ? {} : { duration: 500 };
    },
  });

  return (
    <>
      {transitions((style, item) => (
        <div style={style}>
          <Element
            key={item.id}
            deleteFunc={() => {}}
            refresh={refresh}
            suspect={suspect}
            {...item}
          />
        </div>
        // <animated.div className={classes.message} style={style}>
      ))}
    </>
  );
};

export default AnimatedList;
