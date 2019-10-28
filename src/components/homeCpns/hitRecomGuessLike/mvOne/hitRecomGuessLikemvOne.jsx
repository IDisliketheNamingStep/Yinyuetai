import React, {Component} from 'react'
import './hitRecomGuessLikemvOne.css'

class hitRecomGuessLikemvOne extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let {image, title, artists, showName} = this.props
        if(showName) {
            return (
                <div className="hitRecomGuessLikemvOneContainer">
                    <img src={image} alt={title}/>
                    <div className='hitRecomGuessLiketitle textoverflow'>{title}</div>
                    <div className='hitRecomGuessLikesubTitle'>{artists[0].artistName}</div>
                </div>
            )
        }
        return (
            <div className="hitRecomGuessLikemvOneContainer">
                <img src={image} alt={title}/>
                <div className='hitRecomGuessLiketitle'>{title}</div>
            </div>
        )
    }

}

export default hitRecomGuessLikemvOne
