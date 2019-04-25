import React from 'react'
import Loadable from "react-loadable"

let config = [
    {
        name: '/',
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import('../components/FirstChoicePage'),
            loading: () => <div>Loading</div>
        })
    },
    {
        name: '/Xmjs',
        path: '/Xmjs',
        exact: true,
        component: Loadable({
            loader: () => import('../components/Xmjs'),
            loading: () => <div>Loading</div>
        })
    },
    {
        name: '/Qwzs',
        path: '/Qwzs',
        exact: true,
        component: Loadable({
            loader: () => import('../components/Qwzs'),
            loading: () => <div>Loading</div>
        })
    },
    {
        name: '/Jghx',
        path: '/Jghx',
        exact: true,
        component: Loadable({
            loader: () => import('../components/Jghx'),
            loading: () => <div>Loading</div>
        })
    },
    {
        name: '/Jgzx',
        path: '/Jgzx',
        exact: true,
        component: Loadable({
            loader: () => import('../components/Jgzx'),
            loading: () => <div>Loading</div>
        })
    },
]

export default config