import React from 'react'
import './zxbx.css'

class Zxbx extends React.Component {

    render() {
        return (
            <div>

                <div id="ZxbxContainer">

                    <div class="getBack" onClick={(e) => this.props.handleMapBackClick(e)}></div>

                    <div class="content">
                        <div class="upper">
                            <div class="villaStyle"><img src={require('../../images/zshx/zs.png')} alt="" /></div>
                            <div class="map"><img id="map" src={require("../../images/zshx/map/bjt-w1.png")} alt="" /></div>
                        </div>
                        <div class="downSide">

                            <div class="downSideUpper">
                                <div class="upperLeft">
                                    <div class="buildingStyle"><img src={require("../../images/zshx/king.png")} alt="" srcset="" /></div>
                                    <div class="buildingList">
                                        <div class="buildingCode up">
                                            <img id="w1" onClick="changeMap(this.id)" src={require("../../images/zshx/W1.png")} alt="" />
                                        </div>
                                        <div class="buildingCode down"></div>
                                    </div>
                                </div>
                                <div class="upperRight">
                                    <div class="buildingStyle"><img src={require("../../images/zshx/alone.png")} alt="" srcset="" /></div>
                                    <div class="buildingList">
                                        <div class="buildingCode up">
                                            <img id="q1" onClick="changeMap(this.id)" src={require("../../images/zshx/Q1.png")} alt="" />
                                            <img id="q2" onClick="changeMap(this.id)" src={require("../../images/zshx/Q2.png")} alt="" />
                                        </div>
                                        <div class="buildingCode down">
                                            <img id="q3" onClick="changeMap(this.id)" src={require("../../images/zshx/Q3.png")} alt="" />
                                            <img id="q4" onClick="changeMap(this.id)" src={require("../../images/zshx/q4.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="under">
                                <div class="buildingStyle"><img src={require("../../images/zshx/alone.png")} alt="" srcset="" /></div>
                                <div class="buildingList">
                                    <div class="buildingCode up">
                                        <img id="z1" onClick="changeMap(this.id)" src={require("../../images/zshx/z1.png")} alt="" />
                                        <img id="z1a" onClick="changeMap(this.id)" src={require("../../images/zshx/z1a.png")} alt="" />
                                        <img id="z2" onClick="changeMap(this.id)" src={require("../../images/zshx/z2.png")} alt="" />
                                        <img id="z3" onClick="changeMap(this.id)" src={require("../../images/zshx/z3.png")} alt="" />
                                        <img id="z4" onClick="changeMap(this.id)" src={require("../../images/zshx/z4.png")} alt="" />
                                        <img id="z5" onClick="changeMap(this.id)" src={require("../../images/zshx/z5.png")} alt="" />
                                    </div>
                                    <div class="buildingCode down">
                                        <img id="z5a" onClick="changeMap(this.id)" src={require("../../images/zshx/z5a.png")} alt="" />
                                        <img id="z6" onClick="changeMap(this.id)" src={require("../../images/zshx/z6.png")} alt="" />
                                        <img id="z6a" onClick="changeMap(this.id)" src={require("../../images/zshx/z6a.png")} alt="" />
                                        <img id="z7" onClick="changeMap(this.id)" src={require("../../images/zshx/z7.png")} alt="" />
                                        <img id="z7a" onClick="changeMap(this.id)" src={require("../../images/zshx/z7a.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export { Zxbx }