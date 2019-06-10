import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { Header,Footer } from "../../common/common"
import PropTypes from 'prop-types';

export default class Cart extends Component{
    constructor(props) {
        super(props);
        this.goLogin = this.goLogin.bind(this)
    }
    goLogin(){
        console.log(this.context.history);
        this.context.history.push('/pages/login/login')
    }
    render(){
        return (
            <div>
                <Header title={"购物车"} isBack={false}></Header>
                <div onClick={this.goLogin}>去登录页</div>
                <Footer selectedTab="cart"></Footer>
            </div>
        )
    }
}
Cart.contextTypes = {
    history: PropTypes.object
};