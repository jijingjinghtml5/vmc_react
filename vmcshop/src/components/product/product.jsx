import React,{Component} from 'react';
import {  Carousel } from 'antd-mobile';
import Header from "../../common/Header";
import { AddCart } from "../../common/addCart";
import PropTypes from 'prop-types';
import {Tool, Util} from '../../common/util';
import emitter from '../../common/events';
import "./product.less";

export default class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {
            images:{},
            isShow:false
        }
        Product._this = this;
    }
    componentDidMount(){
        emitter.addListener('hidemask', (isShow) => {
            this.setState({
                isShow
            });
        });
        let search = this.props.location.search ;
        search = search.slice(1,);
        let arr = search.split('&');
        arr.forEach(function(item,key) {
            let single = item.split('=');
            if(single[0] == 'product_id'){
                Product._this.setState({
                    product_id:single[1]
                })
                Product._this.getData(single[1])
            }
        });

    }
    componentWillUnmount() {
        emitter.removeListener('hidemask', (isShow) => {
            this.setState({
                isShow
            });
        });
    }
    getData=async (id)=>{
        let res = await Tool.post(`/m/item-${id}.html`,{});
        this.setState({...res});
    }
    loadImage=(image_id)=>{
        console.log(image_id);
        Util.loadImage(this,image_id,'m');
    }
    evt_link=(type)=>{
        this.context.history.replace(type=='index'?'/pages/index/index':'/pages/cart/index')
    }
    changeProduct=(pid)=>{
        this.getData(pid);
    }
    showPopup=(isShow)=>{
        this.setState({
            isShow:!isShow
        })
    }
    render(){
        let images = this.state.images?this.state.images:{};
        let data_detail = this.state.data_detail?this.state.data_detail:{};
        return (
            <div>
                <Header title={"商品详情"} isBack={true}></Header>
                <Carousel
                    autoplay={true}
                    infinite
                    slideWidth={1}
                >
                    {data_detail.images?(
                        data_detail.images.map((item,index) => (
                            <a className={'slide-img'}
                                key={item.image_id}
                                style={{ display: 'inline-block', width: '100%',height:'7.5rem' }}
                            >
                                <img
                                    src={images[item.image_id]?images[item.image_id]:'data:image/gif;base64,R0lGODlhAQABAIAAAO/v7////yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=='}
                                    onLoad={this.loadImage.bind(this,item.image_id)}
                                    style={{ width: '100%', verticalAlign: 'middle' }}
                                />
                            </a>
                        ))
                    ):''}
                </Carousel>
                <div className={'product-name'}>{data_detail.name}</div>
                <div className={'product-price'}>{data_detail.product?data_detail.product.buy_price:''}</div>
                {
                    data_detail.description?(
                        <div>
                            <div className={'product-title'}>商品介绍</div>
                            <div className={'react-parse'} dangerouslySetInnerHTML={{__html:data_detail.description}}></div>
                        </div>
                    ):''
                }
                <footer>
                    <label onClick={this.evt_link.bind(this,'index')}><img src=""/><span>首页</span></label>
                    <label onClick={this.evt_link.bind(this,'cart')} ><img src=""/><span>购物车</span></label>
                    <button className={'add_cart'} onClick={this.showPopup.bind(this,this.state.isShow)}>加入购物车</button>
                    <button onClick={this.showPopup.bind(this,this.state.isShow)}>立即购买</button>
                </footer>
                {
                    this.state.isShow?(
                        <AddCart callback={this.changeProduct} detail={data_detail} ></AddCart>
                    ):''
                }
            </div>
        )
    }
}
Product.contextTypes = {
    history: PropTypes.object
};
