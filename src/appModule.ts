import { Module } from './di';
import { modulesModule } from './modules';
import { storesModule } from './stores';

export const appModule = Module.create('appModule')
    .add(modulesModule)
    .add(storesModule)
