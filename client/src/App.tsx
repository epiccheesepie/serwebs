import { observer } from 'mobx-react';
import { FC } from 'react'
import { Route } from 'react-router-dom';

import { AppViewModel } from './AppViewModel';
import { useInject } from './hooks';
import { Core, LeftSideBar } from './modules';
import { CategoryPage, HomePage } from './pages';

export const App: FC = observer(() => {
    const viewModel = useInject(AppViewModel);

    if (viewModel.loading) {
        return (
            <main>
                <div className='loaderWrapper'>
                    <div className='loader' />
                </div>
            </main>
        );
    }

    return (
        <main>
            {!viewModel.isMobile && <LeftSideBar />}
            <Core>
            <Route exact path='/' component={HomePage} />
                {viewModel.categories.map(({ alias, id }) => {
                    return (
                        // eslint-disable-next-line react/jsx-no-bind
                        <Route key={alias} exact path={`/${alias}`} render={(props) => <CategoryPage categoryId={id} {...props} />} />
                    );
                }) }
            </Core>
        </main>
    )
})
