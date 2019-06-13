import React,{Component} from 'react';
import { SearchBar } from 'antd-mobile';

export class Search extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <SearchBar placeholder={this.props.placeholder} value={this.props.input_value}></SearchBar>
        )
    }
}