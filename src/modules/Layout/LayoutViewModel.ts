import { injectable } from 'inversify';
import { computed } from 'mobx';

import { Category, CategoryId, Service } from '../../models';
import { CategoriesStore, ServicesStore } from '../../stores';
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
    private get services(): ReadonlyArray<Service> {
        return this.servicesStore.services;
    }

    @computed
    public get filteredServices(): ReadonlyArray<Service> {
        if (!this.searchModule.searchIsActive) return this.services;

        const words = this.searchModule.searchQuery.toLowerCase().trim().split(' ');

        const servicesByName = this.services.filter(service => {
            return words.every(word => service.title.toLowerCase().indexOf(word, 0) >= 0);
        });

        const queryCategoryIds = this.categoriesStore.categories.filter(category => {
            return words.every(word => category.name.toLowerCase().indexOf(word) >= 0);
        }).map(x => x.id);
        const servicesByCategory = this.servicesStore.services.filter(service => {
            return queryCategoryIds.some(id => service.tags.includes(id));
        });

        if (servicesByName.length && !servicesByCategory.length) return servicesByName;
        else if (!servicesByName.length && servicesByCategory.length) return servicesByCategory;
        else if (servicesByName.length && servicesByCategory.length) return Array.from(new Set([...servicesByName, ...servicesByCategory]));

        return [];
    }

    public getCategoriesForService(categoryIds: CategoryId[]): Category[] {
        return categoryIds.map(id => this.categoriesStore.getCategory(id));
    }
}
