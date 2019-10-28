import React, {Component} from 'react'
import './topBar.css'
// import index from "postcss-normalize";

class topBar extends Component{
    constructor(props) {
        super(props)
        this.state = {
            topBarRouteName:['首页', 'MV', '悦单', 'V榜', '娱乐', '商城'],
            activeRouteMark: 0,
        }
    }
    routeNameChange(index) {
        this.setState({
            activeRouteMark: index
        })
    }
    render() {
        let topBarRouteName = this.state.topBarRouteName
        let activeRouteMark = this.state.activeRouteMark
        return (
            <div className='container'>
                <div className='content'>
                    <div className='topBarLeft'>
                        <img className='logoImg' src={require('../../../assets/images/音悦台Logo.jpg')} alt=""/>
                        {
                            topBarRouteName.map((item, index) => <span onClick={()=>this.routeNameChange(index)} className={activeRouteMark===index? 'activeRoute' : null} key={index}>{item}</span>)
                        }
                    </div>
                    <div className="topBarRight">
                        <div className='VIP' title='vip会员' />
                        <div className='appBox'>
                            <div className="main"> </div>
                            <div className="arrow"> </div>
                            <ul className="dropdownMenu">
                                <li>移动客户端</li>
                                <li>PC客户端</li>
                                <li>star明星直播</li>
                            </ul>
                        </div>
                        <div className='uploadMenus' title='管理'>
                            <div className="main"> </div>
                            <div className="arrow"> </div>
                            <ul className="dropdownMenu">
                                <li>上传视频</li>
                                <li>视频管理</li>
                                <li>悦单管理</li>
                            </ul>
                        </div>
                        <div className='subscription' title='订阅' />
                        <span className='login'>登录</span>
                        <span className='register'>注册</span>

                    </div>
                </div>
            </div>
        )
    }

}
export default topBar
