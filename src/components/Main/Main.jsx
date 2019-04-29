import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

// 本頁的CSS
// import "./Main.css"

// 我自訂的所有分頁 (components)
import { MainLoadingPage } from "../MainLoadingPage"
import { FirstChoicePage } from "../FirstChoicePage"
import { Xmjs } from "../Xmjs"
import { Jgzx } from "../Jgzx"
import { NavigationBar } from "../NavigationBar"


// redux
// import { connect } from 'react-redux'
// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../reducers/index.jsx'
// 定義Redux Store
const store = createStore(rootReducer)

// function mapStateToProps(state) {
//     return {
//         count: state.count
//     };
// }

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisTimeNeedLoadingPage: false,
        }
    }

    changeThisTimeNeedLoadingPage(trueorfalse) {
        this.setState({
            thisTimeNeedLoadingPage: trueorfalse
        }, console.log(this.state.thisTimeNeedLoadingPage))
    }

    // increment = () => {
    //     // this.props.dispatch({ type: "INCREMENT" });
    //     console.log(this.props);
    // }
    // decrement = () => {
    //     this.props.dispatch({ type: "DECREMENT" });
    // }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter id="BrowserRouterContainer">
                    <div id='MainContainer'>
                        {/* <div className="count">{this.state.count}{"\b <<-"}</div>
                    <button onClick={this.increment} style={{width: '50px', height: '50px'}}>-</button>
                    <button onClick={this.decrement} style={{width: '50px', height: '50px'}}>+</button> */}
                        {/* <MainLoadingPage title="最前面的載入畫面" /> */}
                        {/* <FirstChoicePage title="第一頁四格選單" /> */}
                        {/* <Xmjs title="項目介紹" /> */}
                        {/* <Jgzx title="景觀展示" /> */}
                        <NavigationBar title="導行列" />
                        {/* <NavigationBar title="導行列"/> */}
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

// -----------REDUX START--------------



// export default connect(mapStateToProps)(Main);

// -----------REDUX END--------------

export { Main };