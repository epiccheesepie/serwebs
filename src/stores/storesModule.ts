import { Module } from '../di';
import { ServicesApi, ServicesStore } from './ServicesStore';
import { CategoriesApi, CategoriesStore } from './CategoriesStore';

export const storesModule = Module.create('storesModule').register(ctx => {
    ctx
        .addSelfType(ServicesApi)
        .addSelfType(ServicesStore)
        .addSelfType(CategoriesApi)
        .addSelfType(CategoriesStore)
});
