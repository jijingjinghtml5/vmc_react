import React from 'react';
import './App.css';
import route from './Config/Route'; //路由配置
import 'antd-mobile/dist/antd-mobile.css';
import createHashHistory from 'history/createHashHistory'
import createBrowserHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types';

const hashHistory = createHashHistory();
const browserHistory = createBrowserHistory();

var history = process.env.NODE_ENV !== 'production' ?  hashHistory : browserHistory;
class App extends React.Component {
    static childContextTypes = {
        history:PropTypes.object
    }
    getChildContext(){
        return {
            history: history
        }
    }
    render(){
        return (
            <div className="App">
                {route}
            </div>
        );
    }

}

export default App;


