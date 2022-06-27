import { Module } from '../../di';
import { LayoutViewModel } from './LayoutViewModel';

export const layoutModule = Module.create('layoutModule').register(ctx => {
    ctx.addSelfType(LayoutViewModel)
});
