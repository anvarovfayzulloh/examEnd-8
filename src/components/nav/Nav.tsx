import { Link } from "react-router-dom";
import { Container } from "../../utils";
import { Tooltip } from 'antd';

const Nav = () => {
    return (
        <header>
            <Container>
                <div className="nav-bar-top" >
                    <ul className="flex justify-between items-center h-10 border-b border-[#ebebeb] text-[#212121]" >
                        <li className="hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px] flex basis-1/4 flex-grow-0 items-center justify-start">
                            <Tooltip overlayStyle={{ borderRadius: '1px' , maxWidth: '264px'}} placement="bottomRight" title="Мы доставляем парфюмерию и косметику бесплатно. Минимальная сумма заказов - 99 000 сумов">
                                <span>Бесплатная доставка!</span>
                            </Tooltip>
                        </li>
                        <ul className="flex justify-center items-center gap-5 cursor-pointer text-[14px]  flex-1" >
                            <li className="text-[#ff5252] font-fixel" >
                                <Link to={"/"}>Акции</Link>
                            </li>
                            <li className="hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px]" >
                                <Link to={"/"} >Доставка и Оплата</Link>
                            </li>
                            <li className="hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px]" >
                                <Link to={"/"} >О магазине</Link>
                            </li>
                        </ul>
                        <li className="gap-2 hover:text-[#5b24c9] cursor-pointer font-fixel text-[14px] flex basis-1/4 flex-grow-0 items-center justify-end" >
                            <span>★</span>
                            Beauty Club
                        </li>
                    </ul>
                </div>
                <nav className="nav-bar-bottom" >

                </nav>
            </Container>
        </header>
    )
}

export default Nav