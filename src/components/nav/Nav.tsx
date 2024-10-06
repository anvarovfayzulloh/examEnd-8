// import { AiFillStar } from "react-icons/ai"; 
import { Link } from "react-router-dom";
import { Container } from "../../utils";
import { Tooltip } from 'antd';

const Nav = () => {
    return (
        <header>
            <Container>
                <div>
                    <ul className="flex justify-between items-center h-10 border-b border-[#ebebeb] text-[#212121]" >
                        <li className="hover:text-[#5b24c9] cursor-pointer font-pixel" >
                            <Tooltip overlayStyle={{ borderRadius: '1px' , maxWidth: '264px'}} placement="bottomRight" title="Мы доставляем парфюмерию и косметику бесплатно. Минимальная сумма заказов - 99 000 сумов">
                                <span>Бесплатная доставка!</span>
                            </Tooltip>
                            {/* 100% Оригинальная продукция! #TODO two version in this text */}
                        </li>
                        <ul className="flex justify-between items-center gap-5 cursor-pointer" >
                            <li className="text-[#ff5252]" >
                                <Link to={"/"}>Акции</Link>
                            </li>
                            <li className="hover:text-[#5b24c9] cursor-pointer" >
                                <Link to={"/"} >Доставка и Оплата</Link>
                            </li>
                            <li className="hover:text-[#5b24c9] cursor-pointer" >
                                <Link to={"/"} >О магазине</Link>
                            </li>
                        </ul>
                        <li className="flex items-center gap-2 hover:text-[#5b24c9] cursor-pointer" >
                            {/* <AiFillStar className="w-[10px] h-[10px]"  color="black" /> */}
                            <span className="">★</span>
                            Beauty Club
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    )
}

export default Nav