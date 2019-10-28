import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './hitRecomGuessLike.css'
import ThemeTitle from './themeTitle/hitRecomGuessLikethemeTitle'
// import SliderBox from './VRankSliderBox/VRankSliderBox'
import MvOne from './mvOne/hitRecomGuessLikemvOne'
// import index from "postcss-normalize";

class hitRecomGuessLike extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPost: 0,
            totalPage: 5
        }
        // 创建一个 ref 来存储 textInput 的 DOM 元素
        this.hitRecomGuessLikethemeDetail = React.createRef();
        this.handlePageChange = this.handlePageChange.bind(this)
    }
    async handlePageChange(currentPost) {
        let tempPost = currentPost
        let totalPage = this.state.totalPage - 1
        if (currentPost === totalPage) {
            currentPost = 0
        }else {
            currentPost += 1
        }
        this.setState({currentPost})
        let oldDetailClass = 'detailPage' + tempPost
        let newDetailClass = 'detailPage' + currentPost
        ReactDOM.findDOMNode(this.hitRecomGuessLikethemeDetail.current).classList.replace(oldDetailClass, newDetailClass)
    }

    render() {
        let currentPost = this.state.currentPost
        let {themeTitle, videos, showName, isCatForMore} = this.props
        if (!videos) {
            return null
        }
        return (
            <div className="hitRecomGuessLikeContainer">
                <div className="hitRecomGuessLikethemeContent">
                    <ThemeTitle isCatForMore={isCatForMore}  currentPost={currentPost} handlePageChange={this.handlePageChange} {...themeTitle}/>
                    <div ref={this.hitRecomGuessLikethemeDetail} className="hitRecomGuessLikethemeDetail detailPage0">
                        <div  className='hitRecomGuessLikemvListContainer'>
                            {
                                videos.map((item, index)=> <MvOne showName={showName}  key={index} {...item} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default hitRecomGuessLike
