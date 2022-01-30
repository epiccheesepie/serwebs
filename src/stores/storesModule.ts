import { Module } from '../di';
import { ServicesApi } from './ServicesApi';
import { ServicesStore } from './ServicesStore';

export const storesModule = Module.create('storesModule').register(ctx => {
    ctx.addSelfType(ServicesApi)
        .addSelfType(ServicesStore)
});
