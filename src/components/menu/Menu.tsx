import { Container } from "../../utils"
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div className="menu pt-[20px]" >
            <Container>
                <div className="menu_wrapper" >
                    <ul className="flex justify-between items-center font-fixel font-semibold h-[46px]" >
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Парфюмерия
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Макияж
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Волосы
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Лицо
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Тело и ванна
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Мужчинам
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Аксессуары
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Health & Care
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Подарки
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Одежда
                            </Link>
                        </li>
                        <li className="cursor-pointer" >
                            <Link to={"/"} >
                                Бренды
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Menu