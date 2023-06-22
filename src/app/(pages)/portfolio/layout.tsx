import React, { ReactNode } from 'react'
import Styles from './portfolio.module.css'

const Layout = ({children}:{children:ReactNode}) => {
  return (
      <div>
          <h1 className={Styles.mainTitle}>Our Works</h1>
          {children}
    </div>
  )
}

export default Layout