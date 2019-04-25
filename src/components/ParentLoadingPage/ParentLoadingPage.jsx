import React from "react"
import './ParentLoadingPage.css'

class ParentLoadingPage extends React.Component {
    render() {
        return(
            <div>
                <div id="loaddingBg">
                    <div className="companyLogo1"></div>
                    <div className="loading" ></div>
                    <div className="companyLogo2"></div>
                </div>
            </div>
        )
    }
}

export default ParentLoadingPage