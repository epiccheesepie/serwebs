import clsx from 'clsx';
import { FC } from 'react';

import css from './Tag.module.scss';

interface Props {
    name: string;
    className?: string;
}

export const Tag: FC<Props> = (props) => {
    const { name, className } = props;

    return (
        <div className={clsx(css.tag, className)}>
            <span>{name}</span>
        </div>
    );
}
