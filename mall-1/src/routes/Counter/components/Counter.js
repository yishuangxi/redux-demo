import React from 'react'

export const Counter = (props) => (
  <div style={{margin: '0 auto'}}>
    <h2>Counter: {props.counter.length}</h2>
    <ul>
    {
      props.counter.map((item) => {
        return (
          <li key={item.data.id}>{item.data.title}</li>
        )
      })
    }
    </ul>
    <button onClick={props.fetchPosts}>fetchPosts</button>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.array.isRequired,
  fetchPostsIfNeeded: React.PropTypes.func.isRequired,
  fetchPosts: React.PropTypes.func.isRequired
}

export default Counter
