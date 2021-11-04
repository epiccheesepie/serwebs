import { FC } from 'react';
import { Link } from 'react-router-dom';

import { categories } from '../../entities';
import css from './LeftSideBar.module.scss';
import { LeftSideBarItem } from './LeftSideBarItem';

export const LeftSideBar: FC = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.content}>
                <Link to='/' className={css.logo}>
                    <img src="/main.png" alt="logo" />
                </Link>
                <div className={css.menu}>
                    {categories.map((item, index) => (
                        <LeftSideBarItem
                            key={String(index)}
                            title={item.title}
                            count={item.count}
                            background={item.background}
                            alias={item.alias}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
