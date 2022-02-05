import { observer } from 'mobx-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Icon } from 'src/elements';

import { useInject } from '../../hooks';
import css from './LeftSideBar.module.scss';
import { LeftSideBarItem } from './LeftSideBarItem';
import { LeftSideBarViewModel } from './LeftSideBarViewModel';

export const LeftSideBar: FC = observer(() => {
    const viewModel = useInject(LeftSideBarViewModel);

    return (
        <div className={css.wrapper}>
            <div className={css.content}>
                <Link to='/' className={css.logo}>
                    <img src="/white.png" alt="logo" />
                </Link>
                <div className={css.menu}>
                    <LeftSideBarItem
                        title="Все"
                        count={viewModel.amount}
                        alias=""
                        iconType={Icon.Type.INTERNET}
                        iconClassName={css.allIcon}
                    />
                    {viewModel.tags.map((item, index) => (
                        <LeftSideBarItem
                            key={String(index)}
                            title={item.name}
                            count={viewModel.getCount(item.id)}
                            alias={item.alias}
                            iconType={item.iconType}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
})
