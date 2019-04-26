import React from "react"
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
// import routers from '../../router/index'

// 本頁的CSS
import "./NavigationBar.css"
import ChildLoadingPage from '../ChildLoadingPage/ChildLoadingPage.jsx'

// 我自訂的所有分頁 (components)
// import { FirstChoicePage } from "../FirstChoicePage"
// import { Xmjs } from "../Xmjs"
// import { Qwzs } from "../Qwzs"
// import { Jghx } from '../Jghx'
// import { Jgzx } from "../Jgzx"

const Loading = ({ isLoading, error }) => {
    if (isLoading) {
        // return <div>Loading...</div>;
        return <ChildLoadingPage></ChildLoadingPage>;
    } else if (error) {
        return <ChildLoadingPage></ChildLoadingPage>;
    } else {
        return <ChildLoadingPage></ChildLoadingPage>;
    }
};

const FirstChoicePage = Loadable({
    loader: () => import('../FirstChoicePage/FirstChoicePage.jsx'),
    loading: Loading,
    timeout: 25000,
    delay: 300
})
const Xmjs = Loadable({
    loader: () => import('../Xmjs/Xmjs.jsx'),
    loading: Loading,
    timeout: 25000,
    delay: 300
});
const Qwzs = Loadable({
    loader: () => import('../Qwzs/Qwzs.jsx'),
    loading: Loading,
    timeout: 25000,
    delay: 300
});
const Jghx = Loadable({
    loader: () => import('../Jghx/Jghx'),
    loading: Loading,
    timeout: 25000,
    delay: 300
});
const Jgzx = Loadable({
    loader: () => import('../Jgzx/Jgzx'),
    loading: Loading,
    timeout: 25000,
    delay: 2000
});

class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NavigationBarIsShowing: true,
        }
    }

    showNavigationBar() {
        this.setState({
            NavigationBarIsShowing: true,
        })
    }

    hideNavigationBar() {
        this.setState({
            NavigationBarIsShowing: false,
        })
    }

    render() {
        return (
            <Router id="BrowserRouterContainer">
                {/*路徑指定/代表根目錄，所以預設就會渲染Home組件，
                    而後方有/about的話會渲染About*/}
                <Route path="/james/cuihu-react/" exact component={FirstChoicePage} />
                {/*<Route path="/james/cuihu-react/ChildLoadingPage" exact component={ChildLoadingPage} />*/}
                <Route path="/james/cuihu-react/Xmjs" component={Xmjs} />
                <Route path="/james/cuihu-react/Qwzs" component={Qwzs} />
                <Route path="/james/cuihu-react/Jghx" component={Jghx} />
                <Route path="/james/cuihu-react/Jgzx" component={Jgzx} />
                <div id='NavigationBarContainer'>
                    <nav className="mainNav">
                        <ul className="mainNavUl">
                            <li id="buttonToXmjs"><Link to="/james/cuihu-react/Xmjs"><img src={require("../../images/xmjs.png")} alt="" /></Link></li>
                            <li id="buttonToQwzs"><Link to="/james/cuihu-react/Qwzs"><img src={require("../../images/qwzs.png")} alt="" /></Link></li>
                            <li id="buttonToJghx"><Link to="/james/cuihu-react/jghx"><img src={require("../../images/jghx.png")} alt="" /></Link></li>
                            <li id="buttonToJgzx"><Link to="/james/cuihu-react/Jgzx"><img src={require("../../images/jgzs.png")} alt="" /></Link></li>
                        </ul>
                    </nav>
                </div>
            </Router>
        )
    }
}

export { NavigationBar };