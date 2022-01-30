import { TagId } from './TagId';

export interface ITag {
    id: TagId;
    alias: string;
    parentId?: TagId;
    name: string;
    icon: string;
    count: number;
}
