import {connect} from 'react-redux'
import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'goods/:goodsId',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const GoodsDetail = require('./container').default
      const reducer = require('./reducers').default

      /*  Add the reducer to the store on key 'about'  */
      injectReducer(store, {key: 'goodsDetail', reducer})

      /*  Return getComponent   */
      cb(null, GoodsDetail)

      /* Webpack named bundle   */
    }, 'goodsDetail')
  }
})
