import React,{Component} from 'react';
import { Toast,Modal,Icon } from 'antd-mobile';
import { Tool,Util } from '../../common/util';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import PropTypes from 'prop-types';
import "./cart.less";

const alert = Modal.alert;
export default class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            images:{}
        }
        Cart._this = this;
    }
    componentDidMount(){
        this.getData();
    }
    loadImage=(image_id)=>{
        console.log(image_id);
        Util.loadImage(this,image_id,'m');
    }
    //移动
    drawStart=(id,event)=>{
        console.log(11111);
        this.setState({
            touchId:0,
            touchX:event.touches[0].pageX
        })
    }
    drawMove=(id,event)=>{
        let moveX = this.state.touchX - event.touches[0].pageX;
        if (moveX > 30) {
            this.setState({
                touchId:id
            })
        } else {
            this.setState({
                touchId:0
            })
        }
    }
    //删除
    evt_delete=(ident,event)=>{
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
        if (!ident) {
            return;
        }
        alert('温馨提示', '确定要从购物车里删除???', [
            { text: '取消', onPress: () => {
                // console.log('cancel');
            } },
            { text: '确认', onPress: async () => {
                let res = await Tool.post('/m/cart-remove-' + ident + '.html',{});
                if(res.success){
                    Toast.success('删除成功', 2, function(){
                        Cart._this.getData();
                    }, true);
                }
            } },
        ])
    }
    getData = async () => {
        let res = await Tool.post('/m/cart.html',{});
        if(res.success){
            this.setState({...res.data});
        }
    }
    render(){
        let images = this.state.images;
        return (
            <div>
                <Header title={"购物车"} isBack={false}></Header>
                <ul>
                    {
                        this.state&&this.state.objects?(
                            this.state.objects.map((val,index)=>(
                                <li className={'merchant-goods'} key={val.merchant.merchant_id}>
                                    <div className={'merchant-name'}>
                                        <label></label>
                                        <span>{val.merchant.show_name}</span>
                                    </div>
                                    {
                                        val.objects.goods.map((obj,idx)=>(
                                            <div key={obj.obj_ident} className={Cart._this.state.touchId==obj.obj_ident?'select_li merchant-item':'merchant-item'} onTouchStart={this.drawStart.bind(this,obj.obj_ident)} onTouchMove={this.drawMove.bind(this,obj.obj_ident)} onTouchEnd={this.drawEnd}>
                                                <label></label>
                                                <img className={'goods-img'} src={images[obj.item.product.image_id]?images[obj.item.product.image_id]:'data:image/gif;base64,R0lGODlhAQABAIAAAO/v7////yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=='}
                                onLoad={this.loadImage.bind(this,obj.item.product.image_id)} />
                                                <div className={'goods-name'}>{obj.item.product.name}</div>
                                                <div onClick={this.evt_delete.bind(this,obj.obj_ident)} className={Cart._this.state.touchId==obj.obj_ident?'goods-delete':'goods-delete'}>删除</div>
                                            </div>
                                        ))
                                    }
                                </li>
                            ))
                        ):''

                    }
                </ul>
                <Footer selectedTab="cart"></Footer>
            </div>
        )
    }
}
Cart.contextTypes = {
    history: PropTypes.object
};
