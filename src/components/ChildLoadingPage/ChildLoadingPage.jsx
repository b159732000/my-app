import React from 'react'
import './ChildLoadingPage.css'



class ChildLoadingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberStopAt: 93,
            percentageAddOneDuration: 20,
            loadingPercentage: 0,
            childLoadingIsDone: false
        }
    }

    updateLoadingPercentage() {
        var w = 0,
            t = setInterval(function () {
                if (w < this.state.numberStopAt) {
                    w = w + 1;
                    this.setState({
                        loadingPercentage: w
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
            }.bind(this), 10);
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
                    <div className="loadingProgressText">{this.state.loadingPercentage + "%"}</div>
                    <div className="centerLineContainer"><div className="centerLine"></div></div>
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