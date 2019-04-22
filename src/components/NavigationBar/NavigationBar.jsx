import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

// 本頁的CSS
import "./NavigationBar.css"

// 我自訂的所有分頁 (components)
import { Xmjs } from "../Xmjs"
import { Qwzs } from "../Qwzs"
import { Jghx } from '../Jghx';
import { Jgzx } from "../Jgzx"

class NavigationBar extends React.Component {
    render() {
        return (
            <BrowserRouter id="BrowserRouterContainer">
                <div id='NavigationBarContainer'>

                    <nav className="mainNav">
                        <ul className="mainNavUl">
                            <li id="buttonToXmjs"><Link to="/Xmjs"><img src={require("../../images/xmjs.png")} alt="" /></Link></li>
                            <li id="buttonToQwzs"><Link to="/Qwzs"><img src={require("../../images/qwzs.png")} alt="" /></Link></li>
                            <li id="buttonToJghx"><Link to="/jghx"><img src={require("../../images/jghx.png")} alt="" /></Link></li>
                            <li id="buttonToJgzx"><Link to="/Jgzx"><img src={require("../../images/jgzs.png")} alt="" /></Link></li>
                        </ul>
                    </nav>

                    {/*路徑指定/代表根目錄，所以預設就會渲染Home組件，
                    而後方有/about的話會渲染About*/}
                    <Route path="/Xmjs" component={Xmjs} />
                    <Route path="/Qwzs" component={Qwzs} />
                    <Route path="/Jghx" component={Jghx} />
                    <Route path="/Jgzx" component={Jgzx} />

                </div>
            </BrowserRouter>
        )
    }
}

export { NavigationBar };