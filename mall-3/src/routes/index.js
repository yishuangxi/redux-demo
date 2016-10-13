// We only need to import the modules necessary for initial render
import CoreLayout from './Basic/Layouts'
import Home from './Home'
import Result from './Result'
import Share from './Share'
import User from './User'
import CounterRoute from './Counter'
import About from './About'
// import TestRoute from './Test'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store),
    Result(store),
    Share(store),
    User(store),
    About(store)
    // CounterRoute(store),
    // TestRoute(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
