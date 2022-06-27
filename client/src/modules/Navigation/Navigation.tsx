/* eslint-disable react/jsx-no-bind */
import clsx from 'clsx';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Icon } from '../../elements';
import { useInject } from '../../hooks';
import { CategoriesStore } from '../../stores';
import { Scrollable } from '../Scrollable';
import css from './Navigation.module.scss';

export const Navigation: FC = () => {
    const categories = useInject(CategoriesStore).mainCategories;

    const activeUrl = useLocation().pathname;

    return (
      <div className={css.navigation}>
        <Scrollable className={css.scrollable}>
          <NavLink to='/' className={clsx(css.category, { [css.active]: activeUrl === '/' })}>
            <div className={clsx(css.categoryIcon, css.allIcon)}>
              <Icon type={Icon.Type.ALL} />
            </div>
            <div className={css.categoryName}>
              Все
            </div>
          </NavLink>
          {categories.map(category => (
            <NavLink activeClassName={css.active} key={category.id} to={`/${category.alias}`} className={css.category}>
              <div className={css.categoryIcon}>
                <Icon type={category.iconType} />
              </div>
              <div className={css.categoryName}>
                {category.name}
              </div>
            </NavLink>
          ))}
        </Scrollable>
      </div>
    );
}
