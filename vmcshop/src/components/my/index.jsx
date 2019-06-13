import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import {Tool, Util} from '../../common/util';
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
    async componentDidMount(){
        let res = await Tool.post('/m/my.html',{});
        this.setState({...res});
        console.log(this.state.member);
    }
    loadImage(image_id){
        console.log(image_id);
        Util.loadImage(this,image_id,'m');
    }
    render(){
        let images = {};
        if(this.state.images){
            images = this.state.images;
        }
        return (
            <div>
                <Header title={"个人中心"} isBack={false}></Header>
                {
                    this.state.member?(
                        <div>
                            <img src={images[this.state.member.avatar]?images[this.state.member.avatar]:'data:image/gif;base64,R0lGODlhAQABAIAAAO/v7////yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=='} onLoad={this.loadImage.bind(this,this.state.member.avatar)}/>

                            {/*<img src={images[this.state.member.avatar]?images[this.state.member.avatar]:''} onLoad={this.loadImage.bind(this,this.state.member.avatar)}/>*/}
                        </div>
                    ):''
                }
                <Footer selectedTab="my"></Footer>
            </div>
        )
    }
}
My.contextTypes = {
    history: PropTypes.object
};