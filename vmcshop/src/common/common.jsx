import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile'
import createHashHistory from 'history/createHashHistory'
import createBrowserHistory from 'history/createBrowserHistory'

const hashHistory = createHashHistory();
const browserHistory = createBrowserHistory();
var history = process.env.NODE_ENV !== 'production' ?  hashHistory : browserHistory;
export class Header extends Component{
        constructor(props){
            super(props)
            this.onLeftClick = this.onLeftClick.bind(this)
        }
        onLeftClick(){
            history.push('/pages/login/login')
        }
        render(){
            return <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.onLeftClick}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >{this.props.title}</NavBar>
        }
}
