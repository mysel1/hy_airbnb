import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {

  useScrollTop()
  return (
    <div className='app'>
      <AppHeader />
      <Suspense fallback="loading">
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App
