import { injectable } from 'inversify';
import { computed } from 'mobx';

import { Tag, TagId } from '../../models';
import { ServicesStore, TagsStore } from '../../stores';

@injectable()
export class LeftSideBarViewModel {
    // eslint-disable-next-line no-useless-constructor
    public constructor(
        private readonly servicesStore: ServicesStore,
        private readonly tagsStore: TagsStore
    ) {

    }

    @computed
    public get tags(): ReadonlyArray<Tag> {
        return this.tagsStore.tags;
    }

    public getCount(id: TagId): number {
        return this.servicesStore.services.filter(service => service.tags.includes(id)).length;
    }
}
