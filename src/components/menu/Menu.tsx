import { Container } from "../../utils"
import Loading from "../../assets/images/loading.gif"

const Menu = () => {
    return (
        <div className="menu pt-[20px]" >
            <Container>
                <div className="menu_wrapper" >
                    <ul className="flex justify-between items-center font-fixel font-semibold h-[46px]" >
                        <li>
                            Парфюмерия
                        </li>
                        <li>
                            Макияж
                        </li>
                        <li>
                            Волосы
                        </li>
                        <li>
                            Лицо
                        </li>
                        <li>
                            Тело и ванна
                        </li>
                        <li>
                            Мужчинам
                        </li>
                        <li>
                            Аксессуары
                        </li>
                        <li>
                            Health & Care
                        </li>
                        <li>
                            Подарки
                        </li>
                        <li>
                            Одежда
                        </li>
                        <li>
                            Бренды
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Menu