import React, {Component} from 'react'
import './bigPic.css'
import Swiper from "swiper/js/swiper.js";
import 'swiper/css/swiper.min.css'
class bigPic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0,
        }
    }
    componentDidMount() {
        let mySwiper = new Swiper(".swiper-container", {
            effect: 'fade',
            // loop : true,
            loopAdditionalSlides : 2,
            speed: 800,
            autoplay: {
                disableOnInteraction: false, //手动滑动之后不打断播放
                delay: 5500
            },
            observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
            // pagination: {
            //     el: ".swiper-pagination"
            // }
        });
        mySwiper.on('slideChange', ()=>{
            this.setState({
                currentPage: mySwiper.realIndex
            })
        });
    }

    render() {
        let bigPics = this.props.bigPics
        let currentPage = this.state.currentPage
        return (
            <div className='bigPicContainer'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            bigPics.map((item, index) => {
                                return (
                                    <img key={index} className="swiper-slide" src={item.image} alt={item.title}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="bigPicTitle clearfix">
                    <div className="titleContent">
                        {
                            bigPics.map((item, index)=> <p className={currentPage === (index)? 'currentPageTitle':null} key={index}>{item.title}</p>)
                        }
                    </div>
                </div>
            </div>

        )
    }

}

export default bigPic
