import React, { useEffect } from "react";
import { ReactEditor, useEditor } from "@milkdown/react";

// Components
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core";
import { createEditor } from "./editor.tsx";
import { paragraph } from "@milkdown/preset-commonmark";

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

function addButtonToToolbar() {
  var menu = document.getElementsByClassName("milkdown-menu") as HTMLCollectionOf<Element>
  console.log(menu)
  if (menu && menu.length) {
    console.log(menu[0])
    var toolbarContainer = document.createElement("div");
    var menuElem = menu[0] as Element
    toolbarContainer.style.height = menuElem.clientHeight + "px";
    toolbarContainer.style.width = toolbarContainer.style.height;
    toolbarContainer.style.backgroundColor = "lightgrey"
    toolbarContainer.style.borderRadius = "5px"

    menuElem.appendChild(toolbarContainer)
  }
} 

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
    // console.log("Editor 2");
    // console.log(editor);
    // console.log(editor.editor.dom);
    // console.log(editor.editor.dom.current);
    addButtonToToolbar();

    var pgs = document.getElementsByClassName("paragraph")
    var editorList = document.getElementsByClassName("editor") as HTMLCollectionOf<Element>
    console.log(pgs)

    if (pgs.length && editorList.length) {
      var editorElem = editorList[0] as Element
      console.log("\n-----------------------------------\n")
      for (var i = 0; i < pgs.length; i++) {
        var paragraph = pgs[i];
        var replacementParagraph = document.createElement("div");
        replacementParagraph.innerHTML = `<p class='paragraph qik' \
          style='height: 50px; \
          width: 50px; \
          background-color: lightgrey; \
          border-radius: 5px'> \
          ${paragraph.innerHTML} \
        </p>`;
        break;
      }
    }
  }, [editor]);

  return (
    <Box className={classes.root}>
      <ReactEditor editor={editor as any} />
    </Box>
  );
}

export default Milkdown;
