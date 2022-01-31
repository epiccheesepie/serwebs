import { observer } from 'mobx-react';
import { FC } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Search } from 'src/modules/Search';

import { useInject } from '../../hooks';
import { CategoryId } from '../../models';
import { Service } from '../../modules';
// eslint-disable-next-line import/no-internal-modules
import { Core } from '../../modules/Layout';
import css from './CategoryPage.module.scss';
import { CategoryPageViewModel } from './CategoryPageViewModel';

interface Props {
  categoryId: CategoryId;
}

export const CategoryPage: FC<Props> = observer((props) => {
  const { categoryId } = props;

  const viewModel = useInject(CategoryPageViewModel);
  const tree = viewModel.getTree(categoryId);

    return (
        <Core>
          <Search />
          <div className={css.wrapper}>
            {tree.map(child => {
              return (
                <div key={child.categoryId} className={css.child}>
                  <div className={css.category}>{child.categoryName}</div>
                  <div className={css.services}>
                  {child.services.map((service) => (
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
                </div>
              );
            })}
          </div>
        </Core>
    );
})
