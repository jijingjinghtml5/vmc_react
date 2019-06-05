import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile'
import PropTypes from 'prop-types'
// import createHashHistory from 'history/createHashHistory'
// import createBrowserHistory from 'history/createBrowserHistory'
//
// const hashHistory = createHashHistory();
// const browserHistory = createBrowserHistory();
// var history = process.env.NODE_ENV !== 'production' ?  hashHistory : browserHistory;
export class Header extends Component{
        constructor(props){
            super(props)
            this.onLeftClick = this.onLeftClick.bind(this);


        }
        onLeftClick(){
            // history.push('/pages/login/login')
            if(this.props.isBack===false) return;
            this.context.history.goBack();
        }
        componentDidMount(){
            this.setState({...this.props});
        }
        render(){
            return <NavBar
                mode="light"
                icon={this.props.isBack===false?false:<Icon type="left" />}
                onLeftClick={this.onLeftClick}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >{this.props.title}</NavBar>
        }
}
Header.contextTypes = {
    history: PropTypes.object
};