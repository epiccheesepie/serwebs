/* eslint-disable import/no-unresolved */
import { injectable } from 'inversify';
import { Category, CategoryId, Service } from 'src/models';
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
        private readonly categoriesStore: CategoriesStore
    ) {
    }

    public getTree(id: CategoryId): ChildServices[] {
        const childs = this.categoriesStore.getChilds(id);
        return childs.map(child => {
            const services = this.servicesStore.getServices([id, child.id]);
            return {
                categoryName: child.name,
                categoryId: child.id,
                services: services
            };
        })
    }

    public getCategoriesForService(categoryIds: CategoryId[]): Category[] {
        return categoryIds.map(id => this.categoriesStore.getCategory(id));
    }
}
