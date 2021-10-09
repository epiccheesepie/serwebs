import { FC } from 'react';

import css from './Layout.module.scss';

export const Layout: FC = () => {
    return (
      <div className={css.layout}>
        <div className={css.core} />
      </div>
    );
}
