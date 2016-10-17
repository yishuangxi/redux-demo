/**
 * Created by Yi on 13/10/2016.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import NavBar from '../../Common/Components/NavBar'
import Banner from '../Banner'
import GoodsList from '../GoodsList'

import CSSModules from 'react-css-modules'
import style from './Home.scss'

class Home extends Component {
  componentDidMount() {
    this.props.fetchGoodsList().then()
  }

  render() {
    console.log('this.props: ', this.props.goodsList.length)
    return (
      <div styleName="container">
        <div styleName="content">
          <Banner/>
          <GoodsList goodsList={this.props.goodsList}/>
        </div>
        <NavBar/>
      </div>
    )
  }
}

Home.propTypes = {
  goodsList: PropTypes.array.isRequired
}

export default CSSModules(Home, style)