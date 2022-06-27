// eslint-disable-next-line import/no-unresolved
import { IconType } from 'src/elements/Icon/types';

import { CategoryId } from './CategoryId';

export interface ICategory {
    id: CategoryId;
    alias: string;
    parentId?: CategoryId;
    name: string;
    iconType?: IconType;
    count: number;
    priority: number;
}
