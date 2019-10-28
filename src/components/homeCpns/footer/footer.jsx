import React, {Component} from 'react'
import './footer.css'

class footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="footerContainer clearfix">
                <ul className="firstLine">
                    <li>关于我们</li>
                    <li>人才招聘</li>
                    <li>联系我们</li>
                    <li>友情链接</li>
                    <li>版权声明</li>
                    <li>客服中心</li>
                </ul>
                <p> Copyright ©2009 - 2018 yinyuetai.com 营业执照 广播电视节目制作经营 许可证编号(京)字第1891号 | 京网文[2017]10974-1277号 | 网络视听许可证0110413号</p>
                <p>京公网安备11010502014900号 | 京ICP证060716号 |京ICP备11024134号-1 | 出版物经营许可证 新出发京批字第直160022号 | 新出发京零字第直1300062号 | 增值电信业务经营许可证B2-20140501</p>
            </div>
        )
    }

}

export default footer
