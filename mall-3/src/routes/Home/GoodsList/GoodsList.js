/**
 * Created by Yi on 13/10/2016.
 */

import React, {Component} from 'react'

import './GoodsList.scss'
import GoodsItem from '../GoodsItem'

export default class GoodsList extends Component{
  render(){
    let goodsList = [{title: "aaa", price: 111}, {title: "bbb", price: 222}, {title: "ccc", price: 333}]
    return (
      <div>
        <h1>优选商品</h1>
        <ul>
        {
          goodsList.map((item, index) => {
            return (
              <GoodsItem key={index} item={item}></GoodsItem>
            )
          })
        }

          </ul>
      </div>
    )
  }
}