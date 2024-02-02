import React, { useEffect } from "react";
import { ReactEditor, useEditor } from "@milkdown/react";

// Components
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core";
import { createEditor } from "./editor";
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
    console.log("Editor 2");
    console.log(editor);
    console.log(editor.editor.dom);
    console.log(editor.editor.dom.current);
    addButtonToToolbar();

    var pgs = document.getElementsByClassName("paragraph")
    var editorElem = document.getElementsByClassName("editor")
    console.log(pgs)

    if (pgs.length && editorElem.length) {
      editorElem = editorElem[0]
      console.log(editorElem)
      console.log(editorElem.children)
      console.log("\n-----------------------------------\n")
      for (var i = 0; i < pgs.length; i++) {
        var paragraph = pgs[i];
        console.log(paragraph)
        console.log(paragraph.parentElement)
        console.log(i)
        console.log(pgs.length)
        var replacementParagraph = 
        `<div class='paragraph' \
          style='height: 50px; \
          width: 50px; \
          background-color: lightgrey; \
          border-radius: 5px'> \
          ${paragraph.innerHTML} \
        </div>`
         // editorElem.replaceChild(paragraph, replacementParagraph)
        console.log("replacing a paragraph")
        editorElem.removeChild(paragraph)
        // editorElem.appendChild(replacementParagraph)
        // editorElem.insertBefore(pgs[i], replacementParagraph)
        break;
      }
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
