import { observer } from 'mobx-react';
import { FC } from 'react';

import { useInject } from '../../hooks';
import { ServicesStore } from '../../stores';
import { Search } from '../Search';
import { Service } from '../Service';
import { Core } from './Core';
import css from './Layout.module.scss';

export const Layout: FC = observer(() => {
  const services = useInject(ServicesStore).services;

    return (
        <Core>
          <Search />
          <div className={css.wrapper}>
            {services.map((service, index) => (
              <Service
                key={String(index)}
                logoImgSrc={service.logo}
                background={service.background}
                src={service.src}
                recommendation={service.recommendation}
                common={service.gold}
              />
            ))}
          </div>
        </Core>
    );
})
