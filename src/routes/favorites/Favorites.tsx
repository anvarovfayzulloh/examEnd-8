import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Nav from "../../components/nav/Nav";
import FavoritesRender from "../../components/favoritesRender/FavoritesRender";
import Menu from "../../components/menu/Menu";
import { NavLink } from "react-router-dom";
import { Container } from "../../utils";
import Banner from "../../components/banners/Banner";

const Favorites = () => {
  const likeData = useSelector((state: RootState) => state.wishlist.liked);

  return (
    <div className="h-[900px]">
      <Banner />
      <Container>
        <Nav />
        <Menu />
        <div className="flex gap-[40px] pt-[80px] justify-start w-[calc(100%-192px)] m-auto mb-32">
          <div className="border-r border-r-[#fafafa]">
            <ul className="flex flex-col gap-[16px] font-fixel text-[16px] text-[#212121] pr-[20px] min-w-[200px]">
              <li>
                <NavLink to={"/favorites"}>Контактная информация</NavLink>
              </li>
              <li>
                <NavLink to={"/favorites"}>Адресная книга</NavLink>
              </li>
              <li>
                <NavLink to={"/favorites"}>История заказов</NavLink>
              </li>
              <li>
                <NavLink to={"/favorites"}>Список Желаний</NavLink>
              </li>
            </ul>
          </div>
          <div className={`flex flex-wrap  gap-4 ml-[calc(100%/24)]  ${likeData.length > 0 ? 'justify-start' : 'justify-center flex-1'}`}>
            {likeData.length > 0 ? (
              likeData.map(id => (
                <div key={id} className="flex justify-center items-center w-[270px]">
                  <FavoritesRender id={id} />
                </div>
              ))
            ) : (
              <p>Нет избранных продуктов</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Favorites;
