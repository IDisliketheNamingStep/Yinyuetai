import React, {Component} from 'react'
import './themeTitle.css'

class themeTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catMark: 0
        }
    }
    handleCatChange(index) {
        this.setState({catMark: index})
        console.log(index, '255')
    }

    render() {
        let catMark = this.state.catMark
        let {title, category} =this.props
        return (
            <div className="themeTitleContainer clearfix">
                <span className="themeTitle">{title}</span>
                <div className="catContainer">
                    {
                        category.map((item, index)=> <span onClick={()=>this.handleCatChange(index)} key={index} className={catMark === index ? 'catItemActive' : null}>{item}</span>)
                    }
                </div>
            </div>
        )
    }

}

export default themeTitle
