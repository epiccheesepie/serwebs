import clsx from 'clsx';
import { observer } from 'mobx-react';
import { FC, ReactNode } from 'react';

import { AppViewModel } from '../../../AppViewModel';
import { useInject } from '../../../hooks';
import css from './Core.module.scss';

interface Props {
    children: ReactNode;
}

export const Core: FC<Props> = observer(({ children }) => {
    const isMobile = useInject(AppViewModel).isMobile;

    return (
        <div className={clsx(css.core, { [css.mobile]: isMobile })}>
            {children}
        </div>
    );
});
