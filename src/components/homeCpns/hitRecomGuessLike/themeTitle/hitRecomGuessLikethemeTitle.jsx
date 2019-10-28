import React, {Component} from 'react'
import './hitRecomGuessLikethemeTitle.css'

class hitRecomGuessLikethemeTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPost: 0
        }
    }
    render() {
        let {title, currentPost, isCatForMore} =this.props
        if(isCatForMore) {
            return (
                <div className="hitRecomGuessLikethemeTitleContainer clearfix">
                    <span className="hitRecomGuessLikethemeTitle">{title}</span>
                    <div onClick={()=>this.props.handlePageChange(currentPost)} className="formore">
                        查看更多》
                    </div>
                </div>
            )
        }
        return (
            <div className="hitRecomGuessLikethemeTitleContainer clearfix">
                <span className="hitRecomGuessLikethemeTitle">{title}</span>
                <div onClick={()=>this.props.handlePageChange(currentPost)} className="hitRecomGuessLikecatContainer">
                    换一换
                </div>
            </div>
        )
    }

}

export default hitRecomGuessLikethemeTitle
