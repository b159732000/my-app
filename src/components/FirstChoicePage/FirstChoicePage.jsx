import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { MainLoadingPage } from "../MainLoadingPage"
import { Helmet } from 'react-helmet'
import ParentLoadingPage from '../ParentLoadingPage/ParentLoadingPage.jsx'

// 我自訂的所有分頁 (components)
// import Xmjs from "../Xmjs/Xmjs.jsx"
// import Jghx from "../Jghx/Jghx.jsx"
// import Jgzx from "../Jgzx/Jgzx.jsx"
// import Qwzs from "../Qwzs/Qwzs.jsx"
// import {NavigationBar} from "../NavigationBar/NavigationBar.jsx"

// 第三方庫
import '../../styles/Animate.css';
import { Animated } from "react-animated-css";

// CSS
import '../../styles/main.css';
import '../../styles/index.css';
// import '../../App.css';
import './FirstChoicePage.css'

class FirstChoicePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ParentLoadingPageIsShow: true,
            FirstChoicePageMainContentIsShow: false,
        }
    }

    hideLoadingShowMain() {

        setTimeout(() => {
            this.setState({
                ParentLoadingPageIsShow: false,
                FirstChoicePageMainContentIsShow: true
            })
        }, 3000);
    }

    componentWillMount() {
        this.hideLoadingShowMain();
    }


    render() {
        return (
            <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>

                <Helmet>
                    <style type="text/css">
                        {`#NavigationBarContainer {visibility: hidden}`}
                    </style>
                </Helmet>

                {(this.state.ParentLoadingPageIsShow) ? (<ParentLoadingPage></ParentLoadingPage>) : null}
                {/* <iframe id="hideLoadingHtml" className="loadingHtml" src="loading.html"></iframe> */}

                {/* <img src="./images/childLoadingAnimation.gif" style={{ display: 'none' }} alt="" /> */}

                <div id="FirstChoicePageMainContent" style={(this.state.FirstChoicePageMainContentIsShow) ? null : ({ display: "none" })}>
                    {/* 首頁目錄 */}
                    <div className="choiceContent">
                        <div className="topChoice">
                            <ul className="choiceList">
                                <div className="column">
                                    <li><Link to="/james/cuihu-react/Xmjs">
                                        <Animated animationIn="rotateIn">
                                            <img id="topChoiceImg1" className="" src={require("../../images/topjs.png")} alt="" />
                                        </Animated>
                                    </Link></li>
                                    <li><Link to="/james/cuihu-react/qwzs">
                                        <Animated animationIn="rotateIn">
                                            <img id="topChoiceImg2" className="" src={require("../../images/topqw.png")} alt="" />
                                        </Animated>
                                    </Link></li>
                                </div>
                                <div className="column">
                                    <li><Link to="/james/cuihu-react/jghx">
                                        <Animated animationIn="rotateIn">
                                            <img id="topChoiceImg3" className="animated invisible" src={require("../../images/tophx.png")} alt="" />
                                        </Animated>
                                    </Link></li>
                                    <li><Link to="/james/cuihu-react/Jgzx">
                                        <Animated animationIn="rotateIn">
                                            <img id="topChoiceImg4" className="animated invisible" src={require("../../images/topjg.png")} alt="" />
                                        </Animated>
                                    </Link></li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    {/* 首頁底部的圖片及文字 */}
                    <div className="homepageFooter">
                        <div className="img">
                            <img src={require("../../images/showImg.png")} alt="" />
                        </div>
                        <div className="wordImg" id="wordImg">
                            <Animated animationIn="fadeInLeft">
                                <img className="" src={require("../../images/showZi.png")} alt="" />
                            </Animated>
                        </div>
                    </div>
                </div>


                {/* 底部導行列 */}
                {/* <iframe id="mainNav" src="./navigation.html" frameborder="0" style={{display: 'none'}}></iframe> */}

                {/* loading page */}
                {/* <iframe id="childLoadingPage" name="childLoadingPage" className="" src="./childLoadingPage.html"
                              frameborder="0" style={{display: 'none'}}></iframe> */}

                {/*這邊塞一個分隔線*/}
                <hr />
                {/*路徑指定/代表根目錄，所以預設就會渲染Home組件，
                    而後方有/about的話會渲染About*/}
                {/*<Route path="/Xmjs" component={Xmjs} />
                    <Route path="/Qwzs" component={Qwzs} />
                    <Route path="/Jghx" component={Jghx} />
                    <Route path="/Jgzx" component={Jgzx} />

                    <Route path="/Xmjs" component={NavigationBar}></Route>*/}

            </div>

        )
    }
}

export default FirstChoicePage
// export { FirstChoicePage };