import React, {Component} from 'react'
import './vRANKTitle.css'

class VRankTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // catMark: 0
        }
    }
    handleCatChange() {
        // this.setState({catMark: index})
        // console.log(index, '255')
    }

    render() {
        let {title, category, isCatForMore} =this.props
        if(isCatForMore) {
            return (
                <div className="vRANKTitleContainer clearfix">
                    <span className="vRANKTitle">{title}</span>
                    <div className="formore">
                        查看更多》
                    </div>
                </div>
            )
        }
        return (
            <div className="vRANKTitleContainer clearfix">
                <span className="vRANKTitle">{title}</span>
                <div className="vRANKcatContainer">
                    {
                        category.map((item, index)=> <span onClick={()=>this.handleCatChange(index)} key={index} >{item}</span>)
                    }
                </div>
            </div>
        )
    }

}

export default VRankTitle
