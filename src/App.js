// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category='general' />}></Route>
            <Route path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category='business' />}></Route>
            <Route path="/entertainment" element={<News apiKey={this.apiKey} key="" pageSize={this.pageSize} country="in" category='entertainment' />}></Route>
            <Route path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category='general' />}></Route>
            <Route path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category='health' />}></Route>
            <Route path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category='science' />}></Route>
            <Route path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category='sports' />}></Route>
            <Route path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category='technology' />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}
