
import React from "react";
import Highlight, { defaultProps, Prism } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Line, LineContent, LineNo, Pre } from "./CodeSnippet.styled";
import { CodeSnippetProps } from "./CodeSnippet.types";

const CodeSnippet = (props: CodeSnippetProps) => {
  const {exampleCode, language} = props;

  return (
    <Highlight {...defaultProps} theme={theme} code={exampleCode} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
  );
};

export default CodeSnippet;