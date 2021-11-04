import { FC } from 'react';

import { Icon } from '../../../entities';
import css from './LeftSideBarItem.module.scss';

interface Props {
    count: number;
    title: string;
    background: string;
}

export const LeftSideBarItem: FC<Props> = (props) => {
    const { title, count, background } = props;

    return (
        <div key={count} className={css.item}>
            <Icon
                background={background}
                type={Icon.Type.INTERNET}
            />
            <span className={css.title}>{title}</span>
            <span className={css.count}>{count}</span>
        </div>
    );
}
