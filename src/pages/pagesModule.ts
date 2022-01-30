import { Module } from '../di';
import { CategoryPageViewModel } from './CategoryPage';

export const pagesModule = Module.create('pagesModule').register(ctx => {
    ctx
        .addSelfTypeTransient(CategoryPageViewModel)
});
