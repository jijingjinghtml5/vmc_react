import React,{Component} from 'react';

export class BlankHelper extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className={'blank-helper'} style={{'height':this.props.height}}></div>
        )
    }
}