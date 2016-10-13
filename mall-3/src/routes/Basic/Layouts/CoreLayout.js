import React from 'react'
import './CoreLayout.scss'
import '../Styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='core-layout'>
   {children}
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
