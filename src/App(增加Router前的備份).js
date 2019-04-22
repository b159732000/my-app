import React, { Component } from 'react';

// 第三方庫
import './styles/Animate.css';
import { Animated } from "react-animated-css";

// Router的部分
import { BrowserRouter } from 'react-router-dom';

// CSS
import './styles/main.css';
import './styles/index.css';
import './App.css';

// 自定義組建
import MainLoadingPage from './components/MainLoadingPage/MainLoadingPage';   // 指向檔案本身，但檔名省略.js

class App extends Component {

  constructor(props) {
  }

  // 在頁面載入完畢後執行
  componentDidMount() {
  }

  render() {
    return (
      <div className="App" style={{}}>

      </div>
    );
  }
}

export default App;
