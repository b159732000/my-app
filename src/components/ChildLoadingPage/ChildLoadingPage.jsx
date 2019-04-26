import React from 'react'
import './ChildLoadingPage.css'



class ChildLoadingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberStopAt: 93,
            percentageAddOneDuration: 20,
            loadingPercentage: 0,
            childLoadingIsDone: false,
            centerLineStyle: {
                height: "20px"
            }
        }
    }

    updateLoadingPercentage() {
        var w = 0,
            thisTimeStopAt = this.state.numberStopAt + Math.random() * 10 - 5,
            t = setInterval(function () {
                if (w < thisTimeStopAt) {
                    w = w + 1;
                    var centerLineStyleHeight = (10 + w * 0.3 + 'px');
                    this.setState({
                        loadingPercentage: w,
                        centerLineStyle: {
                            height: centerLineStyleHeight
                        },
                    });
                }
                if (this.state.childLoadingIsDone) {
                    w = 100;
                    clearInterval(t);
                }
                if (w === 100) {
                    clearInterval(t);
                    w = 0;
                    this.setState({
                        childLoadingIsDone: true
                    })
                }
            }.bind(this), 50);
    }

    componentDidMount() {
        this.updateLoadingPercentage();
        console.log(this.props);
    }
    // componentWillUpdate() {
    //     this.updateLoadingPercentage();
    // }

    render() {
        return (
            <div id="ChildLoadingPageContainer">

                <div className="loadingAnimationPosition">
                    <div className="loadingAnimation">
                        <div className="leftWrapper">
                            <div className="leftWrapperInner">
                                <div className="loadingProgressText">{this.state.loadingPercentage + "%"}</div>
                                <div className="centerLineContainer">
                                    <div className="centerLine" style={this.state.centerLineStyle}></div>
                                </div>
                            </div>
                        </div>
                        <div className="loadingAnimationImg">
                            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ChildLoadingPage