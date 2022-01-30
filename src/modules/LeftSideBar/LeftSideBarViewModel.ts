import { injectable } from 'inversify';
import { computed } from 'mobx';

import { Category, CategoryId } from '../../models';
import { CategoriesStore, ServicesStore } from '../../stores';

@injectable()
export class LeftSideBarViewModel {
    // eslint-disable-next-line no-useless-constructor
    public constructor(
        private readonly servicesStore: ServicesStore,
        private readonly categoriesStore: CategoriesStore
    ) {

    }

    @computed
    public get tags(): ReadonlyArray<Category> {
        return this.categoriesStore.mainCategories;
    }

    public getCount(id: CategoryId): number {
        return this.servicesStore.services.filter(service => service.tags.includes(id)).length;
    }
}
