import {
  FETCH_GOODS_LIST_SUCCESS, FETCH_GOODS_LIST_FAILURE, FETCH_GOODS_LIST_ERROR
} from './actions'


// ------------------------------------
// Reducer
// ------------------------------------

function goodsListReducer(state = [], action) {
  switch (action.type) {
    case FETCH_GOODS_LIST_SUCCESS:
      return [...state, ...action.goodsList]
    case FETCH_GOODS_LIST_FAILURE:
    case FETCH_GOODS_LIST_ERROR:
    default:
      return state
  }
}

const initialState = {}
export default function goodsDetailReducer(state = initialState, action) {
  console.log('goodsDetailReducer...')
  switch (action.type) {
    case FETCH_GOODS_LIST_SUCCESS:
    case FETCH_GOODS_LIST_FAILURE:
    case FETCH_GOODS_LIST_ERROR:
      return {
        ...state,
        goodsList: goodsListReducer(state.goodsList = [], action)
      }
    default:
      return state
  }


}




