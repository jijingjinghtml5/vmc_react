import React,{Component} from 'react';
import Drag from './drag';
export default class WidgetsList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul className={'widgets-list'}>
                <li>搜索框</li>
                <li>轮播图</li>
                <li>商品列表</li>
                <Drag style={{width:'100px',height:'100px',backgroundColor:'green',position:'absolute'}} onMove={(offet)=>{
                    console.log("拖拽元素当前位置：",offet);
                }}>
                    <div style={{
                        pointerEvents: "none",
                        width:'50px',
                        height:'50px',
                        background: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539180607654&di=6435dc00382b5d7682646cae1c36ca1b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9358d109b3de9c82036507ac6681800a19d84395.jpg) center center / 100% no-repeat",
                        backgroundSize: "100% 100%",
                    }}>sdsfds</div>
                </Drag>
            </ul>

        )
    }
}
