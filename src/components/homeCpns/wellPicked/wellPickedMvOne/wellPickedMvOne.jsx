import React, {Component} from 'react'
import './wellPickedMvOne.css'

class wellPickedMvOne extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let {image, title, description, person, totalViews, videoNum, tags} = this.props
        return (
            <div className="wellPickedMvOneContainer">
                <img src={image} alt={title}/>
                <div className='wellPickedMvOnetitle textoverflow'>{title}</div>
                <div className='wellPickedMvOnesubTitle textoverflow'>{description}</div>
                <div className="wellPickedHoverBox">
                    <img src={image} alt={title}/>
                    <div className="descBox">
                        <div className="descContent">
                            <div className='wellPickedMvOnetitle hoverTitle'>{title}</div>
                            <div className='wellPickedMvOnesubTitle description'>{description}</div>
                            <img className='avatar' src={person.headImg} alt=""/>
                            <div className="userInfoBox">
                                <div className='wellPickedMvOnetitle'>{person.userName}</div>
                                <div className='wellPickedMvOnesubTitle totalViews'>{totalViews}</div>
                                <div className='wellPickedMvOnesubTitle '>收录MV{videoNum}</div>
                            </div>
                            <span className="tags">{tags? '标签:  ' + tags.join(' ') : null}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default wellPickedMvOne
