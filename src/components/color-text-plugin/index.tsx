/* Copyright 2021, Milkdown by Mirone. */
import { AtomList } from '@milkdown/utils';

import { textColorNode } from './node.tsx';
export * from './node.tsx';

export const colorText = AtomList.create([textColorNode()]);
