/* eslint-disable import/no-unresolved */
import { FC } from 'react';
import { Navigation } from 'src/modules/Navigation';
import { Search } from 'src/modules/Search';

import { AppViewModel } from '../../../AppViewModel';
import { useInject } from '../../../hooks';
import css from './Header.module.scss';

export const Header: FC = () => {
    const isMobile = useInject(AppViewModel).isMobile;

    return (
        <div className={css.header}>
            <Search />
            {isMobile && <Navigation />}
        </div>
    );
}
