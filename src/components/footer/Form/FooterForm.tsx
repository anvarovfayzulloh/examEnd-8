import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Container } from "../../../utils"
import { Link, useLocation } from "react-router-dom";

import Country_1 from "../../../assets/images/country_1.svg";
import Country_2 from "../../../assets/images/country_2.svg";
import Country_3 from "../../../assets/images/country_3.svg";
import Country_4 from "../../../assets/images/country_4.svg";
import Country_5 from "../../../assets/images/country_5.svg";
import Country_6 from "../../../assets/images/country_6.svg";
import Country_7 from "../../../assets/images/country_7.svg";
import Country_8 from "../../../assets/images/country_8.svg";
import Country_9 from "../../../assets/images/country_9.svg";
import Country_10 from "../../../assets/images/country_10.svg";
import Country_11 from "../../../assets/images/country_11.svg";
import Country_12 from "../../../assets/images/country_12.svg";
import Country_13 from "../../../assets/images/country_13.svg";
import Country_14 from "../../../assets/images/country_14.svg";
import Country_15 from "../../../assets/images/country_15.svg";
import Country_16 from "../../../assets/images/country_16.svg";
import Country_17 from "../../../assets/images/country_17.svg";
import Country_18 from "../../../assets/images/country_18.svg";
import Country_19 from "../../../assets/images/country_19.svg";
import Country_20 from "../../../assets/images/country_20.svg";
import Country_21 from "../../../assets/images/country_21.svg";
import Country_22 from "../../../assets/images/country_22.svg";
import Country_23 from "../../../assets/images/country_23.svg";
import Country_24 from "../../../assets/images/country_24.svg";
import Country_25 from "../../../assets/images/country_25.svg";
import Country_26 from "../../../assets/images/country_26.svg";
import Country_27 from "../../../assets/images/country_27.svg";
import Country_28 from "../../../assets/images/country_28.svg";
import Country_29 from "../../../assets/images/country_29.svg";
import Country_30 from "../../../assets/images/country_30.svg";
import Country_31 from "../../../assets/images/country_31.svg";
import Country_32 from "../../../assets/images/country_32.svg";
import Country_33 from "../../../assets/images/country_33.svg";
import Country_34 from "../../../assets/images/country_34.svg";


const countries = [
    Country_1,
    Country_2,
    Country_3,
    Country_4,
    Country_5,
    Country_6,
    Country_7,
    Country_8,
    Country_9,
    Country_10,
    Country_11,
    Country_12,
    Country_13,
    Country_14,
    Country_15,
    Country_16,
    Country_17,
    Country_18,
    Country_19,
    Country_20,
    Country_21,
    Country_22,
    Country_23,
    Country_24,
    Country_25,
    Country_26,
    Country_27,
    Country_28,
    Country_29,
    Country_30,
    Country_31,
    Country_32,
    Country_33,
    Country_34
];


const FooterForm = () => {

    const location = useLocation()

    return (
        <Container>
            <div>
                <div className="w-full bg-[#fafafa] pb-[42px] flex flex-col justify-center items-center" >
                    <div className="flex justify-center items-center pt-[80px] font-bold text-[26px] leading-8 font-fixel" >
                        <h1>Узнавайте первыми o распродажах и новинках!</h1>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} className="flex border-b border-b-[#000] max-w-[416px] w-full pb-[5px] mt-[40px]" >
                        <input className="bg-transparent outline-none border-none flex-1" placeholder="Электронная почта" type="email" />
                        <button className="bg-transparent min-w-[80px]" type="submit" >Подписаться</button>
                    </form>
                    <div className="flex mt-[62px] gap-3" >
                        <div className="p-3 bg-[#fafafa] cursor-pointer rounded-full border border-[#eee] hover:bg-[#fff]" >
                            <BsFacebook size={18} />
                        </div>
                        <div className="p-3 bg-[#fafafa] cursor-pointer rounded-full border border-[#eee] hover:bg-[#fff]" >
                            <AiOutlineInstagram size={18} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-[100px]" >
                    <div className="flex" >
                        <ul className="flex justify-between font-fixel text-[14px] flex-col gap-[20px] pt-[20px] w-[227px]" >
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >О нас</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >Контакты</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >Условия использования</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >Приложение</Link>
                            </li>
                        </ul>
                        <ul className="flex justify-between font-fixel text-[14px] flex-col gap-[20px] pt-[20px] w-[255px]" >
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >О доставке</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >Способы оплаты</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >Оригинальность продукции</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >Обмен и возврат</Link>
                            </li>
                        </ul>
                        <ul className="flex justify-between font-fixel text-[14px] flex-col gap-[20px] pt-[20px] w-[145px] h-[112px]" >
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >Статьи</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >Новости</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#5b24c9]" to={location} >Beauty Club</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pr-[20px]" >
                        <h2 className=" font-medium text-[18px] hover:text-[#5b24c9]" >
                            +998 712 050 578
                        </h2>
                        <p className="text-[#a6a2a2] font-fixel text-[14px] mt-[20px]" >
                            Вы можете <Link to={location} className="text-[#5b24c9]">написать нам письмо</Link> позвонить нам по телефонам
                        </p>
                        <p className="text-[#a6a2a2] font-fixel text-[14px] mt-[6px]" >
                            Ежедневно c 7:55 до 20:05
                        </p>
                        <p className="text-[#5b24c9] font-fixel text-[14px] mt-[24px]" >
                            Обратный звонок
                        </p>
                    </div>
                </div>
                <div className="mt-[40px] py-[27px] mb-[56px] border-t border-t-[#ebebeb] border-b border-b-[#ebebeb] flex gap-[12px] justify-center items-center" >
                    <p className="text-[#a6a2a2] font-fixel text-[12px]" >
                        MAKEUP GLOBAL
                    </p>
                    {countries.map((country, index) => (
                        <img className="w-[16px] h-[26px]" key={index} src={country} alt={`Country ${index + 1}`} />
                    ))}
                </div>
                <div className="mb-[70px] flex flex-col justify-center items-center gap-[15px]" >
                    <Link to={location} className="text-[13px] font-medium text-[#5b24c9] font-fixel" >MAKEUP™. BEAUTY WITHOUT LIMITS</Link>
                    <p className="text-[11px] text-[#666] font-fixel" >© MAKEUP 2021-2024</p>
                </div>
            </div>
        </Container>
    )
}

export default FooterForm