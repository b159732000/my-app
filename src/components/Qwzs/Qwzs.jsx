import React from 'react';

import "./Qwzs.css"

import Iframe from 'react-iframe'

class Qwzs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFourLakes: "",
            showTraffic: "hidden",
            showTjw: "hidden",
            showXmpt: "hidden",
            showQj: "hidden",
        }
    }



    // 切換右側標籤頁
    changeActiveTab = (selectedButton) => {

        // 隱藏所有頁面
        this.setState({
            showFourLakes: "hidden",
            showTraffic: "hidden",
            showTjw: "hidden",
            showXmpt: "hidden",
            showQj: "hidden",
            })

        // 顯示點擊的頁面
        switch (selectedButton) {
            case "fourLakes":
            this.setState({showFourLakes: ""});
            break;
            case "traffic":
            this.setState({showTraffic: ""});
            break;
            case "tjw":
            this.setState({showTjw: ""});
            break;
            case "xmpt":
            this.setState({showXmpt: ""});
            break;
            case "Qj":
            this.setState({showQj: ""});
            break;
            default:
            break;
        }
    }



    // 增加/刪除 Panorama Url
    panoramaUrl = () => {
        if (this.state.showQj == "") {
            return "http://hvr.isunupcg.com/james/cuihu-optimize/qj/39/pano/index.html";
        } else {
            return null;
        }
    }


    closePanorama = () => {
        this.setState({
            showFourLakes: "hidden",
            showTraffic: "hidden",
            showTjw: "hidden",
            showXmpt: "",
            showQj: "hidden",
        })
        console.log("success");
    }

    render() {
        return (
            <div>
                <div id="QwzsContainer">

                    <div className="content">

                        {/* <img id="topChoiceImg2" className="" src={require("./images/topqw.png")} alt="" /> */}

                        {/*  四大灣區  */}
                        <div className={"fourLakes" + " " + this.state.showFourLakes}>
                            <div className="location">
                                <ul>
                                    <li><img src={require("../../images/qwzs/icon1.png")} alt="" /></li>
                                    <li><img src={require("../../images/qwzs/icon2.png")} alt="" /></li>
                                    <li><img src={require("../../images/qwzs/icon3.png")} alt="" /></li>
                                </ul>
                                <div className="myLocationAndDiscription">
                                    <img src={require("../../images/qwzs/icon4.png")} alt="" />
                                </div>
                            </div>
                        </div>

                        {/*  交通樞紐  */}
                        <div className={"traffic" + " " + this.state.showTraffic}>
                            <div className="centerCircleDiv">
                                <img src={require("../../images/swjtroll.png")} alt="" />
                            </div>
                        </div>

                        {/*  唐家灣片區  */}
                        <div className={"tjw" + " " + this.state.showTjw} id="tjw">
                            <i className="icon1"></i>
                            <i className="icon2" style={{ display: "none" }}></i>
                            <i className="icon3" style={{ display: "none" }}></i>
                            <i className="icon4" style={{ display: "none" }}></i>
                            <i className="icon5" style={{ display: "none" }}></i>
                            <i className="icon main animated bounceIn"></i>

                            <div className="toList">
                                <ul>
                                    <li><img onClick="changeTravelDestination('to1')" id="to1" src={require("../../images/to1ed.png")} alt="" /></li>
                                    <li><img onClick="changeTravelDestination('to2')" id="to2" src={require("../../images/to2.png")} alt="" /></li>
                                    <li><img onClick="changeTravelDestination('to3')" id="to3" src={require("../../images/to3.png")} alt="" /></li>
                                    <li><img onClick="changeTravelDestination('to4')" id="to4" src={require("../../images/to4.png")} alt="" /></li>
                                    <li><img onClick="changeTravelDestination('to5')" id="to5" src={require("../../images/to5.png")} alt="" /></li>
                                </ul>
                            </div>
                        </div>

                        {/*  項目配套  */}
                        <div className={"xmpt" + " " + this.state.showXmpt}>
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
                                {/*  <li><a onClick="changeToActiveTab('w1')"><img id="w1" src={require("../../images/1ed.png")} alt=""></a></li>  */}
                                <li><a onClick={this.changeActiveTab.bind(this, "fourLakes")}><img id="w1" src={require("../../images/1ed.png")} alt="" /></a></li>
                                <li><a onClick={this.changeActiveTab.bind(this, "traffic")}><img id="w2" src={require("../../images/w2.png")} alt="" /></a></li>
                                <li><a onClick={this.changeActiveTab.bind(this, "tjw")}><img id="w3" src={require("../../images/w3.png")} alt="" /></a></li>
                                <li><a onClick={this.changeActiveTab.bind(this, "xmpt")}><img id="w4" src={require("../../images/w4.png")} alt="" /></a></li>
                                <li><a onClick={this.changeActiveTab.bind(this, "Qj")}><img id="w5" src={require("../../images/w5.png")} alt="" /></a></li>
                            </ul>
                        </div>

                    </div>

                    {/*  全景和返回鍵  */}
                    <div className={"qj" + " " + this.state.showQj}>

                        <div id="getBack" className="getBack">
                            <a onClick={this.closePanorama}></a>
                        </div>
                        <Iframe id="panomera" url={this.panoramaUrl()} frameborder="0"></Iframe>
                        {/*<iframe id="panomera" src={require("../../qj/39/pano/index.html")} frameborder="0"></iframe>*/}
                    </div>


                </div>
            </div>
        )
    }
}

export { Qwzs }

