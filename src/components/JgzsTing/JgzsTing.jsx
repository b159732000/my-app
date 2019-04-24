import React from 'react'
import './JgzsTing.css'

class JgzsTing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                <div id="JgzsHuiContainer">
                    <div class="getBack"><a onClick={() => this.props.changeVideoIsShowing("JgzsHui", false)}></a></div>

                    <div class="content">
                        <div class="vidoe">
                            <video width="100%" height="100%" controls="controls" x5-vedeo-player-type="h5" autoplay="autoplay"
                                loop="loop" type="video/mp4" src={require("../../movie/02.mp4")}></video>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export { JgzsTing }