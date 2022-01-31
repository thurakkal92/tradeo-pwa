import Home from 'pages/home'
import Trades from 'pages/trades'
import TradesPage from 'pages/trades'

export default [
    {
        path: `/`,
        element: <Home />,
        exact: true
    },
    {
        path: `/trade/:symbol`,
        element: <Trades />,
        exact: true
    },
]