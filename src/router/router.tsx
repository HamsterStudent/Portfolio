import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Project from "../Pages/Project/Project";
import Main from "../Pages/Main/Main";
import { useTransition, animated } from "@react-spring/web";
import NotFound from "../Pages/NotFound";

export default function Router() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translate3d(100vw, 0, 0)",
      transition: "ease-in-out",
      height: "0",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: "ease-in-out",
      height: "100%",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-120vw, 0, 0)",
      transition: "ease-in-out",
      height: "0",
    },
  });

  return (
    <>
      {transitions((style, item) => (
        <animated.div key={item.key} style={style}>
          <Routes location={item}>
            <Route path="/" element={<Main />} />
            <Route path="/project" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </animated.div>
      ))}
    </>
  );
}
