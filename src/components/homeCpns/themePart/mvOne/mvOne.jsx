import React, {Component} from 'react'
import './mvOne.css'

class mvOne extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let {image, title, subTitle} = this.props
        return (
            <div className="mvOneContainer">
                <img src={image} alt={title}/>
                <div className='title'>{title}</div>
                <div className='subTitle'>{subTitle}</div>
            </div>
        )
    }

}

export default mvOne
