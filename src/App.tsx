import { observer } from 'mobx-react';
import { FC } from 'react'
import { Route } from 'react-router-dom';

import { useInject } from './hooks';
import { LeftSideBar } from './modules';
import { CategoryPage, HomePage } from './pages';
import { CategoriesStore } from './stores';

export const App: FC = observer(() => {
    const categories = useInject(CategoriesStore).categories;

    return (
        <main>
            <LeftSideBar />
            <Route exact path='/' component={HomePage} />
            {categories.map(({ alias, name }) => {
                return (
                    // eslint-disable-next-line react/jsx-no-bind
                    <Route key={alias} exact path={`/${alias}`} render={(props) => <CategoryPage title={name} {...props} />} />
                );
            }) }
        </main>
    )
})
