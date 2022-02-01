import { observer } from 'mobx-react';
import { FC } from 'react'
import { Route } from 'react-router-dom';

import { AppViewModel } from './AppViewModel';
import { useInject } from './hooks';
import { LeftSideBar } from './modules';
import { CategoryPage, HomePage } from './pages';

export const App: FC = observer(() => {
    const viewModel = useInject(AppViewModel);

    return (
        <main>
            {!viewModel.isMobile && <LeftSideBar />}
            <Route exact path='/' component={HomePage} />
            {viewModel.categories.map(({ alias, id }) => {
                return (
                    // eslint-disable-next-line react/jsx-no-bind
                    <Route key={alias} exact path={`/${alias}`} render={(props) => <CategoryPage categoryId={id} {...props} />} />
                );
            }) }
        </main>
    )
})
