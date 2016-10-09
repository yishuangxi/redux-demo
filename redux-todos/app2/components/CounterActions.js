/**
 * Created by Yi on 09/10/2016.
 */

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function increment(){
  console.log('increment')
  return {
    type: INCREMENT
  }
}

export function decrement(){
  console.log('decrement')
  return {
    type: DECREMENT
  }
}

export function incrementIfOdd(){
  console.log('incrementIfOdd')
  return (dispatch, getState) => {
    const {counter} = getState()
    if(counter % 2 === 0){
      return
    }

    dispatch(increment())
  }
}

export function incrementAsync(delay = 1000){
  console.log('incrementAsync')
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}