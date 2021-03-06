import React,{Component} from 'react';
import { Tool } from '../../common/util';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Search } from "../widgets/searchbar";
import { Slider } from "../widgets/slider";
import { BlankHelper } from "../widgets/blankhelper";
import { ImgNav } from "../widgets/imgnav";
import { GoodsList } from "../widgets/goodslist";
import PropTypes from 'prop-types';
import "../widgets/widgets.less";
import "./index.less";
export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'index'
        }
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
                                case 'blankhelper':
                                    return <BlankHelper key={index} {...obj.data}></BlankHelper>
                                    break;
                                case 'imgnav':
                                    return <ImgNav key={index} {...obj.data}></ImgNav>
                                    break;
                                case 'goodslist':
                                    return <GoodsList key={index} {...obj.data}></GoodsList>
                                    break;
                                 default:
                                    return <div key={index}></div>
                            }
                        })
                    ):''
                }
                <Footer selectedTab="index"></Footer>
            </div>
        )
    }
}
Index.contextTypes = {
    history: PropTypes.object
};
