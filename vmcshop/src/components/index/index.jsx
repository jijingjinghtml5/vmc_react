import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { Header,Footer } from "../../common/common"
import PropTypes from 'prop-types';

export default class Index extends Component{
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
                <Header title={"首页"} isBack={false}></Header>
                <div onClick={this.goLogin}>去登录页</div>
                <Footer></Footer>
            </div>
        )
    }
}
Index.contextTypes = {
    history: PropTypes.object
};