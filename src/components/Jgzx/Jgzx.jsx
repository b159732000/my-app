import React from "react"

// 本頁的CSS
import "./Jgzx.css"


class Jgzx extends React.Component {
    render() {
        return (
            <div>


                <div className="container hidden">

                    <div className="content">

                        <div className="position">
                            <div>
                                <a href="../../originalHTML/jgzsHui.html">
                                    <img src={require("../../images/tingyuan.png")} alt="" />
                                    <img className="tag" src={require("../../images/tingyuanp.png")} alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="position">
                            <div>
                                <a href="../../originalHTML/jgzsTing.html">
                                    <img src={require("../../images/huiliang.png")} alt="" />
                                    <img className="tag" src={require("../../images/huiliangp.png")} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        )
    }
}

export { Jgzx };