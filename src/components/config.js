import {
  TurnIntoHeading,
  TurnIntoText,
  WrapInBulletList,
  WrapInOrderedList
} from "@milkdown/preset-commonmark";
// import { EditorView } from "@milkdown/prose/view";
import { setBlockType } from "@milkdown/prose/commands";

const hasMark = (state, type) => {
  if (!type) return false;
  const { from, $from, to, empty } = state.selection;
  if (empty) {
    return !!type.isInSet(state.storedMarks || $from.marks());
  }
  return state.doc.rangeHasMark(from, to, type);
};

export const menuConfig = [
  [
    {
      type: "select",
      text: "Headlines",
      options: [
        { id: 1, text: "H1 - Heading 1" },
        { id: 2, text: "H2 - Heading 2" },
        { id: 3, text: "H3 - Heading 3" },
        { id: 0, text: "P - Heading" }
      ],
      disabled: (view) => {
        const { state } = view;
        const setToHeading = (level) =>
          setBlockType(state.schema.nodes.heading, { level })(state);
        return !(setToHeading(1) || setToHeading(2) || setToHeading(3));
      },
      onSelect: (id) => {
        return id > 0 ? [TurnIntoHeading, id] : [TurnIntoText, null];
      }
    }
  ],
  [
    {
      type: "button",
      icon: "bold",
      key: "ToggleBold",
      active: (view) => hasMark(view.state, view.state.schema.marks.strong),
      disabled: (view) => !view.state.schema.marks.strong
    },
    {
      type: "button",
      icon: "italic",
      key: "ToggleItalic",
      active: (view) => hasMark(view.state, view.state.schema.marks.em),
      disabled: (view) => !view.state.schema.marks.em
    },
    {
      type: "button",
      icon: "strikeThrough",
      key: "ToggleStrikeThrough",
      active: (view) =>
        hasMark(view.state, view.state.schema.marks.strike_through),
      disabled: (view) => !view.state.schema.marks.strike_through
    }
  ],
  [
    {
      type: "button",
      icon: "bulletList",
      key: WrapInBulletList
    },
    {
      type: "button",
      icon: "orderedList",
      key: WrapInOrderedList
    }
  ],
  [
    {
      type: "button",
      icon: "link",
      key: "ToggleLink",
      active: (view) => hasMark(view.state, view.state.schema.marks.link)
    }
  ]
];
