import { ITag } from './ITag';
import { TagId } from './TagId';

export class Tag {
    // eslint-disable-next-line no-useless-constructor
    public constructor(
        private readonly dto: ITag
    ) {

    }

    public get id(): TagId {
        return this.dto.id;
    }

    public get parentId(): TagId | undefined {
        return this.dto.parentId;
    }

    public get icon(): string {
        return this.icon;
    }

    public get count(): number {
        return this.dto.count;
    }

    public get name(): string {
        return this.dto.name;
    }

    public get alias(): string {
        return this.dto.alias;
    }
}
