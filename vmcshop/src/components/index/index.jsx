import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Tool } from '../../common/util';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Search } from "../widgets/searchbar";
import { Slider } from "../widgets/slider";
import PropTypes from 'prop-types';

export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'index'
        }
        this.goLogin = this.goLogin.bind(this)
    }
    goLogin(){
        console.log(this.context.history);
        this.context.history.push('/pages/login/login')
    }
    async componentDidMount(){
        let res = await Tool.post('/m/xcxpage.html',{});
        this.setState({...res});
        console.log(this.state.widgets);
    }
    render(){
        return (
            <div>
                {/*可视化页面*/}
                { this.state.is_homepage==='false' ?  <Header title={this.state.title} isBack={this.state.is_homepage==='false'}></Header>: '' }
                { 
                    this.state.widgets?(
                        this.state.widgets.map((obj,index)=>{
                            switch(obj.name) {
                                 case 'searchbar':
                                    return <Search key={index} {...obj.data}></Search>
                                    break;
                                 case 'slider':
                                    return <Slider key={index} {...obj.data}></Slider>
                                    break;
                                 default:
                                    return <div key={index}></div>
                            } 
                        })
                    ):''
                }
                <div onClick={this.goLogin}>去登录页</div>
                <Footer selectedTab="index"></Footer>
            </div>
        )
    }
}
Index.contextTypes = {
    history: PropTypes.object
};