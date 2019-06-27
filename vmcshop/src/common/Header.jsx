import React, { Component } from 'react';
import { NavBar, Icon,TabBar } from 'antd-mobile'
import PropTypes from 'prop-types'
// import createHashHistory from 'history/createHashHistory'
// import createBrowserHistory from 'history/createBrowserHistory'
//
// const hashHistory = createHashHistory();
// const browserHistory = createBrowserHistory();
// var history = process.env.NODE_ENV !== 'production' ?  hashHistory : browserHistory;
export default class Header extends Component{
        constructor(props){
            super(props)
            this.onLeftClick = this.onLeftClick.bind(this);


        }
        onLeftClick(){
            if(this.props.isBack===false) return;
            this.context.history.goBack();
        }
        componentDidMount(){
            this.setState({...this.props});
        }
        render(){
            return (
                <div className={'App-header'}>
                    <NavBar
                        mode="light"
                        icon={this.props.isBack===false?false:<Icon type="left" />}
                        onLeftClick={this.onLeftClick}
                    >{this.props.title}</NavBar>
                    <div className={'rare-header'}></div>
                </div>
            )
        }
}
Header.contextTypes = {
    history: PropTypes.object
};

