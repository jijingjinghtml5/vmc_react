import React,{Component} from 'react';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
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
    render(){
        const sidebar = (<List>
           {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
            if (index === 0) {
              return (<List.Item key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                multipleLine
              >Category</List.Item>);
            }
            return (<List.Item key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            >Category{index}</List.Item>);
          })}
        </List>);
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
