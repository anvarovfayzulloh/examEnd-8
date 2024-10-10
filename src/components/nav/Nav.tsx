import { Link } from "react-router-dom";
import { Container } from "../../utils";
import { Tooltip } from 'antd';
import Logo from "../../assets/images/logo.svg"
import Search from "../../assets/images/search.svg"
import Login from "../../assets/images/login.svg"
import Cart from "../../assets/images/cart.svg"
import Favorites from "../../assets/images/favorites.svg"
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/index';
import { setCurrency } from '../../redux/slice/currencySlice';



const Nav = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const currency = useSelector((state: RootState) => state.currency.currency);

    const handleCurrencyChange = (newCurrency: string) => {
        dispatch(setCurrency(newCurrency));
    };
    return (
        <header>
            <Container>
                <div className="header-top" >
                    <ul className="flex justify-between items-center h-10 border-b border-[#ebebeb] text-[#212121]" >
                        <li className="hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px] flex basis-1/4 flex-grow-0 items-center justify-start">
                            <Tooltip overlayStyle={{ borderRadius: '1px', maxWidth: '264px' }} placement="bottomRight" title="Мы доставляем парфюмерию и косметику бесплатно. Минимальная сумма заказов - 99 000 сумов">
                                <span>Бесплатная доставка!</span>
                            </Tooltip>
                        </li>
                        <ul className="flex justify-center items-center gap-5 cursor-pointer text-[14px]  flex-1" >
                            <li className="text-[#ff5252] font-fixel" >
                                <Link to={location}>Акции</Link>
                            </li>
                            <li className="hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px]" >
                                <Link to={location} >Доставка и Оплата</Link>
                            </li>
                            <li className="hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px]" >
                                <Link to={location} >О магазине</Link>
                            </li>
                        </ul>
                        <li className="gap-2 hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px] flex basis-1/4 flex-grow-0 items-center justify-end" >
                            <span>★</span>
                            Beauty Club
                        </li>
                    </ul>
                </div>
                <nav className="header-middle flex justify-between items-center pt-[26px]" >
                    <div className="flex basis-1/4 flex-grow-0 items-center justify-start" >
                        <button><img src={Search} alt="" /></button>
                    </div>
                    <div className="flex flex-1 justify-center" >
                        <Link to={"/"}><img className="w-[160px] h-auto" src={Logo} alt="" /></Link>
                    </div>
                    <div className="flex basis-1/4 flex-grow-0 items-center justify-end" >
                        <div className="flex justify-end gap-6 items-center pr-[8px]" >
                            <button>
                                <img className="w-[24px] h-[24px]" src={Login} alt="" />
                            </button>
                            <button>
                                <img className="w-[24px] h-[24px]" src={Favorites} alt="" />
                            </button>
                            <button>
                                <img className="w-[24px] h-[24px]" src={Cart} alt="" />
                            </button>
                            <select value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
                                <option value="£">£</option>
                                <option value="UZS">UZS</option>
                                <option value="RUBL">RUBL</option>
                            </select>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Nav