import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'

export const FETCH_POSTS_OK = 'FETCH_POSTS_OK'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export function fetchPosts() {
  return (dispatch, getState) => {
    return fetch(`http://www.subreddit.com/r/reactjs.json`)
      .then(response => response.json())
      .then(json => dispatch(fetchPostsOk(json.data.children)))
  }
}

export function fetchPostsOk(payload) {
  return {
    type: FETCH_POSTS_OK,
    payload: payload
  }
}

export function fetchPostsFailure(json) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: 'err msg'
  }
}


export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchPosts())
  }
}


// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export function decrement(value = 1) {
  return {
    type: COUNTER_DECREMENT,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}