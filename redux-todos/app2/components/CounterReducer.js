/**
 * Created by Yi on 09/10/2016.
 */

import {INCREMENT, DECREMENT} from './CounterActions'
import {combineReducers} from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({counter})

export default rootReducer