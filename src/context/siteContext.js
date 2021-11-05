import React, { createContext } from 'react'
// Describe SiteContext.
/* 
Features:
  Catch-all for hooks and context
*/

const defaultState = {}

const SiteContext = createContext(defaultState)

const SiteProvider = (props) => {
  const { children } = props

  return (
    <SiteContext.Provider
      value={{
        testFunction: () => {
          return 'test'
        },
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext
export { SiteProvider }
