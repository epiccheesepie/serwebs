import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { IconType } from 'src/elements/Icon/types';

import { Icon } from '../../../elements';
import css from './LeftSideBarItem.module.scss';

interface Props {
    count: number;
    title: string;
    alias: string;
    iconType: IconType;
    iconClassName?: string;
}

export const LeftSideBarItem: FC<Props> = (props) => {
    const { title, count, alias, iconType, iconClassName } = props;

    return (
        <Link to={`/${alias}`} key={count} className={css.item}>
            <div className={clsx(css.icon, iconClassName)}>
                <Icon
                    type={iconType}
                />
            </div>
            <span className={css.title}>{title}</span>
            <span className={css.count}>{count}</span>
        </Link>
    );
}
