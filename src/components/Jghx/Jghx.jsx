import React from 'react'

import "./Jghx.css"


class Jghx extends React.Component {
    render() {
        return (
            <div>
                <div id="JghxContainer">
                    <div className="content">

                        <div className="header">
                            <img src={require("../../images/zshx/TXT/w1-TXT.png")} alt="" />
                        </div>

                        {/*3D預覽圖區*/}
                        <div className="showRoom">

                            <div className="combine">
                                <img id="combine" onClick="switchCombineBreak()" src={require("../../images/btn/fen.png")} alt="" />
                            </div>

                            {/*樓層選擇*/}
                            <div className="floorChoice" id="floorOption">
                                <a id="2F" href="#" onclick="changeTo3DFloor(this.text)"
                                    className="menu-item blue animated slideInRight">2F</a>
                                <a id="1F" href="#" onclick="changeTo3DFloor(this.text)"
                                    className="menu-item green animated slideInRight">1F</a>
                                <a id="-1F" href="#" onclick="changeTo3DFloor(this.text)"
                                    className="menu-item red animated slideInRight">-1F</a>
                                {/*<a href="#" className="menu-item blue"> <i className="fa fa-anchor"></i> </a>
                                    <a href="#" className="menu-item green"> <i className="fa fa-coffee"></i> </a>
                                    <a href="#" className="menu-item red"> <i className="fa fa-heart"></i> </a>*/}
                            </div>
                            <iframe id="threeD" src="" frameborder="0"></iframe>

                        </div>


                        <div className="map">
                            <a href="./zxbx.html"><img id="map" src={require("../../images/zshx/map/bjt-w1.png")} alt="" /></a>
                        </div>



                        {/*選單*/}
                        <div className="options">

                            {/*看房方式*/}
                            <div className="viewWay">
                                <div className="animated slideInUp">
                                    <div className="viewWayBg"><a><img id="viewWaySwsp" onclick="changeViewWay(this)"
                                        src={require("../../images/btn/swsp.png")} alt="" /></a>
                                        <div id="swspViewWayIndicater" className="viewWayIndicater"></div>
                                    </div>
                                </div>
                                <div className="animated slideInUp">
                                    <div className="viewWayBg"><a><img id="viewWaySwlp" onclick="changeViewWay(this)"
                                        src={require("../../images/btn/swlp.png")} alt="" /></a>
                                        <div id="swlpViewWayIndicater" className="viewWayIndicater" style={{ display: "none" }}></div>
                                    </div>
                                </div>
                                <div className="animated slideInUp">
                                    <div className="viewWayBg"><a><img id="viewWayQjkf" onclick="changeViewWay(this)"
                                        src={require("../../images/btn/qjkf.png")} alt="" /></a>
                                        <div id="qjkfViewWayIndicater" className="viewWayIndicater" style={{ display: "none" }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="houseStyle">
                                <ul>
                                    {/*桃花源/海棠苑*/}
                                    <li><img id="thy" onClick="changeHouseStyle(this.id)" src={require("../../images/btn/thy.png")} alt="" /></li>
                                    <li><img id="hty" onClick="changeHouseStyle(this.id)" src={require("../../images/btn/hty.png")} alt="" /></li>
                                    {/*金箭頭*/}
                                    <img id="thy-indicate" onClick="changeHouseStyle(this.id)" src={require("../../images/btn/toh.png")} alt="" />
                                    <img id="hty-indicate" onClick="changeHouseStyle(this.id)" style={{ visibility: "hidden" }}
                                        src={require("../../images/btn/toh.png")} alt="" />
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*全景和返回鍵*/}
                    <div id="getBack" className="getBack" style={{ display: "none" }}>
                        <a onclick="closePanomera()"></a>
                    </div>

                    {/*<div className="panomeraLoading">

                                                        </div>*/}

                    <iframe id="panomera" src="" frameborder="0" style={{ display: "none" }}></iframe>





                    <div className="qjList" style={{ display: "none" }}>
                        <ul>
                            <li><img id="jt" src={require("../../images/fshx/swsd/jt.png")} onClick="openPanomera('41')" alt="" /></li>
                            <li><img id="qp" src={require("../../images/fshx/swsd/qp.png")} onClick="openPanomera('40')" alt="" /></li>
                            <li><img id="yl" src={require("../../images/fshx/swsd/yl.png")} onClick="openPanomera('42')" alt="" /></li>
                            <li><img id="js" src={require("../../images/fshx/swsd/js.png")} onClick="openPanomera('43')" alt="" /></li>
                            <li><img id="yj" src={require("../../images/fshx/swsd/yj.png")} onClick="openPanomera('44')" alt="" /></li>
                            <li><img id="kt" src={require("../../images/fshx/swsd/kt.png")} onClick="openPanomera('45')" alt="" /></li>
                            <li><img id="ct" src={require("../../images/fshx/swsd/ct.png")} onClick="openPanomera('46')" alt="" /></li>
                            <li><img id="mt" src={require("../../images/fshx/swsd/mt.png")} onClick="openPanomera('52')" alt="" /></li>
                            <li><img id="ws" src={require("../../images/fshx/swsd/ws.png")} onClick="openPanomera('48')" alt="" /></li>
                            <li><img id="fm" src={require("../../images/fshx/swsd/fm.png")} onClick="openPanomera('49')" alt="" /></li>
                            <li><img id="cw" src={require("../../images/fshx/swsd/cw.png")} onClick="openPanomera('50')" alt="" /></li>
                            <li><img id="zl" src={require("../../images/fshx/swsd/zl.png")} onClick="openPanomera('51')" alt="" /></li>
                            <li><img id="ym" src={require("../../images/fshx/swsd/ym.png")} onClick="openPanomera('55')" alt="" /></li>
                            <li><img id="jt" src={require("../../images/fshx/swsd/jt.png")} onClick="openPanomera('53')" alt="" /></li>
                            <li><img id="zw" src={require("../../images/fshx/swsd/zw.png")} onClick="openPanomera('54')" alt="" /></li>
                        </ul>
                        <div className="close" onclick="hideQjList()"></div>
                    </div>

                </div>
            </div>
        )
    }
}

export { Jghx }