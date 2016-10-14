/**
 * Created by Yi on 14/10/2016.
 */
import React, {Component} from 'react'

class GoodsDetail extends Component{
  render(){
    return (
      <div>GoodsDetail {this.props.params.goodsId}</div>
    )
  }
}

export default GoodsDetail