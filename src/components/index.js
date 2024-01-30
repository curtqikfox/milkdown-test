import React from "react";
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
    return createEditor({
      root,
      onChange,
      value,
      editable,
      spellcheck
    });
  });

  return (
    <Box className={classes.root}>
      <ReactEditor editor={editor} />
    </Box>
  );
}

export default Milkdown;
