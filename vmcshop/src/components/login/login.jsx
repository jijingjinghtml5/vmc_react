import React,{Component} from 'react'
import { List, InputItem, WhiteSpace,Button,Toast } from 'antd-mobile'
import { Tool } from '../../common/util';
import Header from "../../common/Header";
import PropTypes from 'prop-types';
import Index from "../index";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
        this.evt_edit = this.evt_edit.bind(this);
        this.evt_submit = this.evt_submit.bind(this);
    }
    evt_edit(v,type){
        switch(type){
            case 'phone':
                this.setState({
                    username:v
                })
                break;
            case 'password':
                this.setState({
                    password:v
                })
                break;
        }
    }
    async evt_submit(){
        let { username,password } = this.state;
        let res = await Tool.post('/m/passport-post_login.html',{uname:username,password:password});
        if (res.success) {
            Toast.info('登陆成功');
            this.context.history.push('/pages/index/index')
        } else {
            Toast.info('登陆失败');
        }
    }
    render(){
        return (
            <div>
                <Header title={"登录"}></Header>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <List renderHeader={() => 'VMCSHOP+'}>
                    <InputItem
                        clear
                        placeholder="手机号"
                        onChange={(v)=>this.evt_edit(v,'phone')}
                    >手机号</InputItem>
                    <InputItem
                        clear
                        placeholder="密码"
                        onChange={(v)=>this.evt_edit(v,'password')}
                    >密码</InputItem>
                </List>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <Button type="primary" inline style={{ marginRight: '4px' }} onClick={this.evt_submit}>登录</Button>
            </div>
        )
    }
}

export default Login;

Login.contextTypes = {
    history: PropTypes.object
};