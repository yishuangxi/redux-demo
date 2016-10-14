/**
 * Created by Yi on 13/10/2016.
 */

import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import './NavBar.scss'

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <IndexLink to='/' activeClassName='route--active' className='nav-bar-item'>
          夺宝
        </IndexLink>
        <Link to='/result' activeClassName='route--active' className='nav-bar-item'>
          最新揭晓
        </Link>
        <Link to='/share' activeClassName='route--active' className='nav-bar-item'>
          晒单
        </Link>
        <Link to='/about' activeClassName='route--active' className='nav-bar-item'>
          我的
        </Link>
      </div>
    )
  }
}

export default NavBar