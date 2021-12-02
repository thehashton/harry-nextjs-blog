import React from 'react';
import Playground from "@agney/playground";
import "@reach/tabs/styles.css";
import { CodePlaygroundProps } from './Playground.types';

const CodePlayground = (props: CodePlaygroundProps) => {
const {id, defaultEditorTab, mode = 'dark', markup, cssCode, javaScript } = props;

  const snippet = {
    markup: markup,
    css: cssCode,
    javascript: javaScript,
  };

  return (
    <Playground
      id={id}
      initialSnippet={snippet}
      defaultEditorTab={defaultEditorTab}
      transformJs 
      mode={mode}  />
  )
}

export default CodePlayground;