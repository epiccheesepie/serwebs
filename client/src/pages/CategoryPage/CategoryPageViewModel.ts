/* eslint-disable import/no-unresolved */
import { injectable } from 'inversify';
import { computed } from 'mobx';
import { Category, CategoryId, Service } from 'src/models';
import { SearchViewModel } from 'src/modules/Search';
import { CategoriesStore, ServicesStore } from 'src/stores';

import { AppViewModel } from '../../AppViewModel';
import { getFilteredServicesByCategory } from '../../utils';

interface ChildServices {
    categoryName: string;
    categoryId: CategoryId;
    services: Service[]
}

@injectable()
export class CategoryPageViewModel {
    // eslint-disable-next-line no-useless-constructor
    public constructor(
        private readonly servicesStore: ServicesStore,
        private readonly categoriesStore: CategoriesStore,
        private readonly searchModule: SearchViewModel,
        private readonly appModule: AppViewModel
    ) {
    }

    @computed
    public get isMobile(): boolean {
        return this.appModule.isMobile;
    }

    private getServices(id: CategoryId): Service[] {
        const services = this.servicesStore.getServices(id);

        if (!this.searchModule.searchIsActive) return services;

        return getFilteredServicesByCategory(
            this.searchModule.searchQuery,
            id,
            this.servicesStore.services
        );
    }

    public getTree(id: CategoryId): ChildServices[] {
        const childs = this.categoriesStore.getChilds(id);

        if (!childs.length) {
            const category = this.categoriesStore.getCategory(id);
            return [{
                categoryName: category.name,
                categoryId: id,
                services: this.getServices(id)
            }].filter(child => child.services.length);
        }

        return childs.map(child => {
            return {
                categoryName: child.name,
                categoryId: child.id,
                services: this.getServices(child.id)
            };
        }).filter(child => child.services.length);
    }

    public getCategoriesForService(categoryIds: CategoryId[]): Category[] {
        const categories = categoryIds
        .map(id => this.categoriesStore.getCategory(id))
        .sort(sortCategories);
      return this.isMobile
        ? categories.slice(0, 1)
        : categories;
    }
}

function sortCategories(a: Category, b: Category) {
    return b.priority - a.priority;
}
