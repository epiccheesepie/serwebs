/* eslint-disable import/no-unresolved */
import { injectable } from 'inversify';
import { Category, CategoryId, Service } from 'src/models';
import { SearchViewModel } from 'src/modules/Search';
import { CategoriesStore, ServicesStore } from 'src/stores';

import { getFilteredServices } from '../../utils';

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
        private readonly searchModule: SearchViewModel
    ) {
    }

    private getServices(id: CategoryId): Service[] {
        const services = this.servicesStore.getServices(id);

        if (!this.searchModule.searchIsActive) return services;

        return getFilteredServices(
            this.searchModule.searchQuery,
            this.categoriesStore.categories,
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
            }]
        }

        return childs.map(child => {
            return {
                categoryName: child.name,
                categoryId: child.id,
                services: this.getServices(child.id)
            };
        })
    }

    public getCategoriesForService(categoryIds: CategoryId[]): Category[] {
        return categoryIds.map(id => this.categoriesStore.getCategory(id));
    }
}
