import { observer } from 'mobx-react';
import { FC, ReactNode } from 'react';

import css from './Core.module.scss';
import { Header } from './Header';

interface Props {
    children: ReactNode;
}

export const Core: FC<Props> = observer(({ children }) => {
    return (
        <div className={css.core}>
            <Header />
            {children}
        </div>
    );
});
