// import clsx from 'clsx';
import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../../elements';
import { useInject } from '../../hooks';
import { CategoriesStore } from '../../stores';
import { Scrollable } from '../Scrollable';
import css from './Navigation.module.scss';

export const Navigation: FC = () => {
    const categories = useInject(CategoriesStore).mainCategories;

    return (
      <div className={css.navigation}>
        <Scrollable className={css.scrollable}>
          <Link to='/' className={css.category}>
            <div className={clsx(css.categoryIcon, css.allIcon)}>
              <Icon type={Icon.Type.DEVELOPER} />
            </div>
            <div className={css.categoryName}>
              Все
            </div>
          </Link>
          {categories.map(category => (
            <Link key={category.id} to={`/${category.alias}`} className={css.category}>
              <div className={css.categoryIcon}>
                <Icon type={category.iconType} />
              </div>
              <div className={css.categoryName}>
                {category.name}
              </div>
            </Link>
          ))}
                    {categories.map(category => (
            <Link key={category.id} to={`/${category.alias}`} className={css.category}>
              <div className={css.categoryIcon}>
                <Icon type={category.iconType} />
              </div>
              <div className={css.categoryName}>
                {category.name}
              </div>
            </Link>
          ))}
          {categories.map(category => (
            <Link key={category.id} to={`/${category.alias}`} className={css.category}>
              <div className={css.categoryIcon}>
                <Icon type={category.iconType} />
              </div>
              <div className={css.categoryName}>
                {category.name}
              </div>
            </Link>
          ))}
        </Scrollable>
      </div>
    );
}
