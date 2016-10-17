/**
 * Created by Yi on 14/10/2016.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import NavBar from '../../Common/Components/NavBar'

import CSSModules from 'react-css-modules'
import style from './Share.scss'

class Share extends Component {
  componentDidMount() {
  }

  render() {
    console.log('this.props: ', this.props.goodsList.length)
    return (
      <div styleName="container">
        <div styleName="content">
          晒单页面
        </div>
        <NavBar/>
      </div>
    )
  }
}

Share.propTypes = {
  goodsList: PropTypes.array.isRequired
}

export default CSSModules(Share, style)