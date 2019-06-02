import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { Header } from "../../common/common"

class Index extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        return <Header title={"首页"} isBack={false}></Header>
    }
}
export default Index;