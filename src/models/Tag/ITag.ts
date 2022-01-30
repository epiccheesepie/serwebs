// eslint-disable-next-line import/no-unresolved
import { IconType } from 'src/elements/Icon/types';

import { TagId } from './TagId';

export interface ITag {
    id: TagId;
    alias: string;
    parentId?: TagId;
    name: string;
    iconType?: IconType;
    count: number;
}
