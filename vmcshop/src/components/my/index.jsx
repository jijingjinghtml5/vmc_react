import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import PropTypes from 'prop-types';

export default class My extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'my'
        }
        this.goLogin = this.goLogin.bind(this)
    }
    goLogin(){
        console.log(this.context.history);
        this.context.history.push('/pages/login/login')
    }
    render(){
        return (
            <div>
                <Header title={"个人中心"} isBack={false}></Header>
                <div onClick={this.goLogin}>去登录页</div>
                <Footer selectedTab="my"></Footer>
            </div>
        )
    }
}
My.contextTypes = {
    history: PropTypes.object
};