import { ReactElement } from 'react';

import { TagId } from './TagId';

export interface ITag {
    id: TagId;
    parentId?: TagId;
    name: string;
    icon: ReactElement;
}
