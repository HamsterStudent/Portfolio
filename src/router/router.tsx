import React from "react";
import { Route, Routes } from "react-router-dom";
import Project from "../Pages/Project";
import Main from "../Pages/Main/Main";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}
