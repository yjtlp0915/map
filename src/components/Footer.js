import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Map from './views/Map.js'
import Read from './views/Read.js'
import Weather from './views/Weather.js'
import Setting from './views/Setting.js'

export default class Fotter extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }
  handlerClick = (num) => {
    this.setState({
      index: num
    })
  }
  render() {
    return (
      <Router>
      	<div className='footer'>
          <header className='header'>
            <span onClick={this.handlerClick.bind(this, 0)} className={this.state.index===0?'on':""}>
              <b className='iconfont icon-icon6'></b>
        		  <Link to='/'>厕所</Link>
            </span>
            <span onClick={this.handlerClick.bind(this, 1)} className={this.state.index===1?'on':""}>
              <b className='iconfont icon-1'></b>
              <Link to='/read'>段子</Link>
            </span>
            <span onClick={this.handlerClick.bind(this, 2)} className={this.state.index===2?'on':""}>
              <b className='iconfont icon-tianqi'></b>
              <Link to='/weather'>天气</Link>
            </span>
            <span onClick={this.handlerClick.bind(this, 3)} className={this.state.index===3?'on':""}>
              <b className='iconfont icon-shezhi'></b>
              <Link to='/setting'>设置</Link>
            </span>
          </header>
          <Route exact path='/' component={Map}></Route>
        	<Route path='/read' component={Read}></Route>
        	<Route path='/weather' component={Weather}></Route>
        	<Route path='/setting' component={Setting}></Route>
        </div>
      </Router>
    )
  }
}