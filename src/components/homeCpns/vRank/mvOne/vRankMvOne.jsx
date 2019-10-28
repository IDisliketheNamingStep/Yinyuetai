import React, {Component} from 'react'
import './vRankMvOne.css'

class VRankMvOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgShowMark: 0
        }
    }
    handleStatisEleHover(index) {
        this.setState({imgShowMark: index})
    }

    render() {
        let {title, entitle, details} = this.props
        return (
            <div className="vRankMvOneContainer">
                <p className='vRankMvOnetitle'>{title}</p>
                <p className='vRankMvOnesubTitle'>{entitle}</p>
                {
                    details.map((item, index)=> (
                        <a  onMouseOver={()=>this.handleStatisEleHover(index)} className={this.state.imgShowMark === index ? 'statisEle show' : 'statisEle'} key={index} href="">
                            <img src={item.image} alt=""/>
                            <p>{item.title}</p>
                        </a>
                    ))
                }
            </div>
        )
    }

}

export default VRankMvOne
