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

var thisTimeNeedLoadingPage = false;
function setThisTimeNeedLoadingPage(trueOrFalse) {
    thisTimeNeedLoadingPage = trueOrFalse;
    console.log("成功將thisTimeNeedLoadingPage預設為false, 實際thisTimeNeedLoadingPage = " + thisTimeNeedLoadingPage);
}

const Loading = ({ isLoading, error }) => {
    if (isLoading) {
        thisTimeNeedLoadingPage = true;
        console.log("Loadable判斷這次需要Loading，所以thisTimeNeedLoadingPage = " + thisTimeNeedLoadingPage)
        // return <ChildLoadingPage></ChildLoadingPage>;
        return <div></div>
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
    delay: 300
});

class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NavigationBarIsShowing: true,
            thisTimeShowLoadingPage: thisTimeNeedLoadingPage,
            showLoadingPageStyle: {
                display: ''
            }
        }
    }

    showNavigationBar() {
        this.setState({
            NavigationBarIsShowing: true,
        })
        this.props.changeThisTimeNeedLoadingPage(true);
        console.log("success");
    }

    hideNavigationBar() {
        this.setState({
            NavigationBarIsShowing: false,
        })
        this.props.changeThisTimeNeedLoadingPage(true);
        console.log("success");
    }

    // 詢問loadable我們這次需不需要顯示Loading Page，要的話就顯示
    askLoadableToChangeLoadingPageShowing() {
        if (thisTimeNeedLoadingPage) {
            this.setState({
                showLoadingPageStyle: {display: ''}
            })
        } else {
            this.setState({
                showLoadingPageStyle: {display: 'none'}
            })
        }
    }
    // 300毫秒後執行上述詢問及顯示程序
    delayToCheckLoadingPageShowsThisTime() {
        setTimeout(() => {
            this.askLoadableToChangeLoadingPageShowing()
        }, 300);
    }

    // 關閉Loading Page
    closeLoadingPage() {
        this.setState({
            showLoadingPageStyle: {display: 'none'}
        })
    }

    render() {
        return (
            <div>
                <Router id="BrowserRouterContainer">
                    {/*路徑指定/代表根目錄，所以預設就會渲染Home組件，
                    而後方有/about的話會渲染About*/}
                    <Route path="/james/cuihu-react/" exact component={FirstChoicePage} />
                    {/*<Route path="/james/cuihu-react/ChildLoadingPage" exact component={ChildLoadingPage} />*/}
                    <Route path="/james/cuihu-react/Xmjs" component={Xmjs} />
                    <Route path="/james/cuihu-react/Qwzs" component={Qwzs} />
                    <Route path="/james/cuihu-react/Jghx" component={Jghx} />
                    <Route path="/james/cuihu-react/Jgzx" component={Jgzx} />

                    {/*預設不顯示*/}
                    {/*300毫秒後，詢問loadable我們這次需不需要顯示Loading Page，要的話就顯示*/}
                    <div style={this.state.showLoadingPageStyle}><ChildLoadingPage ></ChildLoadingPage></div>

                    <div id='NavigationBarContainer'>
                        <nav className="mainNav">
                            <ul className="mainNavUl">
                                <li id="buttonToXmjs" onClick={() => setThisTimeNeedLoadingPage(false)}><Link to="/james/cuihu-react/Xmjs"><img src={require("../../images/xmjs.png")} alt="" /></Link></li>
                                <li id="buttonToQwzs" onClick={() => setThisTimeNeedLoadingPage(false)}><Link to="/james/cuihu-react/Qwzs"><img src={require("../../images/qwzs.png")} alt="" /></Link></li>
                                <li id="buttonToJghx" onClick={() => setThisTimeNeedLoadingPage(false)}><Link to="/james/cuihu-react/jghx"><img src={require("../../images/jghx.png")} alt="" /></Link></li>
                                <li id="buttonToJgzx" onClick={() => setThisTimeNeedLoadingPage(false)}><Link to="/james/cuihu-react/Jgzx"><img src={require("../../images/jgzs.png")} alt="" /></Link></li>
                            </ul>
                        </nav>
                    </div>
                </Router>

                {/*{
                    setTimeout(() => ((this.state.thisTimeShowLoadingPage == true) ? (<ChildLoadingPage></ChildLoadingPage>) : null), 300)}
                {
                    setTimeout(() => console.log(this.state.thisTimeShowLoadingPage), 300)
                }*/}

            </div>

        )
    }
}

export { NavigationBar };