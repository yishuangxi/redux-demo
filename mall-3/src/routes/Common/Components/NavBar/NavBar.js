/**
 * Created by Yi on 13/10/2016.
 */

import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'

import CSSModules from 'react-css-modules'
import style, {routeActive} from './NavBar.scss'

class NavBar extends Component {
  render() {
    return (
      <div styleName="nav-bar">
        <IndexLink to='/' activeClassName={routeActive} styleName='nav-item'>
          夺宝
        </IndexLink>
        <Link to='/result' activeClassName={routeActive} styleName='nav-item'>
          最新揭晓
        </Link>
        <Link to='/share' activeClassName={routeActive} styleName='nav-item'>
          晒单
        </Link>
        <Link to='/about' activeClassName={routeActive} styleName='nav-item'>
          我的
        </Link>
      </div>
    )
  }
}

export default CSSModules(NavBar, style)