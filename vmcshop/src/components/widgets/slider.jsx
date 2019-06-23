import React,{Component} from 'react';
import { Carousel } from 'antd-mobile';

export class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            screen_width : (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
        }
    }
    componentDidMount(){
       
    }
    render(){
        return (
            <Carousel
                    autoplay={true}
                    infinite
                    slideWidth={1}
                >
                {this.props.items?(
                    this.props.items.map((item,index) => (
                        <a className={'slide-img'}
                            key={item.image.src}
                            style={{ display: 'inline-block', width: '100%',height: this.state.screen_width/this.props._width*this.props._height }}
                        >
                            <img
                                src={item.image.src}
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                    ))
                ):''}
            </Carousel>
        )
    }
}