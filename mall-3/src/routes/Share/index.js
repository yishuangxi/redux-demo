import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'share',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Share = require('./container').default
      const reducer = require('./reducers').default

      /*  Add the reducer to the store on key 'share'  */
      injectReducer(store, {key: 'share', reducer})

      /*  Return getComponent   */
      cb(null, Share)

      /* Webpack named bundle   */
    }, 'share')
  }
})
