import React, { Component } from 'react';
import { NavBar, Icon,TabBar } from 'antd-mobile'
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
            >{this.props.title}</NavBar>
        }
}
Header.contextTypes = {
    history: PropTypes.object
};


export class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            fullScreen:true,
            hidden:false
        }
    }
    render(){
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '50', width: '100%', bottom: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.state.selectedTab === 'index'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'index',
                            });
                            this.context.history.replace('/pages/login/login');
                        }}
                        data-seed="logId"
                    >
                        {/*{this.renderContent('Life')}*/}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'cat'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'cat',
                            });
                            this.context.history.replace('/pages/login/login');
                        }}
                        data-seed="logId1"
                    >
                        {/*{this.renderContent('Koubei')}*/}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'cart'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'cart',
                            });
                            this.context.history.replace('/pages/login/login');
                        }}
                    >
                        {/*{this.renderContent('Friend')}*/}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });
                        }}
                    >
                        {/*{this.renderContent('My')}*/}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
Footer.contextTypes = {
    history: PropTypes.object
};
