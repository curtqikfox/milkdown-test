import { MilkdownProvider } from '@milkdown/react'
import { StrictMode } from 'react'
import { MilkdownEditor } from './components/Editor'

import { blockquoteSchema } from '@milkdown/preset-commonmark';
import { $command, callCommand } from '@milkdown/utils';
import { wrapIn } from '@milkdown/prose/commands';
import { Editor } from '@milkdown/core';

// const wrapInBlockquoteCommand = $command('WrapInBlockquote', (ctx) => () => wrapIn(blockquoteSchema.type(ctx)));

// // // register the command when creating the editor
// // const editor = Editor().make().use(wrapInBlockquoteCommand).create();

// // call command
// // editor.action(callCommand(wrapInBlockquoteCommand.key));
// function wrapInHeadingImpl() {
//   // use number as the type of argument
//   // call command
//   editor.action(callCommand(wrapInHeadingCommand.key)); // turn to h1 by default
// }

const App = () => {
  return (
    <StrictMode>
      <MilkdownProvider>
        <MilkdownEditor />
      </MilkdownProvider>
    </StrictMode>
  )
}

export default App
