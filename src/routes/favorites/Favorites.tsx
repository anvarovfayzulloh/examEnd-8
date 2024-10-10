import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import Nav from "../../components/nav/Nav"
import FavoritesRender from "../../components/favoritesRender/FavoritesRender"

const Favorites = () => {

  const likeData = useSelector((state: RootState) => state.wishlist.liked)

  return (
    <div>
      <Nav/>
      {likeData.length > 0 ? (
        likeData.map(id => (
          <FavoritesRender key={id} id={id}/>
        ))
      ) : (
        <p>
          Not favorite products
        </p>
      )

      }
    </div>
  )
}

export default Favorites