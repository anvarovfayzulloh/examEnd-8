import { useRoutes } from 'react-router-dom'
import Home from './home/Home'

const RouterController = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home/>
    },
    
  ])
}

export default RouterController