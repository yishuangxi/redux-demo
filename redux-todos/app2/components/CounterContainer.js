// import React from 'react';
//
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import Counter from './Counter'
// import * as CounterActions from './CounterActions'
// console.log('CounterActions: ')
// console.log(CounterActions)
//
// function mapStateToProps(state){
//   return {
//     counter: state.counter
//   }
// }
//
// function mapDispatchToProps(dispatch){
//   return bindActionCreators(CounterActions, dispatch)
// }
//
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from './Counter'
import * as CounterActions from './CounterActions'

console.log('CounterActions: ', CounterActions)

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)


