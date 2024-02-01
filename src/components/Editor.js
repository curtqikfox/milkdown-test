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
import { menuConfig } from "./config";

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
        onChange(markdown);
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
    .use(math)
    .use(diagram)
    .use(slash)
    .use(upload)
    .use(
      menu.configure(menuPlugin, {
        config: menuConfig
      })
    );
};
