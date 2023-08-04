import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Routes
import App from './App'
import Home from './routes/Home.jsx'
import Menu from './routes/Menu.jsx'
import ErrorPage from './routes/ErrorPage'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'totem-react',
        element: <Home/>
      },
      {
        path: 'totem-react/menu',
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
