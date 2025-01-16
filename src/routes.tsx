import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Homunculus from './pages/Homunculus'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'homunculus',
        element: <Homunculus />,
      },
    ],
  },
])

