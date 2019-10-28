import React, {Component} from 'react'
import './sliderBox.css'
import Swiper from "swiper/js/swiper.js";
import 'swiper/css/swiper.min.css'

class sliderBox extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        new Swiper(".swiper-container", {
            // effect: 'fade',
            loop : true,
            speed: 1000,
            autoplay: {
                disableOnInteraction: false, //手动滑动之后不打断播放
                delay: 4500
            },
            observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
            // pagination: {
            //     el: ".swiper-pagination"
            // }
        });
        // mySwiper.on('slideChange', ()=>{
        //     this.setState({
        //         currentPage: mySwiper.realIndex
        //     })
        // });

        // new Swiper(".swiper-container", {
        //     // effect: 'fade',
        //     loop : true,
        //     loopAdditionalSlides : 2,
        //     speed: 800,
        //     autoplay: {
        //         disableOnInteraction: false, //手动滑动之后不打断播放
        //         delay: 4500
        //     },
        //     observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        //     // pagination: {
        //     //     el: ".swiper-pagination"
        //     // }
        // });
    }

    render() {
        let bigPics = this.props.bigPics
        if(!bigPics){
            return null
        }
        let bpStr = JSON.stringify(bigPics)
        if(bpStr.startsWith('[')) {
            // console.log('是数组')
            return (
                <div className="sliderBoxContainer">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                bigPics.map((item, index) => {
                                    return (
                                        <div key={index} className="swiper-slide">
                                            <img src={item.image} alt={item.title}/>
                                            <div className="sliderTitle">{item.title}</div>
                                            <div className="singer">{item.content}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        }else if (bpStr.startsWith('{')) {
            // console.log('是对象')
            return (
                <div className="sliderBoxContainer">
                    <img src={bigPics.image} alt={bigPics.title}/>
                    <div className="sliderTitle">{bigPics.title}</div>
                    <div className="singer">{bigPics.content}</div>
                </div>
            )
        }
        return null

    }

}

export default sliderBox
