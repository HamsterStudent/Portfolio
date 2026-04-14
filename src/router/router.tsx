import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Project from "../Pages/Project/Project";
import Main from "../Pages/Main/Main";
import { useTransition, animated } from "@react-spring/web";
import NotFound from "../Pages/NotFound";

export default function Router() {
  const location = useLocation();
  const transitions = useTransition(location, {
    // 레트로 OS 감성에 맞는 픽셀 글리치(Pixel Glitch) 화면 전환 애니메이션
    from: {
      opacity: 0,
      transform: "translateX(20px) skewX(15deg)",
      clipPath: "inset(10% 0 70% 0)", 
      filter: "invert(100%) brightness(200%)",
    },
    enter: [
      { 
        opacity: 1, 
        transform: "translateX(-15px) skewX(-20deg)", 
        clipPath: "inset(40% 0 40% 0)", 
        filter: "invert(0%) grayscale(100%)", 
        config: { duration: 50 } 
      },
      { 
        transform: "translateX(10px) skewX(10deg)", 
        clipPath: "inset(80% 0 10% 0)", 
        filter: "invert(100%) hue-rotate(90deg)", 
        config: { duration: 40 } 
      },
      { 
        transform: "translateX(-5px) skewX(-5deg)", 
        clipPath: "inset(20% 0 60% 0)", 
        filter: "invert(0%) hue-rotate(0deg)", 
        config: { duration: 40 } 
      },
      { 
        transform: "translateX(0px) skewX(0deg)", 
        clipPath: "inset(0% 0 0% 0)", 
        filter: "invert(0%) grayscale(0%)", 
        config: { duration: 40 } 
      },
    ],
    leave: [
      { 
        transform: "translateX(-10px) skewX(25deg)", 
        clipPath: "inset(30% 0 30% 0)", 
        filter: "invert(100%) contrast(300%)", 
        config: { duration: 40 } 
      },
      { 
        opacity: 0, 
        transform: "translateX(20px) skewX(-15deg)", 
        clipPath: "inset(70% 0 10% 0)", 
        filter: "grayscale(100%) blur(2px)", 
        config: { duration: 40 } 
      },
    ],
  });

  return (
    <>
      {transitions((style, item) => (
        <animated.div 
          key={item.key} 
          style={{
            ...style,
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
        >
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
