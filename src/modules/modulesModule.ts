import { Module } from '../di';
import { searchModule } from './Search';

export const modulesModule = Module.create('modulesModule')
    .add(searchModule);
