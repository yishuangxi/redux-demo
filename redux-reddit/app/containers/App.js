/**
 * Created by Yi on 09/10/2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        hello reddit
      </div>
    )
  }
}

App.propTypes = {

}

export default connect()(App)