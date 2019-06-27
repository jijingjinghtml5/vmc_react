import React, { Component } from 'react';
import {Tool, Util} from './util';
import PropTypes from 'prop-types';
import emitter from './events';

export class AddCart extends Component{
	constructor(props){
        super(props);
        this.state = {
            images:{}
        }
    }
    componentDidMount=()=>{

    }
    handleClick=()=>{
	    console.log(11111);
        emitter.emit('hidemask', false);
    }
    loadImage=(image_id)=>{
        console.log(image_id);
        Util.loadImage(this,image_id,'m');
    }
    changeProduct=(pid)=>{
    	this.props.callback(pid);
    }
    evt_addcart = async (pid,type)=>{
		let res = await Tool.post('/m/cart-' +type + '-' + pid + '-1.html',{});
     	if(type=='fastbuy'){
			this.context.history.replace('/pages/checkout/checkout');
     	}else if(type=='add'){
     		this.context.history.replace('/pages/cart/index');
     	}
    }
    render=()=>{
    	let images = this.state.images?this.state.images:{};
    	let detail = this.props.detail;
    	if(!detail) return null;
    	return (
    		<div>
				<div className={'position-mask'} onClick={this.handleClick.bind(this)}></div>
				{
					detail.product?(
						<div className={'addcart-component'}>
							<img
                                className={'addcart-img'}
                                src={images[detail.product.image_id]?images[detail.product.image_id]:'data:image/gif;base64,R0lGODlhAQABAIAAAO/v7////yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=='}
                                onLoad={this.loadImage.bind(this,detail.product.image_id)}
                                style={{  verticalAlign: 'middle' }}
                            />
							<label className={'addcart-name'}>
								{detail.product.name}
							</label>
							{
								detail.spec_desc.t.map((val,index)=>(
									<div className={'addcart-spec'} key={val}>
										<label>{val}：</label>
										{
											detail.spec_desc.v[index].map((val)=>(
												<span onClick={this.changeProduct.bind(this,val.product_id)} className={val.product_id==detail.product.product_id?'active':''} key={val.product_id}>{val.label}</span>
											))
										}
									</div>
								))
							}
							<div className={'area-btn'}>
								<button onClick={this.evt_addcart.bind(this,detail.product.product_id,'fastbuy')}>一键订购</button>
								<button onClick={this.evt_addcart.bind(this,detail.product.product_id,'add')}>加入购物车</button>
							</div>
						</div>

					):''
				}

    		</div>
    	)
    }
}

AddCart.contextTypes = {
    history: PropTypes.object
};
