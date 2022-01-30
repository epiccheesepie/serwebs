import { injectable } from 'inversify';
import { computed, makeObservable, observable } from 'mobx';
// eslint-disable-next-line import/no-unresolved
import { ITag, Tag, TagId } from 'src/models/Tag';

import { TagsApi } from './TagsApi';

@injectable()
export class TagsStore {
    @observable.ref private _tags: Map<TagId, Tag> = new Map<TagId, Tag>();

    public constructor(
        private readonly api: TagsApi
    ) {
        makeObservable(this);

        // eslint-disable-next-line no-void
        void this.load();
    }

    private async load(): Promise<void> {
        const tagsDto = await this.api.fetchTags() as ITag[];
        const tags = new Map<TagId, Tag>();
        tagsDto.forEach(dto => {
            const tag = new Tag(dto);
            tags.set(tag.id, tag);
        });

        this._tags = tags;
    }

    @computed
    public get tags(): ReadonlyArray<Tag> {
        return Array.from(this._tags.values());
    }

    public getTag(id: TagId): Tag {
        const tag = this._tags.get(id);
        if (!tag) throw new Error(`Tag with id: ${id} does not exist!`);
        return tag;
    }
}
