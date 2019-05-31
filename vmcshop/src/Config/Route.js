import React from 'react'
import { Route,Switch,Router,Redirect } from 'react-router'
import getComponent from '../common/getComponent'
import createHashHistory from 'history/createHashHistory'
import createBrowserHistory from 'history/createBrowserHistory'

const hashHistory = createHashHistory();
const browserHistory = createBrowserHistory();

const routes = [
    {
        path:'/',
        exact: true,
        component:(props) => getComponent(props, () => import('../components/index/index'))
    },
    {
        path:'/pages/index/index',
        exact: false,
        component:(props) => getComponent(props, () => import('../components/index/index'))
    },
    {
        path:'/pages/login/login',
        exact: false,
        component:(props) => getComponent(props, () => import('../components/login/login'))
    }
]

var history = process.env.NODE_ENV !== 'production' ?  hashHistory : browserHistory;
const supportsHistory = 'pushState' in window.history;
// let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;

const RouteConfig = (
    <Router forceRefresh={!supportsHistory} history={history}>
        <Switch>
                {
                    routes.map((route,index)=>(
                        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                    ))
                }
                <Redirect from='' to="/" />
        </Switch>
    </Router>
)

export default RouteConfig;