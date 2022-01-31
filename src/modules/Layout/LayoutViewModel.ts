import { injectable } from 'inversify';
import { computed } from 'mobx';

import { Category, CategoryId, Service } from '../../models';
import { CategoriesStore, ServicesStore } from '../../stores';
import { getFilteredServices } from '../../utils';
import { SearchViewModel } from '../Search';

@injectable()
export class LayoutViewModel {
    // eslint-disable-next-line no-useless-constructor
    public constructor(
        private readonly servicesStore: ServicesStore,
        private readonly categoriesStore: CategoriesStore,
        private readonly searchModule: SearchViewModel
    ) {
    }

    @computed
    public get services(): ReadonlyArray<Service> {
        if (!this.searchModule.searchIsActive) return this.servicesStore.services;

        return getFilteredServices(
            this.searchModule.searchQuery,
            this.categoriesStore.categories,
            this.servicesStore.services
        );
    }

    public getCategoriesForService(categoryIds: CategoryId[]): Category[] {
        return categoryIds.map(id => this.categoriesStore.getCategory(id));
    }
}
