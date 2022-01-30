import { observer } from 'mobx-react';
import { FC } from 'react';

import { useInject } from '../../hooks';
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
          <div className={css.wrapper}>
            {viewModel.services.map((service) => (
              <Service
                key={service.id}
                logoImgSrc={service.logo}
                background={service.background}
                src={service.src}
                tags={viewModel.getTagsForService(service.tags)}
                recommendation={service.recommendation}
                common={service.gold}
              />
            ))}
          </div>
        </Core>
    );
})
