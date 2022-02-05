import clsx from 'clsx';
import { FC } from 'react';

import css from './Scrollable.module.scss';

interface Props {
    className?: string;
}

export const Scrollable: FC<Props> = (props) => {
    const { className, children } = props;

    return (
        <div className={css.wrapper}>
            <div className={clsx(css.scrollable, className)}>
                {children}
            </div>
        </div>
    );
}
