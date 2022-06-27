import { observer } from 'mobx-react';
import { FC } from 'react';

import { useInject } from '../../hooks';
import { CategoryId } from '../../models';
import { Service } from '../../modules';
import css from './CategoryPage.module.scss';
import { CategoryPageViewModel } from './CategoryPageViewModel';

interface Props {
  categoryId: CategoryId;
}

export const CategoryPage: FC<Props> = observer((props) => {
  const { categoryId } = props;

  const viewModel = useInject(CategoryPageViewModel);
  const tree = viewModel.getTree(categoryId);

  if (!tree.length) {
    return (
      <div className={css.wrapper}>
        <div className={css.noServices}>
          К сожалению, на данный момент, у меня нет сервисов по вашему запросу :(
        </div>
      </div>
    );
  }

  return (
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
  );
})
