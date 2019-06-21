import React,{Component} from 'react';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import { Tool,Util } from '../../common/util';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import PropTypes from 'prop-types';
import "./index.less"
export default class Cat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'cat',
            open: true
        }
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    change_cat=(id)=>{
        console.log(id);
    }
    componentDidMount(){
        this.getData();
    }
    getData = async () => {
        let res = await Tool.post('/m/category.html',{});
        if(res.category_tree){
            this.setState({...res});
            console.log(this.state.category);
        }
    }
    render(){
        const sidebar = this.state.category_tree?(<List>
           {this.state.category_tree.map((i, index) => {
            // if (index === 0) {
            //   return (<List.Item key={index}
            //     thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            //     multipleLine
            //   >Category</List.Item>);
            // }
            return (<List.Item onClick={this.change_cat.bind(this,i.cat_id)} key={index}
              // thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            >{i.cat_name}</List.Item>);
          })}
        </List>):'';
        return (
            <div>
                <Header title={"分类"} isBack={false}></Header>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: (document.documentElement.clientHeight-95),top:'45px',bottom:'50px'}}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                  >
                    Click upper-left corner
                  </Drawer>
                <Footer selectedTab="cat"></Footer>
            </div>
        )
    }
}
Cat.contextTypes = {
    history: PropTypes.object
};
