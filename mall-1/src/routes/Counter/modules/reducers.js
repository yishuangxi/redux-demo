import {
  COUNTER_DECREMENT, COUNTER_INCREMENT, FETCH_POSTS_OK, FETCH_POSTS_FAILURE,
  fetchPostsIfNeeded
} from './actions'

export const actions = {
  fetchPostsIfNeeded
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_POSTS_OK]: (state, action) => {
    console.log(action.payload)
    return [...state, ...action.payload]
  },
  [FETCH_POSTS_FAILURE]: (state, action) => {
    console.log(action.payload)
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}




