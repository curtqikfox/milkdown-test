import { $node, $remark, $inputRule } from '@milkdown/utils';
import directive from 'remark-directive';
import { InputRule } from 'prosemirror-inputrules';

const remarkPluginId = "..."
export const remarkDirective = $remark(remarkPluginId, () => directive)

const AST = {
    name: 'iframe',
    attributes: { src: 'https://saul-mirone.github.io' },
    type: 'leafDirective',
};

export const iframeInputRule = $inputRule(() => new InputRule(/::iframe\{src\="(?<src>[^"]+)?"?\}/, (state, match, start, end) => {
    const [okay, src = ''] = match;
    const { tr } = state;
  
    if (okay) {
      tr.replaceWith(start - 1, end, iframeNode.type().create({ src }));
    }
  
    return tr;
  }))

export const iframeNode = $node('iframe', () => ({
  group: 'block',
  atom: true,
  isolating: true,
  marks: '',
  attrs: {
    src: { default: null },
  },
  parseDOM: [{
    tag: 'iframe',
    getAttrs: (dom) => ({
      src: dom.getAttribute('src'),
    }),
  }],
  toDOM: (node) => [
    'iframe',
    {...node.attrs, 'contenteditable': false},
    0,
  ],
  parseMarkdown: {
    match: (node) => console.log(node) && node.type === 'leafDirective' && node.name === 'iframe',
    runner: (state, node, type) => {
      state.addNode(type, { src: node.attributes.src });
    },
  },

  toMarkdown: {
    match: (node) => node.type.name === 'iframe',
    runner: (state, node) => {
      state.addNode('leafDirective', undefined, undefined, {
        name: 'iframe',
        attributes: { src: node.attrs.src },
      });
    },
  }
})) 
