/**
 * Created by Yi on 13/10/2016.
 */

import React, {Component} from 'react'
import {Link} from 'react-router'

import './GoodsItem.scss'
export default class GoodsItem extends Component {
  render() {
    this.props.item.data.goodsDetailLink = '/goods/' + this.props.item.data.id
    return (
      <div className="goods-item">
        <Link to={this.props.item.data.goodsDetailLink}>{this.props.item.data.title}</Link>
      </div>
    )
  }
}