import React, { useEffect, useState } from "react";
import ErrorIcon from "../Components/ErrorIcon";
import ModalWindow from "../Components/ModalWindow";

const Blog = () => {
  return (
    <ModalWindow
      width={400}
      windowName="Blog"
      defaultPosition={{ x: 300, y: 200 }}
    >
      <div>
        <span>Github : </span>
        <a href="https://github.com/HamsterStudent">
          https://github.com/HamsterStudent
        </a>
      </div>
      <div>
        <span>Blog : </span>
        <a href="https://hamsterstudent.github.io/">
          https://hamsterstudent.github.io/
        </a>
      </div>
      <ErrorIcon name={"css"} />
    </ModalWindow>
  );
};

export default Blog;
