import 'react-app-polyfill/ie11';

import React from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from "react-helmet";

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = Comp => {
    renderMethod(
      <div>
        <Comp />
        <Helmet>  
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-222595474-1"></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'UA-222595474-1');
            `}
          </script>
        </Helmet>
      </div>,
      target
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
