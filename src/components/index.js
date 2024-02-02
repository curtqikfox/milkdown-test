import React, { useEffect } from "react";
import { ReactEditor, useEditor } from "@milkdown/react";

// Components
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core";
import { createEditor } from "./editor";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .menu-selector-wrapper": {
        position: "relative"
      },
      "& .milkdown-menu": {
        overflowX: "visible",
        overflowY: "visible"
      },
      "& .milkdown .editor": {
        padding: "1px 10px 30px",
        minHeight: 200
      },
      "& .milkdown .editor p": {
        margin: "10px 0"
      },
      "& .milkdown .editor .heading": {
        margin: "0 0 20px"
      }
    }
  })
);

function Milkdown({ onChange, value, editable, spellcheck }) {
  const classes = useStyles();


  const editor = useEditor((root) => {
    var milkdownEditor = createEditor({
      root,
      onChange,
      value,
      editable,
      spellcheck
    });
    console.log("milkdownEditor")
    console.log(milkdownEditor)
    console.log(milkdownEditor.ctx)
    // milkdownEditor.action(callCommand(testCommand));
    return milkdownEditor
  });

  // fetch(editor)
  // const instance = useInstance();

  useEffect(() => {
    // Run the command every time the context is updated
    // editor.action(callCommand(testCommand));
    // console.log("Editor 1");
    // console.log(editor);
    // console.log(editor.dom);
    console.log("Editor 2");
    console.log(editor);
    console.log(editor.editor.dom);
    console.log(editor.editor.dom.current);
    var menu = document.getElementsByClassName("milkdown-menu")
    console.log(menu)
    if (menu && menu.length) {
      console.log(menu[0])
      var toolbarContainer = document.createElement("div");
      toolbarContainer.style.height = menu[0].clientHeight + "px";
      toolbarContainer.style.width = toolbarContainer.style.height;
      toolbarContainer.style.backgroundColor = "lightgrey"
      toolbarContainer.style.borderRadius = "5px"
      menu = menu[0]

      menu.appendChild(toolbarContainer)
    }

    // fetch(editor);
  }, [editor]);


  return (
    <Box className={classes.root}>
      <ReactEditor editor={editor} />
    </Box>
  );
}

export default Milkdown;
