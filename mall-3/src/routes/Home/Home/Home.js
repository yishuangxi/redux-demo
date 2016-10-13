/**
 * Created by Yi on 13/10/2016.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import NavBar from '../../Basic/Components/NavBar'
import Banner from '../Banner'
import GoodsList from '../GoodsList'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

class Home extends Component {
  componentDidMount() {
    this.props.fetchGoodsList().then()
  }

  render() {
    console.log('this.props: ', this.props.goodsList.length)
    return (
      <div className="home-container">
        <Banner/>
        <GoodsList goodsList={this.props.goodsList}/>
        <NavBar/>
      </div>
    )
  }
}

Home.propTypes = {
  goodsList: PropTypes.array.isRequired
}

export default Home