import React from 'react'
import { render } from 'react-dom'
import { browserHistory, hashHistory,HashRouter, BrowserRouter, Route, IndexRoute,Switch } from 'react-router-dom'

import Index from '../components/index/index.jsx'
import Login from '../components/login/login.jsx'

const routes = [
    {
        path:'/',
        exact: true,
        component:Index
    },
    {
        path:'/pages/index/index',
        exact: false,
        component:Index
    },
    {
        path:'/pages/login/login',
        exact: false,
        component:Login
    }
]

var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const supportsHistory = 'pushState' in window.history;
let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;

const RouteConfig = (
    <Router forceRefresh={!supportsHistory} history={history}>
        <Switch>
                {
                    routes.map((route,index)=>(
                        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                    ))
                }
                <IndexRoute  component={Index} />
        </Switch>
    </Router>
)

export default RouteConfig;