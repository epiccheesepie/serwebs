import { Module } from '../di';
import { layoutModule } from './Layout';
import { searchModule } from './Search';

export const modulesModule = Module.create('modulesModule')
    .add(searchModule)
    .add(layoutModule);
