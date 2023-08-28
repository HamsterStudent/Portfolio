import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atelierCaveDark,
  atelierEstuaryDark,
  atelierForestDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 15px;
  h1 {
    font-size: 22px;
    margin-top: 15px;
  }
  h2 {
    font-size: 22px;
    line-height: 28px;
    font-weight: 400;
    margin: 10px 0;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
  pre {
    margin: 10px 0;
  }
`;

interface IMarkdownRenderer {
  children: string;
}
const MarkdownRenderer = ({ children }: IMarkdownRenderer) => {
  return (
    <>
      <Wrap>
        <ReactMarkdown
          children={children}
          components={{
            code({ node, inline, className, children, style, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={atelierCaveDark}
                  language={match[1]}
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </Wrap>
    </>
  );
};

export default MarkdownRenderer;
