import React, { Component } from 'react';

import '../../styles/main.css';
import './MainLoadingPage.css';

class MainLoadingPage extends React.Component {

  componentWillUnmount() {
    console.log("MainLoadingPage is Unmount, console.log by MainLoadingPage itself.")
  }

  render() {
    return (
      <div>
      
        <div id="mainLoadingPage" style={{height: '100vh', backgroundImage: 'url(' + require('../../images/loadingBg.jpg') + ')', }}>
          <div className="companyLogo"
            style={{width: '8rem', height: '1.5rem', position: 'absolute',	top:'22%',left: '50%',marginLeft: '-4rem', background: "url(" + require('../../images/txt.png') + ") no-repeat center",backgroundSize:'100% 100%'}}>
          </div>
          <div className="loading"
            style={{width: '2.5rem',height: '2.3rem',position: 'absolute',top: '45%',left: '50%',margin: '-1.5rem',background: 'url(' + require('../../images/loading.png') + ") no-repeat center",backgroundSize:'100% 100%', animation: 'running1 1.8s linear infinite',}}>
          </div>
          <div className="companyLogo" style={{width: '7rem', height: '5rem', position: 'absolute', bottom: '9%', left: '50%', marginLeft: '-3.5rem', background: 'url(' + require('../../images/companyLogo.png') + ') no-repeat right', backgroundSize: '180% 100%',}}></div>
        </div>
      </div>
    );
  }
}

export {MainLoadingPage};