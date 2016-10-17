/**
 * Created by Yi on 13/10/2016.
 */

import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import './TopBar.scss'

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        {this.props.title || 'top bar'}
      </div>
    )
  }
}

export default TopBar