import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

// 本頁的CSS
import "./Main.css"

// 我自訂的所有分頁 (components)
import { MainLoadingPage } from "../MainLoadingPage"
import { FirstChoicePage } from "../FirstChoicePage"
import { Xmjs } from "../Xmjs"
import { Jgzx } from "../Jgzx"
import { NavigationBar } from "../NavigationBar"

class Main extends React.Component {
    render() {
        return (
            <BrowserRouter id="BrowserRouterContainer">
                <div id='MainContainer'>
                    {/* <MainLoadingPage title="最前面的載入畫面" /> */}
                    {/* <FirstChoicePage title="第一頁四格選單" /> */}
                    {/* <Xmjs title="項目介紹" /> */}
                    {/* <Jgzx title="景觀展示" /> */}
                    {/* <NavigationBar title="導行列" /> */}
                    <NavigationBar title="導行列" />
                </div>
            </BrowserRouter>
        )
    }
}

export { Main };