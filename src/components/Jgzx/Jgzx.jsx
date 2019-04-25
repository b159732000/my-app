import React from "react"
import { JgzsTing } from '../JgzsTing'
import { JgzsHui } from '../JgzsHui'

// 本頁的CSS
import "./Jgzx.css"


class Jgzx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoIsShowing: false,
            JgzxContainerIsShowing: true,
        }
    }

    changeVideoIsShowing(videoSelected, show) {
        if (show) {     //顯示選取的video，同時隱藏本選單頁
            this.setState({
                videoIsShowing: videoSelected
            });
            this.showJgzxContainer(false)
        } else {     //隱藏video，同時顯示本選單頁
            this.setState({
                videoIsShowing: ""
            })
            this.showJgzxContainer(true)
        }
        console.log(this.state);
    }

    showJgzxContainer(showOrNot) {
        this.setState({
            JgzxContainerIsShowing: showOrNot
        })
    }

    render() {
        return (
            <div>

                {(this.state.videoIsShowing === "JgzsHui")?(<JgzsHui changeVideoIsShowing={() => this.changeVideoIsShowing()}></JgzsHui>):null}
                {(this.state.videoIsShowing === "JgzsTing")?(<JgzsTing changeVideoIsShowing={() => this.changeVideoIsShowing()}></JgzsTing>):null}
                {/*<JgzsHui changeVideoIsShowing={() => this.changeVideoIsShowing()}></JgzsHui>*/}

                <div id="JgzxContainer" style={(this.state.JgzxContainerIsShowing)?({display: ""}):({display: "none"})}>

                    <div className="content">

                        <div className="position">
                            <div>
                                <a onClick={() => this.changeVideoIsShowing("JgzsHui", true)}>
                                    <img src={require("../../images/tingyuan.png")} alt="" />
                                    <img className="tag tag1" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="position">
                            <div>
                                <a onClick={() => this.changeVideoIsShowing("JgzsTing", true)}>
                                    <img src={require("../../images/huiliang.png")} alt="" />
                                    <img className="tag tag2" alt="" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        )
    }
}

export default Jgzx
// export { Jgzx };