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

    public getCategoriesForService(categoryIds: CategoryId[]): Category[] {
        const categories = categoryIds.map(id => this.categoriesStore.getCategory(id));
        if (!this.appModule.isMobile) {
            return categories;
        } else {
            const mainCategory = categories.find(x => !x.parentId);
            if (!mainCategory) throw new Error('Category must be defined!');
            return [mainCategory];
        }
    }
}
