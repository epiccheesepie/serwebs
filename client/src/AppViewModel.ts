import { injectable } from 'inversify';
import { action, computed, makeObservable, observable } from 'mobx';

import { Category } from './models';
import { CategoriesStore, ServicesStore } from './stores';

@injectable()
export class AppViewModel {
    @observable
    private _isMobile = false;

    public constructor(
        private readonly categoriesStore: CategoriesStore,
        private readonly servicesStore: ServicesStore,
    ) {
        makeObservable(this);

        this.updateDimensions();
        window.onresize = this.updateDimensions;
    }

    @computed
    public get loading(): boolean {
        return !this.categoriesStore.ready || !this.servicesStore.ready;
    }

    @computed
    public get categories(): ReadonlyArray<Category> {
        return this.categoriesStore.mainCategories;
    }

    @computed
    public get isMobile(): boolean {
        return this._isMobile;
    }

    @action
    public updateDimensions = (): void => {
        const width = window.innerWidth;
        if (width < 640) {
            this._isMobile = true;
        } else {
            this._isMobile = false;
        }
    };
}
