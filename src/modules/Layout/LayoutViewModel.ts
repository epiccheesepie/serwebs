import { injectable } from 'inversify';

import { Service, Tag, TagId } from '../../models';
import { ServicesStore, TagsStore } from '../../stores';

@injectable()
export class LayoutViewModel {
    // eslint-disable-next-line no-useless-constructor
    public constructor(
        private readonly servicesStore: ServicesStore,
        private readonly tagsStore: TagsStore
    ) {

    }

    public get services(): ReadonlyArray<Service> {
        return this.servicesStore.services;
    }

    public getTagsForService(tagIds: TagId[]): Tag[] {
        return tagIds.map(id => this.tagsStore.getTag(id));
    }
}
