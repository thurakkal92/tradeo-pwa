import Home from 'pages/home'

export default [
    {
        path: `/`,
        element: <Home />,
        exact: true
    },
    {
        path: `/trade/:pair`,
        element: <Home />,
        exact: true
    },
]