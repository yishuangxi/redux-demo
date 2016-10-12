import React from 'react'

export const Counter = (props) => (
  <div style={{margin: '0 auto'}}>
    <h2>Counter: {props.counter.length}</h2>
    <button onClick={props.fetchPostsIfNeeded}>fetchPostsIfNeeded</button>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.array.isRequired,
  fetchPostsIfNeeded: React.PropTypes.func.isRequired
}

export default Counter
