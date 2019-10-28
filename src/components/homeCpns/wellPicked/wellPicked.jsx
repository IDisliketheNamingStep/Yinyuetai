import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
import './wellPicked.css'
import WellPickedTitle from './wellPickedTitle/wellPickedTitle'
import WellPickedMvOne from './wellPickedMvOne/wellPickedMvOne'

class wellPicked extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        // 创建一个 ref 来存储 textInput 的 DOM 元素
        // this.hitRecomGuessLikethemeDetail = React.createRef();
        // this.handlePageChange = this.handlePageChange.bind(this)
    }
    // async handlePageChange(currentPost) {
    //     let tempPost = currentPost
    //     let totalPage = this.state.totalPage - 1
    //     if (currentPost === totalPage) {
    //         currentPost = 0
    //     }else {
    //         currentPost += 1
    //     }
    //     this.setState({currentPost})
    //     let oldDetailClass = 'detailPage' + tempPost
    //     let newDetailClass = 'detailPage' + currentPost
    //     ReactDOM.findDOMNode(this.hitRecomGuessLikethemeDetail.current).classList.replace(oldDetailClass, newDetailClass)
    // }

    render() {
        let currentPost = this.state.currentPost
        let {themeTitle, videos, showName, isCatForMore} = this.props
        if (!videos) {
            return null
        }
        return (
            <div className="wellPickedContainer">
                <div className="wellPickedContent">
                    <WellPickedTitle isCatForMore={isCatForMore}  currentPost={currentPost} handlePageChange={this.handlePageChange} {...themeTitle}/>
                    <div ref={this.hitRecomGuessLikethemeDetail} className="wellPickedDetail detailPage0">
                        <div  className='wellPickedmvListContainer'>
                            {
                                videos.map((item, index)=> <WellPickedMvOne showName={showName}  key={index} {...item} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default wellPicked
