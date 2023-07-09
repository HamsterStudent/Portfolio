import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

export const darkTheme = {
  textColor: "#fff",
  backgroundColor: "#252525",
  windowBg: "#377448",
  windowBarColor: "#224434",
  windowShadow:
    "inset -1px -1px 0 0, inset 1px 1px 0 0 rgba(255, 255, 255, 0.3), 5px 5px 0 #0003;",
};

export const lightTheme = {
  textColor: "#111",
  backgroundColor: "#377448",
  windowBg: "#377448",
  windowBarColor: "#224434",
  windowShadow:
    "inset -1px -1px 0 0, inset 1px 1px 0 0 rgba(255, 255, 255, 0.3), 5px 5px 0 #0003;",
};

export const summerTheme = {};
