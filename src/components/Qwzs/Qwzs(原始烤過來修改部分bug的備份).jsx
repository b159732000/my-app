import React from 'react';

import "./Qwzs.css"

class Qwzs extends React.Component {
    render() {
        return (
            <div>
                <div className="QwzsContainer">

                    <div className="content hidden">

                        {/* <img id="topChoiceImg2" className="" src={require("./images/topqw.png")} alt="" /> */}

                        {/*  四大灣區  */}
                        <div className="fourLakes">
                            <div className="location">
                                <ul>
                                    <li><img src={require("../../images/qwzs/icon1.png")} alt="" /></li>
                                    <li><img src="./images/qwzs/icon1.png" alt="" /></li>
                                    <li><img src="./images/qwzs/icon2.png" alt="" /></li>
                                    <li><img src="./images/qwzs/icon3.png" alt="" /></li>
                                </ul>
                                <div className="myLocationAndDiscription">
                                    <img src="./images/qwzs/icon4.png" alt="" />
                                </div>
                            </div>
                        </div>

                        {/*  交通樞紐  */}
                        <div className="traffic" style={{ display: "none" }}>
                            <div className="centerCircleDiv">
                                <img src="./images/swjtroll.png" alt="" />
                            </div>
                        </div>

                        {/*  唐家灣片區  */}
                        <div className="tjw" id="tjw" style={{ display: "none" }}>
                            <i className="icon1"></i>
                            <i className="icon2" style={{ display: "none" }}></i>
                            <i className="icon3" style={{ display: "none" }}></i>
                            <i className="icon4" style={{ display: "none" }}></i>
                            <i className="icon5" style={{ display: "none" }}></i>
                            <i className="icon main animated bounceIn"></i>

                            <div className="toList">
                                <ul>
                                    <li><img onClick="changeTravelDestination('to1')" id="to1" src="./images/to1ed.png" alt="" /></li>
                                    <li><img onClick="changeTravelDestination('to2')" id="to2" src="./images/to2.png" alt="" /></li>
                                    <li><img onClick="changeTravelDestination('to3')" id="to3" src="./images/to3.png" alt="" /></li>
                                    <li><img onClick="changeTravelDestination('to4')" id="to4" src="./images/to4.png" alt="" /></li>
                                    <li><img onClick="changeTravelDestination('to5')" id="to5" src="./images/to5.png" alt="" /></li>
                                </ul>
                            </div>
                        </div>

                        {/*  項目配套  */}
                        <div className="xmpt">
                            <ul>
                                <i className="icon1"></i>
                                <i className="icon2"></i>
                                <i className="icon3"></i>
                                <i className="icon4"></i>
                                <i className="icon5"></i>
                                <i className="icon6"></i>
                                <i className="icon7"></i>
                                <i className="icon8"></i>
                                <i className="iconMain animated rubberBand"></i>
                            </ul>
                        </div>


                        {/*  右側Menu  */}
                        <div className="secondMenu">
                            <ul>
                                {/*  <li><a onClick="changeToActiveTab('w1')"><img id="w1" src="./images/1ed.png" alt=""></a></li>  */}
                                <li><a onClick="changeToActiveTab('w1')"><img id="w1" src="./images/1ed.png" alt="" /></a></li>
                                <li><a onClick="changeToActiveTab('w2')"><img id="w2" src="./images/w2.png" alt="" /></a></li>
                                <li><a onClick="changeToActiveTab('w3')"><img id="w3" src="./images/w3.png" alt="" /></a></li>
                                <li><a onClick="changeToActiveTab('w4')"><img id="w4" src="./images/w4.png" alt="" /></a></li>
                                <li><a onClick="changeToActiveTab('w5')"><img id="w5" src="./images/w5.png" alt="" /></a></li>
                            </ul>
                        </div>

                    </div>

                    {/*  全景和返回鍵  */}
                    <div id="getBack" className="getBack" style={{ display: "none" }}>
                        <a onClick="closePanomera()"></a>
                    </div>
                    <iframe id="panomera" src="./qj/39/pano/index.html" frameborder="0" style={{ display: "none" }}></iframe>



                </div>
            </div>
        )
    }
}

export { Qwzs }

