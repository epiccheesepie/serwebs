import { FC, ReactNode } from 'react';

import css from './Core.module.scss';

interface Props {
    children: ReactNode;
}

export const Core: FC<Props> = ({ children }) => {
    return (
        <div className={css.core}>
            {children}
        </div>
    );
}
