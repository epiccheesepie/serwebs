/* eslint-disable import/no-unresolved */
import { injectable } from 'inversify';
import { Category, CategoryId, Service } from 'src/models';
import { SearchViewModel } from 'src/modules/Search';
import { CategoriesStore, ServicesStore } from 'src/stores';

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

    private getFilteredServices(id: CategoryId): Service[] {
        const services = this.servicesStore.getServices(id);

        if (!this.searchModule.searchIsActive) return services;

        const words = this.searchModule.searchQuery.toLowerCase().trim().split(' ');
        const servicesByName = services.filter(service => {
            return words.every(word => service.title.toLowerCase().indexOf(word, 0) >= 0);
        });

        const queryCategoryIds = this.categoriesStore.categories.filter(category => {
            return words.every(word => category.name.toLowerCase().indexOf(word) >= 0);
        }).map(x => x.id);
        const servicesByCategory = services.filter(service => {
            return queryCategoryIds.some(id => service.tags.includes(id));
        });

        if (servicesByName.length && !servicesByCategory.length) return servicesByName;
        else if (!servicesByName.length && servicesByCategory.length) return servicesByCategory;
        else if (servicesByName.length && servicesByCategory.length) return Array.from(new Set([...servicesByName, ...servicesByCategory]));

        return [];
    }

    public getTree(id: CategoryId): ChildServices[] {
        const childs = this.categoriesStore.getChilds(id);

        if (!childs.length) {
            const category = this.categoriesStore.getCategory(id);
            return [{
                categoryName: category.name,
                categoryId: id,
                services: this.getFilteredServices(id)
            }]
        }

        return childs.map(child => {
            return {
                categoryName: child.name,
                categoryId: child.id,
                services: this.getFilteredServices(child.id)
            };
        })
    }

    public getCategoriesForService(categoryIds: CategoryId[]): Category[] {
        return categoryIds.map(id => this.categoriesStore.getCategory(id));
    }
}
