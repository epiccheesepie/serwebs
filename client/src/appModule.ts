import { AppViewModel } from './AppViewModel';
import { Module } from './di';
import { modulesModule } from './modules';
import { pagesModule } from './pages';
import { storesModule } from './stores';

export const appModule = Module.create('appModule')
    .register(ctx => {
        ctx.addSelfType(AppViewModel)
    })
    .add(modulesModule)
    .add(storesModule)
    .add(pagesModule)
