import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { MainLoadingPage } from "../MainLoadingPage"

// 我自訂的所有分頁 (components)
import Xmjs from "../Xmjs/Xmjs.jsx"
import Jgzx from "../Jgzx/Jgzx.jsx"

// 第三方庫
import '../../styles/Animate.css';
import { Animated } from "react-animated-css";

// CSS
import '../../styles/main.css';
import '../../styles/index.css';
import '../../App.css';
import './FirstChoicePage.css'

class FirstChoicePage extends React.Component {
    render() {
        return (
            <div style={{height: '100vh', width: '100vw', position: 'relative'}}>

                    {/* <iframe id="hideLoadingHtml" className="loadingHtml" src="loading.html"></iframe> */}

                    <img src="./images/childLoadingAnimation.gif" style={{ display: 'none' }} alt="" />

                    <div id="mainContent" style={{}}>
                        {/* 首頁目錄 */}
                        <div className="choiceContent">
                            <div className="topChoice">
                                <ul className="choiceList">
                                    <div className="column">
                                        <li><Link to="/Xmjs">
                                            <Animated animationIn="rotateIn">
                                                <img id="topChoiceImg1" className="" src={require("../../images/topjs.png")} alt="" />
                                            </Animated>
                                        </Link></li>
                                        <li><a href="./qwzs.html">
                                            <Animated animationIn="rotateIn">
                                                <img id="topChoiceImg2" className="" src={require("../../images/topqw.png")} alt="" />
                                            </Animated>
                                        </a></li>
                                    </div>
                                    <div className="column">
                                        <li><a href="./jghx.html">
                                            <Animated animationIn="rotateIn">
                                                <img id="topChoiceImg3" className="animated invisible" src={require("../../images/tophx.png")} alt="" />
                                            </Animated>
                                        </a></li>
                                        <li><Link to="/Jgzx">
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
                    <Route path="/Xmjs" component={Xmjs} />
                    <Route path="/Jgzx" component={Jgzx} />

            </div>

        )
    }
}

export { FirstChoicePage };