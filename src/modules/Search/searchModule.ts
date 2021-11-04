import { Module } from '../../di';
import { SearchViewModel } from './SearchViewModel';

export const searchModule = Module.create('searchModule').register(ctx => {
    ctx.addSelfType(SearchViewModel)
});
