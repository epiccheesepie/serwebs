import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../../../elements';
import css from './LeftSideBarItem.module.scss';

interface Props {
    count: number;
    title: string;
    background: string;
    alias: string;
}

export const LeftSideBarItem: FC<Props> = (props) => {
    const { title, count, background, alias } = props;

    return (
        <Link to={`/${alias}`} key={count} className={css.item}>
            <Icon
                background={background}
                type={Icon.Type.INTERNET}
            />
            <span className={css.title}>{title}</span>
            <span className={css.count}>{count}</span>
        </Link>
    );
}
