import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './themePart.css'
import ThemeTitle from './themeTitle/themeTitle'
import SliderBox from './sliderBox/sliderBox'
import MvOne from './mvOne/mvOne'
// import index from "postcss-normalize";

class themePart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0,
            totalPage: 3
        }
        // 创建一个 ref 来存储 textInput 的 DOM 元素
        this.themeDetail = React.createRef();
    }
    async handlePageChange(index) {
        let currentPage = this.state.currentPage
        let totalPage = this.state.totalPage - 1
        if((currentPage === 0 && index === -1) || (currentPage === totalPage && index === 1)) {
            return
        }
        await this.setState({
            currentPage: currentPage + index
        })
        let oldDetailClass = 'detailPage' + currentPage
        let newDetailClass = 'detailPage' + this.state.currentPage
        // console.log(oldDetailClass, newDetailClass, '666')
        ReactDOM.findDOMNode(this.themeDetail.current).classList.replace(oldDetailClass, newDetailClass)
        // console.log(index, this.state.currentPage, '666', this.themeDetail.current)
    }

    render() {
        let currentPage = this.state.currentPage
        let totalPage = this.state.totalPage - 1
        let {themeTitle, bigPics, videos} = this.props
        // console.log(videos, '555')
        if (!videos || !bigPics) {
            return null
        }
        // console.log(wellPickedTitle, '211')
        return (
            <div className="themePartContainer">
                <div onClick={()=>this.handlePageChange(-1)} id='prevPage' className={ currentPage === 0? 'prevPage firstPage':'prevPage'} />
                <div onClick={()=>this.handlePageChange(1)} id='nextPage' className={ currentPage === totalPage ? 'nextPage lastPage':'nextPage'} />
                <div className="themeContent">
                    <ThemeTitle {...themeTitle}/>
                    <div ref={this.themeDetail} className="themeDetail detailPage0">
                        <SliderBox bigPics={bigPics} />
                        <div className='mvListContainer'>
                            {
                                videos.map((item, index)=> <MvOne key={index} {...item} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default themePart
