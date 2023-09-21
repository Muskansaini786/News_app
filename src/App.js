import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 10;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }
  setProgress=(progress)=> {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height= {3}
        color='#f11946'
        progress={this.state.progress}
          />
          <Navbar />
          <Routes> 
            <Route exact  path="/" element={<News key="general" setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general"/>}/>
            <Route exact path="/business" element={<News key="business"setProgress={this.setProgress} pageSize={this.pageSize}apiKey={this.apiKey}  country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News key="general" setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general" />}/>
            <Route exact path="/health" element={<News key="health"setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey}  country="in" category="health" />}/>
            <Route exact path="/science" element={<News key="science" setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="science" />}/>
            <Route exact path="/sports" element={<News key="sports" setProgress={this.setProgress} pageSize={this.pageSize}apiKey={this.apiKey}  country="in" category="sports" />}/>
            <Route exact path="/technology" element={<News Key="technology" setProgress={this.setProgress}pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="technology" />}/>
          </Routes>
      </Router >
    </div >
    )
  }
}
