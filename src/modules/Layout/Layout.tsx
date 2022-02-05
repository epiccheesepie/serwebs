import { observer } from 'mobx-react';
import { FC } from 'react';

import { useInject } from '../../hooks';
import { Service } from '../Service';
import css from './Layout.module.scss';
import { LayoutViewModel } from './LayoutViewModel';

export const Layout: FC = observer(() => {
  const viewModel = useInject(LayoutViewModel);

    if (!viewModel.services.length) {
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
    );
})
