import { Module } from '../di';
import { CategoriesApi, CategoriesStore } from './CategoriesStore';
import { ServicesApi, ServicesStore } from './ServicesStore';

export const storesModule = Module.create('storesModule').register(ctx => {
    ctx
        .addSelfType(ServicesApi)
        .addSelfType(ServicesStore)
        .addSelfType(CategoriesApi)
        .addSelfType(CategoriesStore)
});
