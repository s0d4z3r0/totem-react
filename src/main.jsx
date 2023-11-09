import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// Router
import { createHashRouter, RouterProvider } from 'react-router-dom'

// Routes
import App from './App'
import Home from './routes/Home.jsx'
import Menu from './routes/Menu.jsx'
import ErrorPage from './routes/ErrorPage'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/menu',
        element: <Menu/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
