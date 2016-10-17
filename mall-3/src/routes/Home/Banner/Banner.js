/**
 * Created by Yi on 13/10/2016.
 */

import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import style from  './Banner.scss'
class Banner extends Component{
  render(){
    return (
      <div styleName="home-banner">
        This is banner
      </div>
    )
  }
}

export default CSSModules(Banner, style)