import React,{Component} from 'react';
import WidgetsList from './widgetsList';
import "./visible.less";

export default class VisualPage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <WidgetsList></WidgetsList>
            </div>
        )
    }
}
