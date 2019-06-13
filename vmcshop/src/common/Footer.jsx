import React, { Component } from 'react';
import { NavBar, Icon,TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTab } from '../store/common_action';
import store from '../Config/Store';


class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            fullScreen:true,
            hidden:false
        }
        console.log(this.props);
        Footer._this = this;
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
                        title="首页"
                        key="index"
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
                        selected={this.props.selectedTab === 'index'}
                        badge={1}
                        onPress={(type='index') => {
                            this.props.onClick(type);
                            // if(this.props.selectedTab === 'index') return;
                            // store.dispatch(changeTab('index'));
                            // console.log(store.getState());
                            // this.context.history.replace('/pages/index/index');
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
                        title="分类"
                        key="cat"
                        //badge={'new'}
                        selected={this.props.selectedTab === 'cat'}
                        onPress={(type='cat') => {
                            this.props.onClick(type);
                            // if(this.props.selectedTab === 'cat') return;
                            // store.dispatch(changeTab('cat'));
                            // console.log(store.getState());
                            // this.context.history.replace('/pages/cat/index');
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
                        title="购物车"
                        key="cart"
                        dot
                        selected={this.props.selectedTab === 'cart'}
                        onPress={(type='cart') => {
                            this.props.onClick(type);
                            // if(this.props.selectedTab === 'cart') return;
                            // // store.dispatch(changeTab('cart'));
                            // console.log(store.getState());
                            // this.context.history.replace('/pages/cart/index');
                        }}
                    >
                        {/*{this.renderContent('Friend')}*/}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="我的"
                        key="my"
                        selected={this.props.selectedTab === 'my'}
                        onPress={(type='my') => {
                            this.props.onClick(type);
                            // if(this.props.selectedTab === 'my') return;
                            //store.dispatch(changeTab('my'));
                            // console.log(store.getState());
                            // this.context.history.replace('/pages/my/index');
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

const mapStateToProps = state => ({
  current: state.currentTab
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (type) => {
    if(Footer._this.props.selectedTab === type) return;
    dispatch(changeTab(type))
    console.log(store.getState());
    Footer._this.context.history.replace(`/pages/${type}/index`);
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Footer); //连接redux
