import { useRoutes } from 'react-router-dom'
import Home from './home/Home'
import Categories from './categories/Categories'
import Favorites from './favorites/Favorites'
import NotFound from './notfound/NotFound'

const RouterController = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home/>
    },
    {
      path: "/categories/:category",
      element: <Categories/>
    },
    {
      path: "/favorites",
      element: <Favorites/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])
}

export default RouterController