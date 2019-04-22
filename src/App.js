// 本頁Router參考教學: http://www.tgf21.com/post/66849a10.html#routing
import React, { Component, propTypes} from 'react';

// 第三方庫
import './styles/Animate.css';
import { Animated } from "react-animated-css";

// Router的部分
import { Router } from 'react-router'
import routes from './routes.jsx'

// CSS
import './styles/main.css';
import './styles/index.css';
import './App.css';


class App extends Component {
  static propTypes = {
    routes: propTypes.object.isRequired,
    history: propTypes.object.isRequired
  }

  // class getter
  get content() {
    return (
      <Router
      routes={this.props.routes}
      history={this.props.history}/>
      )
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        {this.content}
      </div>
    );
  }
}

export default App;
