import React from "react"
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { TransitionGroup, CSSTransition, CSSTransitionGroup } from "react-transition-group"
// import ImagesLoaded from 'react-images-loaded'
// import routers from '../../router/index'

// 本頁的CSS
import "./NavigationBar.css"
import "./NavigationBar.scss"
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
        // return <ChildLoadingPage></ChildLoadingPage>;
    } else {
        // return <ChildLoadingPage></ChildLoadingPage>;
    }
};

const FirstChoicePage = Loadable({
    loader: () => import('../FirstChoicePage/FirstChoicePage.jsx'),
    loading: Loading,
    timeout: 25000,
    delay: 200
})
const Xmjs = Loadable({
    loader: () => import('../Xmjs/Xmjs.jsx'),
    loading: Loading,
    timeout: 25000,
    delay: 200
});
const Qwzs = Loadable({
    loader: () => import('../Qwzs/Qwzs.jsx'),
    loading: Loading,
    timeout: 25000,
    delay: 200
});
const Jghx = Loadable({
    loader: () => import('../Jghx/Jghx'),
    loading: Loading,
    timeout: 25000,
    delay: 200
});
const Jgzx = Loadable({
    loader: () => import('../Jgzx/Jgzx'),
    loading: Loading,
    timeout: 25000,
    delay: 200
});

class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NavigationBarIsShowing: true,
            thisTimeShowLoadingPage: thisTimeNeedLoadingPage,
            showLoadingPageStyle: {
                display: '',
            },
            loadingPageList: ["1"],
            showLoadingPage: false,
            companyLogoTextListClassName: [
                {key:"lake", classNameList: ["lake ", "unfill "]},
                {key:"wood", classNameList: ["wood ", "fill "]},
                {key:"hills", classNameList: ["hills ", "fill "]},
            ]
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
                showLoadingPageStyle: { display: '' },
                loadingPageList: ["1"],
                showLoadingPage: true
            })
        } else {
            this.closeLoadingPage()
        }
    }
    // 300毫秒後執行上述詢問及顯示程序，並在五秒後關閉Loading Page
    delayToCheckLoadingPageShowsThisTime() {
        setTimeout(() => {
            this.askLoadableToChangeLoadingPageShowing()
            console.log("經詢問，這次需不需要顯示Loading Page的結果是 = " + thisTimeNeedLoadingPage)
        }, 350);
        setTimeout(() => {
            this.closeLoadingPage()
        }, 5000)
    }

    // 關閉Loading Page
    closeLoadingPage() {
        setTimeout(() => {
            this.setState({
                showLoadingPageStyle: { display: 'none' },
                loadingPageList: [],
                showLoadingPage: false
            })
        }, 1000);
        console.log(this.state.showLoadingPageStyle)
    }

    // 每當按下導行列按鈕時
    handlePageButtonOnClick() {
        setThisTimeNeedLoadingPage(false);      //設定預設值，此頁不需要Loading Page
        this.delayToCheckLoadingPageShowsThisTime();        //三百毫秒後詢問Loadable這次是否需要Loading Page，要就顯示反之亦然，並在3秒鐘後關閉Loading Page
    }
    // 第一次渲染時
    componentWillMount() {
        setThisTimeNeedLoadingPage(false);      //設定預設值，此頁不需要Loading Page
        this.delayToCheckLoadingPageShowsThisTime();        //三百毫秒後詢問Loadable這次是否需要Loading Page，要就顯示反之亦然，並在3秒鐘後關閉Loading Page
    }

    // Company Logo 跑馬燈填充與否
    handelCompanyLogoClick(event) {

        // 對Company Logo每一個詞都做動作
        for ( var i = 0 ; i < this.state.companyLogoTextListClassName.length ; i += 1 ) {
            
            if ( this.state.companyLogoTextListClassName[i].classNameList.indexOf("fill") >= 0 ) {   //如果這一個詞的ClassName List有包含"fill"
            console.log("item " + i + " 包含 fill");
            }
        }

        this.setState({
            // companyLogoTextListClassName[0]: ""
        })

        // console.log(event.target.className);
    }

    render() {
        return (
            <div>
                <Router>
                    <Route path="/james/cuihu-react-redux/" exact component={FirstChoicePage} />
                    <Route render={({ location }) => (
                        /*路徑指定/代表根目錄，所以預設就會渲染Home組件，
                        而後方有/about的話會渲染About*/

                        /*<Route path="/james/cuihu-react-redux/ChildLoadingPage" exact component={ChildLoadingPage} />*/
                        <TransitionGroup>

                            <CSSTransition
                                key={location.key}
                                in={true}
                                timeout={{ enter: 300, exit: 300 }}
                                classNames="fade">
                                <section className="route-section">
                                    <Switch key={location.key} location={location}>
                                        <Route path="/james/cuihu-react-redux/Xmjs" component={Xmjs} />
                                        <Route path="/james/cuihu-react-redux/Qwzs" component={Qwzs} />
                                        <Route path="/james/cuihu-react-redux/Jghx" component={Jghx} />
                                        <Route path="/james/cuihu-react-redux/Jgzx" component={Jgzx} />
                                    </Switch>
                                    <div></div>
                                </section>
                            </CSSTransition>

                        </TransitionGroup>
                    )} />
                    
                        <CSSTransition
                            in={this.state.showLoadingPage}
                            classNames="child-loading-page-transition"
                            timeout={400}
                            unmountOnExit
                            appear
                        >
                            <div><ChildLoadingPage></ChildLoadingPage></div>
                        </CSSTransition>

                        {/*<div id="companyLogo" onClick={(e) => this.handelCompanyLogoClick(e)}>
                            <span className={this.state.companyLogoTextListClassName[0]}>LAKE&nbsp;</span>
                            <span className={this.state.companyLogoTextListClassName[1]}>WOOD&nbsp;</span>
                            <span className={this.state.companyLogoTextListClassName[2]}>HILLS</span>
                    </div>*/}

                    <div id='NavigationBarContainer'>
                        <nav className="mainNav">
                            <ul className="mainNavUl">
                                <li id="buttonToXmjs" onClick={() => this.handlePageButtonOnClick()}><Link to="/james/cuihu-react-redux/Xmjs"><img src={require("../../images/xmjs.png")} alt="" /></Link></li>
                                {/*<li id="buttonToXmjs" onClick={() => setThisTimeNeedLoadingPage(false)}><Link to="/james/cuihu-react-redux/Xmjs"><img src={require("../../images/xmjs.png")} alt="" /></Link></li>*/}
                                <li id="buttonToQwzs" onClick={() => this.handlePageButtonOnClick()}><Link to="/james/cuihu-react-redux/Qwzs"><img src={require("../../images/qwzs.png")} alt="" /></Link></li>
                                <li id="buttonToJghx" onClick={() => this.handlePageButtonOnClick()}><Link to="/james/cuihu-react-redux/jghx"><img src={require("../../images/jghx.png")} alt="" /></Link></li>
                                <li id="buttonToJgzx" onClick={() => this.handlePageButtonOnClick()}><Link to="/james/cuihu-react-redux/Jgzx"><img src={require("../../images/jgzs.png")} alt="" /></Link></li>
                            </ul>
                        </nav>
                    </div>
                </Router>
            </div >

        )
    }
}

export { NavigationBar };