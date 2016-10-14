/**
 * Created by Yi on 13/10/2016.
 */
import fetch from 'isomorphic-fetch'

export const FETCH_GOODS_LIST = 'FETCH_GOODS_LIST'
export const FETCH_GOODS_LIST_SUCCESS = 'FETCH_GOODS_LIST_SUCCESS'
export const FETCH_GOODS_LIST_FAILURE = 'FETCH_GOODS_LIST_FAILURE'
export const FETCH_GOODS_LIST_ERROR = 'FETCH_GOODS_LIST_ERROR'

export function showFetchGoodsList(){

}

export function fetchGoodsList() {
  return (dispatch, getState) => {
    return fetch(`http://www.subreddit.com/r/reactjs.json`)
      .then(response => response.json())
      .then(json => dispatch(fetchGoodsListSuccess(json.data.children)))
  }
}

export function fetchGoodsListIfNeeded() {
  return true
}

export function fetchGoodsListSuccess(goodsList) {
  return {
    type: FETCH_GOODS_LIST_SUCCESS,
    goodsList: goodsList,
    time: Date.now()
  }
}

export function fetchGoodsListFailure() {
  return {
    type: FETCH_GOODS_LIST_FAILURE,
    goodsList: []
  }
}

export function fetchGoodsListError() {
  return {
    type: FETCH_GOODS_LIST_ERROR,
    goodsList: []
  }
}