// Components
import Box from "@material-ui/core/Box";
import React from "react";

// import Typography from "@material-ui/core/Typography";
import { useCallback, useState, ChangeEvent } from "react";
import Milkdown from "./components/index.tsx";

import "./index.css";

export default function App(): JSX.Element {
  const [content, setContent] = React.useState<string>("");

  const onTextChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onTextChange")
    console.log(ev);
    // console.log(ev.target.value);
    setContent(ev as any);
  }, []);

  return (
    <div className="App">
      <React.Fragment>
        <Milkdown onChange={onTextChange} value={content} editable={true} spellcheck={true} />
      </React.Fragment>
    </div>
  );
}
