import {
  defaultValueCtx,
  Editor,
  editorViewOptionsCtx,
  rootCtx
} from "@milkdown/core";
import { gfm } from "@milkdown/preset-gfm";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { nord } from "@milkdown/theme-nord";
import { emoji } from "@milkdown/plugin-emoji";
import { math } from '@milkdown/plugin-math';
import { upload } from '@milkdown/plugin-upload';
import { diagram } from '@milkdown/plugin-diagram';
import { slash } from '@milkdown/plugin-slash';
import { menu, menuPlugin } from "@milkdown/plugin-menu";
import { menuConfig } from "./config.tsx";
import { $command } from '@milkdown/utils';
import { history } from '@milkdown/plugin-history';

import { colorText } from "./color-text-plugin/index.tsx";

// import { AtomList, createNode } from "@milkdown/utils";
// import { commonmark } from '@milkdown/preset-commonmark';
// import { iframeInputRule, remarkDirective, iframeNode } from './custom-remark-plugin'

// export const testCommand = $command('WrapInBlockquote', () => console.log("testCommand Ran"));

// let output = '';

export const createEditor = ({
  root,
  onChange,
  value,
  editable,
  spellcheck
}) => {
  return Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);

      ctx.get(listenerCtx).markdownUpdated((_, markdown) => {
        console.log("markdown before")
        console.log(markdown)
        onChange(markdown);
        // output = markdown;
        // console.log("markdown after")
        // console.log(markdown)
      });

      ctx.set(editorViewOptionsCtx, {
        editable: () => editable
      });

      root?.setAttribute("spellcheck", JSON.stringify(spellcheck));

      ctx.set(defaultValueCtx, value);
    })
    .use(nord)
    .use(gfm)
    .use(listener)
    .use(emoji)
    .use(colorText)
    .use(math)
    .use(diagram)
    .use(slash)
    .use(upload)
    .use(history)
    // .use(testCommand)
    // .use([remarkDirective, iframeNode, iframeInputRule])
    // .use(commonmark)
    .use(
      menu.configure(menuPlugin, {
        config: menuConfig as any
      })
    )
};
