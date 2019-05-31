import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        return  <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
        >登录</NavBar>
    }
}
export default Login;