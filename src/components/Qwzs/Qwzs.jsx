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
            activeTab: "fourLakes",
            activeDestination: "to1"
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
            this.setState({showFourLakes: "", activeTab: "fourLakes"});
            break;
            case "traffic":
            this.setState({showTraffic: "", activeTab: "traffic"});
            break;
            case "tjw":
            this.setState({showTjw: "", activeTab: "tjw"});
            break;
            case "xmpt":
            this.setState({showXmpt: "", activeTab: "xmpt"});
            break;
            case "Qj":
            this.setState({showQj: "", activeTab: "Qj"});
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
    
    // 關閉全景並跳回第四頁
    closePanorama = () => {
        this.setState({
            showFourLakes: "hidden",
            showTraffic: "hidden",
            showTjw: "hidden",
            showXmpt: "",
            showQj: "hidden",
        })
        this.changeActiveTab("xmpt");
    }

    // 更換路線 (更新state中的路線)
    changeDestination(path) {
        this.setState({
            activeDestination: path
        }, function() {console.log(this.state.activeDestination);})
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
                            <i className="icon1" style={(this.state.activeDestination === "to1")?{}:{ display: "none" }}></i>
                            <i className="icon2" style={(this.state.activeDestination === "to2")?{}:{ display: "none" }}></i>
                            <i className="icon3" style={(this.state.activeDestination === "to3")?{}:{ display: "none" }}></i>
                            <i className="icon4" style={(this.state.activeDestination === "to4")?{}:{ display: "none" }}></i>
                            <i className="icon5" style={(this.state.activeDestination === "to5")?{}:{ display: "none" }}></i>
                            <i className="icon main animated bounceIn"></i>

                            <div className="toList">
                                <ul>
                                    <li><img onClick={()=>this.changeDestination('to1')} id="to1" src={(this.state.activeDestination === "to1")?require("../../images/to1ed.png"):require("../../images/to1.png")} alt="" /></li>
                                    <li><img onClick={()=>this.changeDestination('to2')} id="to2" src={(this.state.activeDestination === "to2")?require("../../images/to2ed.png"):require("../../images/to2.png")} alt="" /></li>
                                    <li><img onClick={()=>this.changeDestination('to3')} id="to3" src={(this.state.activeDestination === "to3")?require("../../images/to3ed.png"):require("../../images/to3.png")} alt="" /></li>
                                    <li><img onClick={()=>this.changeDestination('to4')} id="to4" src={(this.state.activeDestination === "to4")?require("../../images/to4ed.png"):require("../../images/to4.png")} alt="" /></li>
                                    <li><img onClick={()=>this.changeDestination('to5')} id="to5" src={(this.state.activeDestination === "to5")?require("../../images/to5ed.png"):require("../../images/to5.png")} alt="" /></li>
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
                                <li><a onClick={this.changeActiveTab.bind(this, "fourLakes")}><img id="w1" src={(this.state.activeTab === "fourLakes")?require("../../images/1ed.png"):require("../../images/w1.png")} alt="" /></a></li>
                                <li><a onClick={this.changeActiveTab.bind(this, "traffic")}><img id="w2" src={(this.state.activeTab === "traffic")?require("../../images/2ed.png"):require("../../images/w2.png")} alt="" /></a></li>
                                <li><a onClick={this.changeActiveTab.bind(this, "tjw")}><img id="w3" src={(this.state.activeTab === "tjw")?require("../../images/3ed.png"):require("../../images/w3.png")} alt="" /></a></li>
                                <li><a onClick={this.changeActiveTab.bind(this, "xmpt")}><img id="w4" src={(this.state.activeTab === "xmpt")?require("../../images/4ed.png"):require("../../images/w4.png")} alt="" /></a></li>
                                <li><a onClick={this.changeActiveTab.bind(this, "Qj")}><img id="w5" src={(this.state.activeTab === "Qj")?require("../../images/5ed.png"):require("../../images/w5.png")} alt="" /></a></li>
                            </ul>
                        </div>

                    </div>

                    {/*  全景和返回鍵  */}
                    <div className={"qj" + " " + this.state.showQj}>

                        <div id="getBack" className="getBack">
                            <a onClick={(this.closePanorama)}></a>
                        </div>
                        <Iframe id="panomera" url={this.panoramaUrl()} frameborder="0"></Iframe>
                        {/*<iframe id="panomera" src={require("../../qj/39/pano/index.html")} frameborder="0"></iframe>*/}
                    </div>

                </div>
            </div>
        )
    }
}

// export { Qwzs }
export default Qwzs 

