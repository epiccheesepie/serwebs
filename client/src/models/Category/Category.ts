import { CategoryId } from './CategoryId';
import { ICategory } from './ICategory';

export class Category {
    // eslint-disable-next-line no-useless-constructor
    public constructor(
        private readonly dto: ICategory
    ) {

    }

    public get id(): CategoryId {
        return this.dto.id;
    }

    public get parentId(): CategoryId | undefined {
        return this.dto.parentId;
    }

    public get iconType(): number {
        const iconType = this.dto.iconType;
        if (!iconType) throw new Error('It is child tag!');
        return iconType;
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

    public get priority(): number {
        return this.dto.priority;
    }
}
