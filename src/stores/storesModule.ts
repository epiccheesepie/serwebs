import { Module } from '../di';
import { ServicesApi, ServicesStore } from './ServicesStore';
import { TagsApi, TagsStore } from './TagsStore';

export const storesModule = Module.create('storesModule').register(ctx => {
    ctx
        .addSelfType(ServicesApi)
        .addSelfType(ServicesStore)
        .addSelfType(TagsApi)
        .addSelfType(TagsStore)
});
