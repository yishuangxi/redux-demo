/**
 * Created by Yi on 09/10/2016.
 */
import React, {Component, PropTypes} from 'react'

class Counter extends Component {
  render() {
    const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props
    console.log({increment, incrementIfOdd, incrementAsync, decrement, counter})
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    )
  }
}

Counter.PropTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter