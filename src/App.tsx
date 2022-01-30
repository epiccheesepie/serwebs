import { observer } from 'mobx-react';
import { FC } from 'react'
import { Route } from 'react-router-dom';

import { useInject } from './hooks';
import { LeftSideBar } from './modules';
import { CategoryPage, HomePage } from './pages';
import { TagsStore } from './stores';

export const App: FC = observer(() => {
    const tags = useInject(TagsStore).tags;

    return (
        <main>
            <LeftSideBar />
            <Route exact path='/' component={HomePage} />
            {tags.map(({ alias, name }) => {
                return (
                    // eslint-disable-next-line react/jsx-no-bind
                    <Route key={alias} exact path={`/${alias}`} render={(props) => <CategoryPage title={name} {...props} />} />
                );
            }) }
        </main>
    )
})
