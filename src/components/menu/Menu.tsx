import { useState } from "react";
import { Container } from "../../utils";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(0);

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(0);
  };

  return (
    <div className="menu pt-[20px] relative">
      <Container>
        <div className="menu_wrapper">
          <ul className={`flex justify-between items-center font-fixel font-semibold h-[46px] border-b  ${hoveredItem === 0 ? '' : 'border-b border-b-[#5b24c9]'}`}>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Парфюмерия</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Макияж</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Волосы</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Лицо</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Тело и ванна</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Мужчинам</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Аксессуары</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(8)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Health & Care</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(9)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Подарки</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(10)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Одежда</Link>
            </li>
            <li
              className="cursor-pointer relative hover:text-[#5b24c9] font-fixel font-semibold text-[16px]"
              onMouseEnter={() => handleMouseEnter(11)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={location}>Бренды</Link>
            </li>
            {hoveredItem === 1 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 2 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 3 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 4 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 5 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 6 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 7 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 8 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 9 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 10 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
            {hoveredItem === 11 && (
              <div className="absolute w-full max-w-[1600px] top-[100%] p-4 bg-white shadow-lg z-[2000]">
                Простите по вашему запросу ничего не найдено
              </div>
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
