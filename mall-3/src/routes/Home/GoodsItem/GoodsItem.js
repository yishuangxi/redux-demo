/**
 * Created by Yi on 13/10/2016.
 */

import React, {Component} from 'react'

import './GoodsItem.scss'
export default class GoodsItem extends Component {
  render() {
    return (
      <div className="goods-item">
        <p>{this.props.item.data.title}</p>
      </div>
    )
  }
}