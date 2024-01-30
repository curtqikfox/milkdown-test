import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import type { FC } from 'react';

import { Milkdown, useEditor } from '@milkdown/react'
import { commonmark } from '@milkdown/preset-commonmark';
import { nord } from '@milkdown/theme-nord';
// import { toolbar } from '@milkdown/plugin-toolbar';

import '@milkdown/theme-nord/style.css';

const markdown =
  `# Milkdown React Commonmark

This is a demo for using Milkdown with **React**.`

// import { blockquoteSchema } from '@milkdown/preset-commonmark';
// import { $command, callCommand } from '@milkdown/utils';
// import { wrapIn } from '@milkdown/prose/commands';
// import { Editor } from '@milkdown/core';

// const wrapInBlockquoteCommand = $command('WrapInBlockquote', (ctx) => () => wrapIn(blockquoteSchema.type(ctx)));

// function wrapInHeadingImpl(editor: Editor) {
//   editor.action(callCommand(wrapInHeadingCommand.key)); // turn to h1 by default
// }

export const MilkdownEditor: FC = () => {
  const editorInfo = useEditor((root, editor) => {
    const boldCommand = editor.commands.get('toggleBold');
    const italicCommand = editor.commands.get('toggleItalic');

    return Editor
      .make()
      .config(ctx => {
        ctx.set(rootCtx, root)
        ctx.set(defaultValueCtx, markdown)
      })
      .config(nord)
      .use(commonmark)
      // .commands((ctx) => {
      //   ctx.command('toggleBold', () => boldCommand());
      //   ctx.command('toggleItalic', () => italicCommand());
      // });
    // .use(wrapInBlockquoteCommand)
    // .commands({ key: 'toggleBold', command: boldCommand })
  }, [])

  return (
    <>
      <Milkdown />
    </>
  )
}




// import { Editor } from '@milkdown/core';
// import { someMilkdownPlugin } from 'some-milkdown-plugin';

// const editor = await Editor
//   .config(configForPlugin)
//   .use(someMilkdownPlugin)
//   .create();

// // remove plugin
// await editor.remove(someMilkdownPlugin);

// // remove config
// editor.removeConfig(configForPlugin);

// // add another plugin
// editor.use(anotherMilkdownPlugin)

// // Recreate the editor to apply changes.
// await editor.create();