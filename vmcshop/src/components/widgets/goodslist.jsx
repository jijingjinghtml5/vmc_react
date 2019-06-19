import React,{Component} from 'react';
import { Tool } from '../../common/util';
import PropTypes from 'prop-types';

export class GoodsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            goodslist:[]
        }
        GoodsList._this = this;
    }
    componentDidMount(){
    	this.getData();
    }
    async getData(){
    	let api_data = '?page_index=1&' + 'page_size=' + (GoodsList._this.props.limit || 9);
    	let filterArray = [];
    	for (var i = 0; i < GoodsList._this.props.filter[GoodsList._this.props.filter_type].length; i++) {
            filterArray.push('filter[' + GoodsList._this.props.filter_type + '][]=' + GoodsList._this.props.filter[GoodsList._this.props.filter_type][i]);
        }
    	let res =await Tool.post('/openapi/goods/gallery' + api_data + '&' + filterArray.join('&'),{});
    	console.log(res.data);
        this.setState({
    		goodslist:res.data.goods_list
    	})
    }
    evt_link=(id)=>{
        let url = `/pages/product/product?product_id=${id}`;
        this.context.history.push(url);
    }
    render(){
        return (
            <ul className={'widget-goodslist'}>
                {
                    this.state.goodslist?(
                        this.state.goodslist.map(val=>(
                            <li key={val.product.product_id} className="goodslist-item" onClick={this.evt_link.bind(this,val.product.product_id)}>
                                <img src={val.image}/>
                                <span>{val.name}</span>
                            </li>
                        ))
                    ):''
                }
            </ul>
        )
    }
}
GoodsList.contextTypes = {
    history: PropTypes.object
};