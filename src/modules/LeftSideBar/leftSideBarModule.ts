import { Module } from '../../di';
import { LeftSideBarViewModel } from './LeftSideBarViewModel';

export const leftSideBarModule = Module.create('leftSideBarModule').register(ctx => {
    ctx.addSelfType(LeftSideBarViewModel)
});
