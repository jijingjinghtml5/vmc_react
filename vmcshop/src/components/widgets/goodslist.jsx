import React,{Component} from 'react';
import { Tool } from '../../common/util';

export class GoodsList extends Component{
    constructor(props) {
        super(props);
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
    	this.setState({
    		goodslist:res.data.goods_list
    	})
    }
    render(){
        return (
            <div className={'widget-goodslist'}>

            </div>
        )
    }
}