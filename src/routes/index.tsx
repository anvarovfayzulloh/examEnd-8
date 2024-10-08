import { useRoutes } from 'react-router-dom'
import Home from './home/Home'
import Categories from './categories/Categories'

const RouterController = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home/>
    },
    {
      path: "/categories/:category",
      element: <Categories/>
    }
  ])
}

export default RouterController