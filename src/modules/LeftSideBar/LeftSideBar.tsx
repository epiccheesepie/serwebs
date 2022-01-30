import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useInject } from '../../hooks';
import { TagsStore } from '../../stores';
import css from './LeftSideBar.module.scss';
import { LeftSideBarItem } from './LeftSideBarItem';

export const LeftSideBar: FC = () => {
    const tags = useInject(TagsStore).tags;

    return (
        <div className={css.wrapper}>
            <div className={css.content}>
                <Link to='/' className={css.logo}>
                    <img src="/white.png" alt="logo" />
                </Link>
                <div className={css.menu}>
                    {tags.map((item, index) => (
                        <LeftSideBarItem
                            key={String(index)}
                            title={item.name}
                            count={item.count}
                            alias={item.alias}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
