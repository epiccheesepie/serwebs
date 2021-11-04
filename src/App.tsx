import { FC } from 'react'
import { Route } from 'react-router-dom';

import { categories } from './entities';
import { LeftSideBar } from './modules';
import { CategoryPage, HomePage } from './pages';

export const App: FC = () => {
    return (
        <main>
            <LeftSideBar />
            <Route exact path='/' component={HomePage} />
            {categories.map(({ alias, title }) => {
                return (
                    // eslint-disable-next-line react/jsx-no-bind
                    <Route key={alias} exact path={`/${alias}`} render={(props) => <CategoryPage title={title} {...props} />} />
                );
            }) }
        </main>
    )
}
