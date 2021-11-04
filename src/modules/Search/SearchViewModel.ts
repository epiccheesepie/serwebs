import { injectable } from 'inversify';
import { action, computed, makeObservable, observable } from 'mobx';

@injectable()
export class SearchViewModel {
    @observable private _searchQuery = '';

    public constructor() {
        makeObservable(this);
    }

    @computed
    public get searchQuery(): string {
        return this._searchQuery;
    }

    @action
    public setSearchQuery = (query: string): void => {
        this._searchQuery = query;
    }
}
