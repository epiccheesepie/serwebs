import { FC } from 'react'

import { Layout, LeftSideBar } from './modules'

export const App: FC = () => {
    return (
        <main>
            <LeftSideBar />
            <Layout />
        </main>
    )
}
