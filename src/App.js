import React, { Component } from 'react';

import './styles/Animate.css';
import { Animated } from "react-animated-css";

import './styles/main.css';
import './styles/index.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <iframe id="hideLoadingHtml" className="loadingHtml" src="loading.html"></iframe> */}

        <img src="./images/childLoadingAnimation.gif" style={{ display: 'none' }} alt="" />

        <div id="mainContent" style={{}}>
          {/* 首頁目錄 */}
          <div className="choiceContent">
            <div className="topChoice">
              <ul className="choiceList">
                <div className="column">
                  <li><a href="./xmjs.html">
                    <Animated animationIn="rotateIn">
                      <img id="topChoiceImg1" className="" src={require("./images/topjs.png")} alt="" />
                    </Animated>
                  </a></li>
                  <li><a href="./qwzs.html">
                    <Animated animationIn="rotateIn">
                      <img id="topChoiceImg2" className="" src={require("./images/topqw.png")} alt="" />
                    </Animated>
                  </a></li>
                </div>
                <div className="column">
                  <li><a href="./jghx.html">
                    <Animated animationIn="rotateIn">
                      <img id="topChoiceImg3" className="animated invisible" src={require("./images/tophx.png")} alt="" />
                    </Animated>
                  </a></li>
                  <li><a href="./jgzx.html">
                    <Animated animationIn="rotateIn">
                      <img id="topChoiceImg4" className="animated invisible" src={require("./images/topjg.png")} alt="" />
                    </Animated>
                  </a></li>
                </div>
              </ul>
            </div>
          </div>

          {/* 首頁底部的圖片及文字 */}
          <div className="homepageFooter">
            <div className="img">
              <img src={require("./images/showImg.png")} alt="" />
            </div>
            <div className="wordImg" id="wordImg">
              <Animated animationIn="fadeInLeft">
                <img className="" src={require("./images/showZi.png")} alt="" />
              </Animated>
            </div>
          </div>
        </div>

        {/* 底部導行列 */}
        {/* <iframe id="mainNav" src="./navigation.html" frameborder="0" style={{display: 'none'}}></iframe> */}

        {/* loading page */}
        {/* <iframe id="childLoadingPage" name="childLoadingPage" className="" src="./childLoadingPage.html"
              frameborder="0" style={{display: 'none'}}></iframe> */}



      </div>
    );
  }
}

export default App;
