import { observer } from 'mobx-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/elements';

import { useInject } from '../../hooks';
import { Scrollable } from '../Scrollable';
import { Search } from '../Search';
import { Service } from '../Service';
import { Core } from './Core';
import css from './Layout.module.scss';
import { LayoutViewModel } from './LayoutViewModel';

export const Layout: FC = observer(() => {
  const viewModel = useInject(LayoutViewModel);

    return (
        <Core>
          <Search />
          {viewModel.isMobile && (
            <div className={css.navigation}>
              <Scrollable>
                {viewModel.categories.map(category => (
                  <Link key={category.id} to={`/${category.alias}`} className={css.category}>
                    <Icon type={category.iconType} />
                    <div className={css.categoryName}>
                      {category.name}
                    </div>
                  </Link>
                ))}
                {viewModel.categories.map(category => (
                  <div key={category.id} className={css.category}>{category.name}</div>
                ))}
                {viewModel.categories.map(category => (
                  <div key={category.id} className={css.category}>{category.name}</div>
                ))}
                {viewModel.categories.map(category => (
                  <div key={category.id} className={css.category}>{category.name}</div>
                ))}
              </Scrollable>
            </div>
          )}
          <div className={css.wrapper}>
            {viewModel.services.map((service) => (
              <Service
                key={service.id}
                logo={service.logo}
                background={service.background}
                src={service.src}
                tags={viewModel.getCategoriesForService(service.tags)}
                recommendation={service.recommendation}
                gold={service.gold}
              />
            ))}
          </div>
        </Core>
    );
})
