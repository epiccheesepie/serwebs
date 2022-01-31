import { injectable } from 'inversify';
import { action, computed, makeObservable, observable } from 'mobx';

import { Category, CategoryId, Service } from '../../models';
import { CategoriesStore, ServicesStore } from '../../stores';

@injectable()
export class LayoutViewModel {
    @observable
    private _searchQuery = '';

    public constructor(
        private readonly servicesStore: ServicesStore,
        private readonly categoriesStore: CategoriesStore
    ) {
        makeObservable(this);
    }

    @computed
    public get searchIsActive(): boolean {
        return this.searchQuery.trim().length > 2;
    }

    @computed
    public get searchQuery(): string {
        return this._searchQuery;
    }

    @computed
    private get services(): ReadonlyArray<Service> {
        return this.servicesStore.services;
    }

    @computed
    public get filteredServices(): ReadonlyArray<Service> {
        if (!this.searchIsActive) return this.services;

        const words = this.searchQuery.toLowerCase().trim().split(' ');

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

    @action
    public setSearchQuery = (query: string): void => {
        this._searchQuery = query;
    }

    public getCategoriesForService(categoryIds: CategoryId[]): Category[] {
        return categoryIds.map(id => this.categoriesStore.getCategory(id));
    }
}
