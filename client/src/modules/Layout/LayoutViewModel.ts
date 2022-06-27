import { injectable } from 'inversify';
import { computed } from 'mobx';

import { AppViewModel } from '../../AppViewModel';
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
        private readonly searchModule: SearchViewModel,
        private readonly appModule: AppViewModel
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

    @computed
    public get categories(): ReadonlyArray<Category> {
        return this.categoriesStore.mainCategories;
    }

    public getCategoriesForService(categoryIds: CategoryId[]): Category[] {
        const categories = categoryIds
          .map(id => this.categoriesStore.getCategory(id))
          .sort(sortCategories);
        return this.appModule.isMobile
          ? categories.slice(0, 1)
          : categories;
    }
}

function sortCategories(a: Category, b: Category) {
    return b.priority - a.priority;
}
