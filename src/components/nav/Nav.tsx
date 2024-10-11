import { AiFillCloseCircle } from "react-icons/ai"; 
import { Link } from "react-router-dom";
import { Container } from "../../utils";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/search.svg";
import Login from "../../assets/images/login.svg";
import CartImg from "../../assets/images/cart.svg";
import Favorites from "../../assets/images/favorites.svg";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/index';
import { setCurrency } from '../../redux/slice/currencySlice';
import { useState } from 'react';
import Cart from "../cart/Cart";

const Nav = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currency = useSelector((state: RootState) => state.currency.currency);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const handleCurrencyChange = (newCurrency: string) => {
        dispatch(setCurrency(newCurrency));
    };

    const handleCartView = () => {
        setIsCartVisible(true);
    };

    const handleCloseCart = () => {
        setIsCartVisible(false);
    };

    return (
        <header>
            <Container>
                <div className="header-top">
                    <ul className="flex justify-between items-center h-10 border-b border-[#ebebeb] text-[#212121]">
                        <li className="hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px] flex basis-1/4 flex-grow-0 items-center justify-start">
                            <span>Бесплатная доставка!</span>
                        </li>
                        <ul className="flex justify-center items-center gap-5 cursor-pointer text-[14px] flex-1">
                            <li className="text-[#ff5252] font-fixel">
                                <Link to={location}>Акции</Link>
                            </li>
                            <li className="hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px]">
                                <Link to={location}>Доставка и Оплата</Link>
                            </li>
                            <li className="hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px]">
                                <Link to={location}>O магазине</Link>
                            </li>
                        </ul>
                        <li className="gap-2 hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px] flex basis-1/4 flex-grow-0 items-center justify-end">
                            <span>★</span>
                            Beauty Club
                        </li>
                    </ul>
                </div>
                <nav className="header-middle flex justify-between items-center pt-[26px]">
                    <div className="flex basis-1/4 flex-grow-0 items-center justify-start">
                        <button><img src={Search} alt="Search" /></button>
                    </div>
                    <div className="flex flex-1 justify-center">
                        <a href="/" ><img className="w-[160px] h-auto" src={Logo} alt="Logo" /></a>
                    </div>
                    <div className="flex basis-1/4 flex-grow-0 items-center justify-end">
                        <div className="flex justify-end gap-6 items-center pr-[8px]">
                            <button onClick={() => console.log("Login clicked")}>
                                <img className="w-[24px] h-[24px]" src={Login} alt="Login" />
                            </button>
                            <Link to={"/favorites"} onClick={() => console.log("Favorites clicked")}>
                                <img className="w-[24px] h-[24px]" src={Favorites} alt="Favorites" />
                            </Link>
                            <button onClick={handleCartView}>
                                <img className="w-[24px] h-[24px]" src={CartImg} alt="Cart" />
                            </button>
                            <select value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
                                <option value="GBR">Sterling</option>
                                <option value="UZS">UZS</option>
                                <option value="RUBL">RUBL</option>
                            </select>
                        </div>
                    </div>
                </nav>
            </Container>

            {isCartVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseCart} />
                    <div className="bg-white w-3/4 max-h-[80%] overflow-y-auto rounded-lg p-4 relative">
                        <button onClick={handleCloseCart} className="absolute top-2 right-2">
                            <AiFillCloseCircle size={30} />
                        </button>
                        <Cart />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Nav;
