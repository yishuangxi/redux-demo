/**
 * Created by Yi on 13/10/2016.
 */

import React, {Component} from 'react'

import './GoodsList.scss'
import GoodsItem from '../GoodsItem'

class GoodsList extends Component {
  render() {
    let goodsList = [{title: "aaa", price: 111}, {title: "bbb", price: 222}, {title: "ccc", price: 333}]
    return (
      <div>
        <h1>优选商品</h1>
        <ul>
          {
            this.props.goodsList.map((item, index) => {
              return (
                <GoodsItem key={item.data.id} item={item}></GoodsItem>
              )
            })
          }

        </ul>
      </div>
    )
  }
}

GoodsList.propTypes = {
  goodsList: React.PropTypes.array.isRequired
}

export default GoodsList