import React, {Component} from 'react'
import './vRankSliderBox.css'
import Swiper from "swiper/js/swiper.js";
import 'swiper/css/swiper.min.css'

class VRankSliderBox extends Component {
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
            observer: true
        });
    }

    render() {
        let bigPics = this.props.bigPics
        if(!bigPics){
            return null
        }
        let bpStr = JSON.stringify(bigPics)
        if(bpStr.startsWith('[')) {
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
                                            <div className="singer textoverflow">{item.content}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        }else if (bpStr.startsWith('{')) {
            return (
                <div className="sliderBoxContainer">
                    <img src={bigPics.image} alt={bigPics.title}/>
                    <div className="sliderTitle">{bigPics.title}</div>
                    <div className="singer textoverflow">{bigPics.content}</div>
                </div>
            )
        }
        return null

    }

}

export default VRankSliderBox
