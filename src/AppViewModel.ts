import { injectable } from 'inversify';
import { action, computed, makeObservable, observable } from 'mobx';

import { Category } from './models';
import { CategoriesStore } from './stores';

@injectable()
export class AppViewModel {
    @observable
    private _isMobile = false;

    public constructor(
        private readonly categoriesStore: CategoriesStore,
    ) {
        makeObservable(this);

        this.updateDimensions();
        window.onresize = this.updateDimensions;
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
        if (width < 960) {
            this._isMobile = true;
        } else {
            this._isMobile = false;
        }
    };
}
