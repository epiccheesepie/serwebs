import { Module } from '../di';
import { layoutModule } from './Layout';
import { leftSideBarModule } from './LeftSideBar';
import { searchModule } from './Search';

export const modulesModule = Module.create('modulesModule')
    .add(layoutModule)
    .add(leftSideBarModule)
    .add(searchModule)
