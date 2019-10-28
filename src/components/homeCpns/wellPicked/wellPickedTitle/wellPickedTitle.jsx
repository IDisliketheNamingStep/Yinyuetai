import React, {Component} from 'react'
import './wellPickedTitle.css'

class wellPickedTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let {title} =this.props
        return (
            <div className="hitRecomGuessLikethemeTitleContainer clearfix">
                <span className="hitRecomGuessLikethemeTitle">{title}</span>
                <div className="formore">
                    查看更多》
                </div>
            </div>
        )
    }
}

export default wellPickedTitle
