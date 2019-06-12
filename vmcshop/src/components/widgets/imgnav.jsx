import React,{Component} from 'react';
import { Grid } from 'antd-mobile';

export class ImgNav extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgnavs:Array.from(this.props.items.map((val, i) => ({
                icon: val.image.src,
                text: val.text,
            })))
        }
    }
    render(){
        return (
            <Grid hasLine={false} data={this.state.imgnavs} columnNum={this.props.limit}></Grid>
        )
    }
}