import {
  FETCH_GOODS_LIST_SUCCESS, FETCH_GOODS_LIST_FAILURE, FETCH_GOODS_LIST_ERROR
} from './actions'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_GOODS_LIST_SUCCESS]: (state, action) => {
    console.log('FETCH_GOODS_LIST_SUCCESS: action: ', action)
    return [...state, ...action.goodsList]
  },
  [FETCH_GOODS_LIST_FAILURE]: (state, action) => {
    console.log('FETCH_GOODS_LIST_FAILURE !!!')
    return state
  },
  [FETCH_GOODS_LIST_ERROR]: (state, action) => {
    console.log('FETCH_GOODS_LIST_ERROR !!!')
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []

export default function homeReducer(state = initialState, action) {
  console.log('HomeReducer')
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}




