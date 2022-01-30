import { injectable } from 'inversify';

import { Category, CategoryId, Service } from '../../models';
import { CategoriesStore, ServicesStore } from '../../stores';

@injectable()
export class LayoutViewModel {
    // eslint-disable-next-line no-useless-constructor
    public constructor(
        private readonly servicesStore: ServicesStore,
        private readonly categoriesStore: CategoriesStore
    ) {

    }

    public get services(): ReadonlyArray<Service> {
        return this.servicesStore.services;
    }

    public getTagsForService(categoryIds: CategoryId[]): Category[] {
        return categoryIds.map(id => this.categoriesStore.getCategory(id));
    }
}
