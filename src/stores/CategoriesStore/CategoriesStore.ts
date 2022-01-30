import { injectable } from 'inversify';
import { computed, makeObservable, observable } from 'mobx';
// eslint-disable-next-line import/no-unresolved
import { Category, CategoryId, ICategory } from 'src/models/Category';

import { CategoriesApi } from './CategoriesApi';

@injectable()
export class CategoriesStore {
    @observable.ref private _categories: Map<CategoryId, Category> = new Map<CategoryId, Category>();

    public constructor(
        private readonly api: CategoriesApi
    ) {
        makeObservable(this);

        // eslint-disable-next-line no-void
        void this.load();
    }

    private async load(): Promise<void> {
        const categoriesDto = await this.api.fetchCategories() as ICategory[];
        const categories = new Map<CategoryId, Category>();
        categoriesDto.forEach(dto => {
            const category = new Category(dto);
            categories.set(category.id, category);
        });

        this._categories = categories;
    }

    @computed
    public get categories(): ReadonlyArray<Category> {
        return Array.from(this._categories.values()).filter(x => !x.parentId);
    }

    public getCategory(id: CategoryId): Category {
        const category = this._categories.get(id);
        if (!category) throw new Error(`Category with id: ${id} does not exist!`);
        return category;
    }
}
