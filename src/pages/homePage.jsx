import React, {Component} from 'react'
import TopBar from "../components/homeCpns/topBar/topBar.jsx";
import BigPic from "../components/homeCpns/bigPic/bigPic";
import ThemePart from "../components/homeCpns/themePart/themePart";
import HitRecomGuessLike from "../components/homeCpns/hitRecomGuessLike/hitRecomGuessLike";
import WellPicked from "../components/homeCpns/wellPicked/wellPicked";
import Vrank from "../components/homeCpns/vRank/vRank";
import Footer from "../components/homeCpns/footer/footer";
import axios from 'axios'

class homePage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            // 轮播图
            bigPics: [],
            // 首播
            firstVideo: {},
            // 娱乐
            recomInfo: {},
            // 现场
            liveShowInfo: {},
            // 热播推荐
            hitRecomInfo: {},
            // 猜你喜欢
            guessLikeInfo: {},
            // 随机推荐
            randomRecomInfo: {},
            // 精品悦单
            wellPickedInfo: {},
            // 音悦V榜
            vRankInfo: {},
            // 自制节目
            selfProductInfo: {},
            themeTitle1: {title: '首播', category: ['全部', '内地', '港台', '欧美', '韩国', '日本']},
            themeTitle2: {title: '娱乐', category: ['全部', '明星', '影视', '练习室']},
            themeTitle3: {title: '现场', category: []},
            themeTitle4: {title: '热播推荐', category: []},
            themeTitle5: {title: '猜你喜欢', category: []},
            themeTitle6: {title: '', category: []},
            themeTitle7: {title: '精品悦单', category: []},
            themeTitle8: {title: '音悦V榜', category: ['TOP10', '看音乐', '密室谈', '有话说', '特别企划']},
            themeTitle9: {title: '自制节目', category: []}
        }
    }
    // 获取轮播图信息
    async getBigPicInfo() {
        // 获取轮播图信息
        let bigPics = await axios.get('/api/mv/get-bigpic',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        bigPics = bigPics.data.bigPics
        this.setState({bigPics})
    }
    // 获取主题区《首播》信息http://www.yinyuetai.com/mv/get-first-video?area=all&size=32
    async getFirstVideoInfo() {
        let firstVideo = await axios.get('/api/mv/get-first-video?area=all&size=32',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        firstVideo = firstVideo.data
        this.setState({firstVideo})
    }

    // 获取主题区《娱乐》信息http://www.yinyuetai.com/mv/get-rec?recId=8&size=8
    async getReconInfo() {
        let recomInfo = await axios.get('/api/mv/get-rec?recId=8&size=8',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        recomInfo = recomInfo.data
        // 提取title行信息
        let tempObj = {title: '', category: []}
        if (recomInfo.module.title) {
            tempObj.title = recomInfo.module.title
        }else {
            tempObj.title = '娱乐'
        }
        if ((recomInfo.submodules)) {
            recomInfo.submodules.forEach((item)=>{
                tempObj.category.push(item.title)
            })
        }else {
            tempObj.category = ['全部', '明星', '影视', '练习室']
        }
        // 将数据保存到state中
        this.setState({
            themeTitle2: tempObj,
            recomInfo
        })
    }

    // 获取主题区《娱乐》32个视频资料信息http://www.yinyuetai.com/mv/get-rec?recId=8&size=8
    //http://www.yinyuetai.com/mv/get-rec?cataId=3&withBigImg=true&size=32
    async getRecomMoreInfo() {
        let recomMoreInfo = await axios.get('/api/mv/get-rec?cataId=3&withBigImg=true&size=32',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        recomMoreInfo = recomMoreInfo.data
        this.setState({recomInfo: recomMoreInfo})
        // console.log(recomMoreInfo, '555')
    }

    //获取主题区《现场》信息http://www.yinyuetai.com/mv/get-rec?recId=12&xc=true
    async getLiveShowInfo() {
        let liveShowInfo = await axios.get('/api/mv/get-rec?recId=12&xc=true',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        liveShowInfo = liveShowInfo.data
        // 提取title行信息
        let tempObj = {title: '', category: []}
        if (liveShowInfo.module.title) {
            tempObj.title = liveShowInfo.module.title
        }else {
            tempObj.title = '现场'
        }
        if ((liveShowInfo.submodules.length>1)) {
            liveShowInfo.submodules.forEach((item)=>{
                tempObj.category.push(item.title)
            })
        }else {
            tempObj.category = []
        }
        // 将数据保存到state中
        this.setState({
            themeTitle3: tempObj,
            liveShowInfo
        })
    }

    // 获取推广区《热播推荐》信息http://www.yinyuetai.com/mv/get-rec?recId=9&size=30
    async getHitRecomInfo() {
        let hitRecomInfo = await axios.get('/api/mv/get-rec?recId=9&size=30',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        hitRecomInfo = hitRecomInfo.data
        this.setState({hitRecomInfo})
    }

    //获取推广区《猜你喜欢》信息http://www.yinyuetai.com/mv/get-guess?size=30
    async getGuessLikeInfo() {
        let guessLikeInfo = await axios.get('/api/mv/get-guess?size=30',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        guessLikeInfo = guessLikeInfo.data
        this.setState({guessLikeInfo})
        // console.log(guessLikeInfo, '555')
    }

    //获取推广区《随机推荐》信息http://www.yinyuetai.com/mv/get-rec?recId=13
    async getRandomRecomInfo() {
        let randomRecomInfo = await axios.get('/api/mv/get-rec?recId=13',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        let themeTitle6 = {title: '', category: []}
        randomRecomInfo = randomRecomInfo.data
        if (randomRecomInfo.module.title) {
            themeTitle6.title = randomRecomInfo.module.title
        }
        this.setState({randomRecomInfo, themeTitle6})
    }

    //获取推广区《精品悦单》信息http://www.yinyuetai.com/mv/get-playlist?size=6
    async getWellPickedInfo() {
        let wellPickedInfo = await axios.get('/api/mv/get-playlist?size=6',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        // let themeTitle7 = {title: '', category: []}
        wellPickedInfo = wellPickedInfo.data
        // if (wellPickedInfo.module.title) {
        //     themeTitle7.title = wellPickedInfo.module.title
        // }
        this.setState({wellPickedInfo})
    }

    // 获取主题区《音悦V榜》信息http://www.yinyuetai.com/mv/get-rec?recId=10&size=3&full=true
    async getVRankInfo() {
        let vRankInfo = await axios.get('/api/mv/get-rec?recId=10&size=3&full=true',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        vRankInfo = vRankInfo.data
        // 提取title行信息
        let tempObj = {title: '', category: []}
        if (vRankInfo.module.title) {
            tempObj.title = vRankInfo.module.title
        }else {
            tempObj.title = '音悦V榜'
        }
        if ((vRankInfo.sublinks)) {
            vRankInfo.sublinks.forEach((item)=>{
                tempObj.category.push(item.title)
            })
        }else {
            tempObj.category = ['TOP10', '看音乐', '密室谈', '有话说', '特别企划']
        }
        // 将数据保存到state中
        await this.setState({
            themeTitle8: tempObj,
            vRankInfo
        })
    }

    // 获取主题区《自制节目》信息http://www.yinyuetai.com/mv/get-rec?recId=11&size=3&full=true
    async getSelfProductInfo() {
        let selfProductInfo = await axios.get('/api/mv/get-rec?recId=11&size=3&full=true',{headers: {Accept: 'application/json, text/javascript, */*; q=0.01'}})
        selfProductInfo = selfProductInfo.data
        // 提取title行信息
        let tempObj = {title: '', category: []}
        if (selfProductInfo.module.title) {
            tempObj.title = selfProductInfo.module.title
        }else {
            tempObj.title = '音悦V榜'
        }
        if ((selfProductInfo.sublinks)) {
            selfProductInfo.sublinks.forEach((item)=>{
                tempObj.category.push(item.title)
            })
        }else {
            tempObj.category = ['TOP10', '看音乐', '密室谈', '有话说', '特别企划']
        }
        // 将数据保存到state中
        await this.setState({
            themeTitle9: tempObj,
            selfProductInfo
        })
        console.log(this.state.selfProductInfo, '23333')
    }

    componentDidMount() {
        // 获取轮播图信息
        this.getBigPicInfo()

        // 获取主题区《首播》信息http://www.yinyuetai.com/mv/get-first-video?area=all&size=32
        this.getFirstVideoInfo()

        // 获取主题区《娱乐》信息http://www.yinyuetai.com/mv/get-rec?recId=8&size=8
        this.getReconInfo()

        // 获取主题区《娱乐》32个视频资料信息http://www.yinyuetai.com/mv/get-rec?recId=8&size=8
        //http://www.yinyuetai.com/mv/get-rec?cataId=3&withBigImg=true&size=32
        this.getRecomMoreInfo()

        //获取主题区《现场》信息http://www.yinyuetai.com/mv/get-rec?recId=12&xc=true
        this.getLiveShowInfo()

        // 获取推广区《热播推荐》信息http://www.yinyuetai.com/mv/get-rec?recId=9&size=30
        this.getHitRecomInfo()

        //获取推广区《猜你喜欢》信息http://www.yinyuetai.com/mv/get-guess?size=30
        this.getGuessLikeInfo()

        //获取推广区《随机推荐》信息http://www.yinyuetai.com/mv/get-rec?recId=13
        this.getRandomRecomInfo()

        //获取推广区《精品悦单》信息http://www.yinyuetai.com/mv/get-playlist?size=6
        this.getWellPickedInfo()

        // 获取主题区《音悦V榜》信息http://www.yinyuetai.com/mv/get-rec?recId=10&size=3&full=true
        this.getVRankInfo()

        // 获取主题区《自制节目》信息http://www.yinyuetai.com/mv/get-rec?recId=11&size=3&full=true
        this.getSelfProductInfo()


    }

    render() {
        return (
            <div>
                <TopBar/>
                <div className='homeContent'>
                    {/*轮播图*/}
                    <BigPic bigPics={this.state.bigPics}/>
                    {/*首播*/}
                    <ThemePart {...this.state.firstVideo} themeTitle={this.state.themeTitle1} />
                    {/*娱乐*/}
                    <ThemePart bigPics={this.state.recomInfo.priModule} videos={this.state.recomInfo.details} themeTitle={this.state.themeTitle2} />
                    {/*热播推荐*/}
                    <HitRecomGuessLike  videos={this.state.hitRecomInfo.details} themeTitle={this.state.themeTitle4}/>
                    {/*现场*/}
                    <ThemePart bigPics={this.state.liveShowInfo.priModule} videos={this.state.liveShowInfo.details} themeTitle={this.state.themeTitle3} />
                    {/*精品悦单*/}
                    <WellPicked isCatForMore={true}  videos={this.state.wellPickedInfo.playlists} themeTitle={this.state.themeTitle7}/>
                    {/*随机推荐*/}
                    <HitRecomGuessLike isCatForMore={true}  videos={this.state.randomRecomInfo.details} themeTitle={this.state.themeTitle6}/>
                    {/*音悦V榜*/}
                    <Vrank bigPic={this.state.vRankInfo.priModule} submodules={this.state.vRankInfo.submodules} themeTitle={this.state.themeTitle8} />
                    {/*自制节目*/}
                    <Vrank isCatForMore={true} bigPic={this.state.selfProductInfo.priModule} submodules={this.state.selfProductInfo.submodules} themeTitle={this.state.themeTitle9} />
                    {/*猜你喜欢*/}
                    <HitRecomGuessLike showName={true}  videos={this.state.guessLikeInfo.video} themeTitle={this.state.themeTitle5}/>
                    {/*footer*/}
                    <Footer />
                </div>
            </div>
        )
    }

}
export default homePage
