/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Iframe from 'react-iframe'
import { Zxbx } from '../zxbx'


import "./Jghx.css"


class Jghx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            threeDSrc: "w1",
            threeDViewWay: "viewWaySwsp",
            threeDFloor: "1F",
            threeDBuilding: "thy",
            panoramaShowing: false,
            panoramaCode: "",
            ZxbxIsShowing: false,
            jghxDisplay: { display: "" }
        }
    }

    // 更新正在看的樓層
    changeThreeDFloor = (selectedFloor) => {
        // 用這種寫法的原因是，setState是異步，如果在setState後直接調用數值，可能會得到舊的數值。
        // 這種寫法是回調函數，在setState中的逗號後，放入需要執行的函數。
        // 網路上有人推薦用MobX來管理Component狀態 (import {observable} from "mobx")，之後可以了解。
        this.setState({
            threeDFloor: selectedFloor,
            threeDViewWay: "viewWaySwlp"
        }, function () {
            this.setThreeDSrc();
            console.log(this.state);
        })
    }

    // 更新看房方式
    changeThreeDViewWay(selectedViewWay) {
        if (selectedViewWay === "viewWaySwsp") {
            var floor = "";
        } else { var floor = "1F" };

        this.setState({
            threeDViewWay: selectedViewWay,
            threeDFloor: floor
        }, function () {
            this.setThreeDSrc();
            console.log(this.state);
        })
    }

    // 更新正在看的建案
    changeThreeDBuilding(selectedBuilding) {
        this.setState({
            threeDBuilding: selectedBuilding,
            threeDViewWay: "viewWaySwsp",
            threeDFloor: ""
        }, function () {
            this.setThreeDSrc();
            console.log(this.state);

        })
    }

    // 依照選擇的看房選項，更新3D圖連結網址
    setThreeDSrc = () => {
        if (this.state.threeDBuilding === "thy" && this.state.threeDViewWay === "viewWaySwsp" && this.state.threeDFloor === "") { this.setState({ threeDSrc: "w1" }) }
        if (this.state.threeDBuilding === "thy" && this.state.threeDViewWay === "viewWaySwlp" && this.state.threeDFloor === "2F") { this.setState({ threeDSrc: "w1_2" }) }
        if (this.state.threeDBuilding === "thy" && this.state.threeDViewWay === "viewWaySwlp" && this.state.threeDFloor === "1F") { this.setState({ threeDSrc: "w1_1" }) }
        if (this.state.threeDBuilding === "thy" && this.state.threeDViewWay === "viewWaySwlp" && this.state.threeDFloor === "-1F") { this.setState({ threeDSrc: "w1_f1" }) }
        if (this.state.threeDBuilding === "hty" && this.state.threeDViewWay === "viewWaySwsp" && this.state.threeDFloor === "") { this.setState({ threeDSrc: "Q7" }) }
        if (this.state.threeDBuilding === "hty" && this.state.threeDViewWay === "viewWaySwlp" && this.state.threeDFloor === "2F") { this.setState({ threeDSrc: "Q7_2" }) }
        if (this.state.threeDBuilding === "hty" && this.state.threeDViewWay === "viewWaySwlp" && this.state.threeDFloor === "1F") { this.setState({ threeDSrc: "Q7_1" }) }
        if (this.state.threeDBuilding === "hty" && this.state.threeDViewWay === "viewWaySwlp" && this.state.threeDFloor === "-1F") { this.setState({ threeDSrc: "Q7_f1" }) }
    }

    // 按照選擇的全景圖更新全景網址，並檢視全景
    changePanoramaSrc = (selectedPanoramaCode) => {
        console.log("success");
        this.setState({
            panoramaCode: selectedPanoramaCode,
            panoramaShowing: !this.panoramaShowing,
        }, function () {
            console.log(this.state);
        })
    }

    closePanorama() {
        console.log("close");
        this.setState({
            panoramaShowing: false,
        })
    }

    mapSrc() {
        if (this.state.threeDBuilding === "thy") {
            // return zxbx
        } else if (this.state.threeDBuilding === "hty") {
            // 暫時也 return zxbx (cheats)
        }
    }

    hideZxbx() {
        this.setState({
            ZxbxIsShowing: false
        }, function () {
            console.log(this.state.ZxbxIsShowing);
        })
    }

    showZxbx() {
        this.setState({ ZxbxIsShowing: true })
    }

    // 決定整個Jghx是否要顯示 <--為了顯示、隱藏小map而做此功能
    hideWholeJghx() {
        this.setState({
            jghxDisplay: { display: 'none' }
        })
    }

    showWholeJghx() {
        this.setState({
            jghxDisplay: { display: '' }
        })
    }

    handleMapClick() {
        this.showZxbx();
        this.hideWholeJghx();
    }

    handleMapBackClick() {
        this.hideZxbx();
        this.showWholeJghx();
    }

    render() {
        return (
            <div>
                {(this.state.ZxbxIsShowing) ? (<Zxbx handleMapBackClick={(e) => this.handleMapBackClick(e)}></Zxbx>) : null}
                <div id="JghxContainer" style={this.state.jghxDisplay}>
                    {/*<div id="JghxContainer" style={{display: 'none'}}>*/}
                    <div className="content">

                        <div className="header">
                            <img src={require("../../images/zshx/TXT/w1-TXT.png")} alt="" />
                        </div>

                        {/*3D預覽圖區*/}
                        <div className="showRoom">

                            <div className="combine">
                                {/* 顯示&隱藏 拆分/合併按鈕 */}
                                <img id="combine" onClick={(e) => this.changeThreeDFloor("1F", e)} className={(this.state.threeDViewWay === "viewWaySwlp") ? "noDisplay" : ""} src={require("../../images/btn/he.png")} alt="" />       {/* 此按下去會拆分，目前圖示為合併 */}
                                <img id="combine" onClick={(e) => this.changeThreeDViewWay("viewWaySwsp")} className={(this.state.threeDViewWay !== "viewWaySwlp") ? "noDisplay" : ""} src={require("../../images/btn/fen.png")} alt="" />       {/* 此按下去會合併，目前圖示為拆分 */}
                            </div>

                            {/*樓層選擇*/}
                            <div className={"floorChoice" + ((this.state.threeDViewWay === "viewWaySwlp") ? "" : " noDisplay")} id="floorOption">

                                {/* <a id="2F" href="#" onClick={this.changeThreeDFloor}大概等於下面這行的寫法，只少了傳遞數值 */}
                                <a id="2F" href="#" onClick={(e) => this.changeThreeDFloor("2F", e)}
                                    className={"menu-item blue animated slideInRight" + ((this.state.threeDFloor === "2F") ? " choosen" : "")}>2F</a>
                                <a id="1F" href="#" onClick={(e) => this.changeThreeDFloor("1F", e)}
                                    className={"menu-item green animated slideInRight" + ((this.state.threeDFloor === "1F") ? " choosen" : "")}>1F</a>
                                <a id="-1F" href="#" onClick={(e) => this.changeThreeDFloor("-1F", e)}
                                    className={"menu-item red animated slideInRight" + ((this.state.threeDFloor === "-1F") ? " choosen" : "")}>-1F</a>
                                {/*<a href="#" className="menu-item blue"> <i className="fa fa-anchor"></i> </a>
                                <a href="#" className="menu-item green"> <i className="fa fa-coffee"></i> </a>
                            <a href="#" className="menu-item red"> <i className="fa fa-heart"></i> </a>*/}
                            </div>
                            <Iframe id="threeD" src={"http://hvr.isunupcg.com/james/cuihu-optimize/" + this.state.threeDSrc + ".html"} frameBorder="0"></Iframe>
                        </div>

                        {/** 小型地圖 */}
                        <div className="map">
                            <a onClick={() => this.handleMapClick()}><img id="map" src={(this.state.threeDBuilding === "thy") ? (require("../../images/zshx/map/bjt-w1.png")) : (require("../../images/zshx/map/bjt-q1.png"))} alt="" /></a>
                        </div>



                        {/*選單*/}
                        <div className="options">

                            {/*看房方式*/}
                            <div className="viewWay">
                                <div className="animated slideInUp">
                                    <div className="viewWayBg"><a><img id="viewWaySwsp" onClick={(e) => this.changeThreeDViewWay("viewWaySwsp")}
                                        src={require("../../images/btn/swsp.png")} alt="" /></a>
                                        <div id="swspViewWayIndicater" className={"viewWayIndicater " + ((this.state.threeDViewWay === "viewWaySwsp") ? "" : "noDisplay")}></div>
                                    </div>
                                </div>
                                <div className="animated slideInUp">
                                    <div className="viewWayBg"><a><img id="viewWaySwlp" onClick={(e) => this.changeThreeDViewWay("viewWaySwlp")}
                                        src={require("../../images/btn/swlp.png")} alt="" /></a>
                                        <div id="swlpViewWayIndicater" className={"viewWayIndicater " + ((this.state.threeDViewWay === "viewWaySwlp") ? "" : "noDisplay")}></div>
                                    </div>
                                </div>
                                <div className="animated slideInUp">
                                    <div className="viewWayBg"><a><img id="viewWayQjkf" onClick={(e) => this.changeThreeDViewWay("viewWayQjkf")}
                                        src={require("../../images/btn/qjkf.png")} alt="" /></a>
                                        <div id="qjkfViewWayIndicater" className={"viewWayIndicater " + ((this.state.threeDViewWay === "viewWayQjkf") ? "" : "noDisplay")}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="houseStyle">
                                <ul>
                                    {/*桃花源/海棠苑*/}
                                    <li><img id="thy" onClick={(e) => this.changeThreeDBuilding("thy")} src={require("../../images/btn/thy.png")} alt="" /></li>
                                    <li><img id="hty" onClick={(e) => this.changeThreeDBuilding("hty")} src={require("../../images/btn/hty.png")} alt="" /></li>
                                    {/*金箭頭*/}
                                    <img id="thy-indicate" onClick={(e) => this.changeThreeDBuilding("thy")} className={(this.state.threeDBuilding === "thy") ? "" : "unVisible"} src={require("../../images/btn/toh.png")} alt="" />
                                    <img id="hty-indicate" onClick={(e) => this.changeThreeDBuilding("hty")} className={(this.state.threeDBuilding === "hty") ? "" : "unVisible"}
                                        src={require("../../images/btn/toh.png")} alt="" />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <iframe id="panomera" src={"http://hvr.isunupcg.com/james/cuihu-optimize/qj/" + this.state.panoramaCode + "/pano/index.html"} frameborder="0" className={(this.state.panoramaShowing) ? "" : "noDisplay"}></iframe>

                    {/*全景和返回鍵*/}
                    <div id="getBack" className={"getBack" + ((this.state.panoramaShowing) ? "" : " noDisplay")} onClick={(e) => this.closePanorama()}>
                    </div>

                    <div className={"qjList " + ((this.state.threeDViewWay === "viewWayQjkf") ? "" : "noDisplay")}>
                        <ul>
                            <li><img id="jt" src={require("../../images/fshx/swsd/jt.png")} onClick={(e) => this.changePanoramaSrc("41")} alt="" /></li>
                            <li><img id="jt" src={require("../../images/fshx/swsd/jt.png")} onClick={(e) => this.changePanoramaSrc("41")} alt="" /></li>
                            <li><img id="qp" src={require("../../images/fshx/swsd/qp.png")} onClick={(e) => this.changePanoramaSrc("40")} alt="" /></li>
                            <li><img id="yl" src={require("../../images/fshx/swsd/yl.png")} onClick={(e) => this.changePanoramaSrc("42")} alt="" /></li>
                            <li><img id="js" src={require("../../images/fshx/swsd/js.png")} onClick={(e) => this.changePanoramaSrc("43")} alt="" /></li>
                            <li><img id="yj" src={require("../../images/fshx/swsd/yj.png")} onClick={(e) => this.changePanoramaSrc("44")} alt="" /></li>
                            <li><img id="kt" src={require("../../images/fshx/swsd/kt.png")} onClick={(e) => this.changePanoramaSrc("45")} alt="" /></li>
                            <li><img id="ct" src={require("../../images/fshx/swsd/ct.png")} onClick={(e) => this.changePanoramaSrc("46")} alt="" /></li>
                            <li><img id="mt" src={require("../../images/fshx/swsd/mt.png")} onClick={(e) => this.changePanoramaSrc("52")} alt="" /></li>
                            <li><img id="ws" src={require("../../images/fshx/swsd/ws.png")} onClick={(e) => this.changePanoramaSrc("48")} alt="" /></li>
                            <li><img id="fm" src={require("../../images/fshx/swsd/fm.png")} onClick={(e) => this.changePanoramaSrc("49")} alt="" /></li>
                            <li><img id="cw" src={require("../../images/fshx/swsd/cw.png")} onClick={(e) => this.changePanoramaSrc("50")} alt="" /></li>
                            <li><img id="zl" src={require("../../images/fshx/swsd/zl.png")} onClick={(e) => this.changePanoramaSrc("51")} alt="" /></li>
                            <li><img id="ym" src={require("../../images/fshx/swsd/ym.png")} onClick={(e) => this.changePanoramaSrc("55")} alt="" /></li>
                            <li><img id="jt" src={require("../../images/fshx/swsd/jt.png")} onClick={(e) => this.changePanoramaSrc("53")} alt="" /></li>
                            <li><img id="zw" src={require("../../images/fshx/swsd/zw.png")} onClick={(e) => this.changePanoramaSrc("54")} alt="" /></li>
                        </ul>
                        <div className="close" onClick={(e) => this.changeThreeDViewWay("viewWaySwlp")}></div>
                    </div>


                </div>
            </div>
        )
    }
}

// export { Jghx }
export default Jghx