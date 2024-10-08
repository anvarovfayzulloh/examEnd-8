import { useEffect } from "react";
import { useGetProductQuery } from "../../redux/api/productsApi"
import { Link } from "react-router-dom";
import Categories_1 from "../../assets/images/categories_1.png"
import Categories_2 from "../../assets/images/categories_2.jfif"
import Categories_3 from "../../assets/images/categories_3.jfif"
import Categories_4 from "../../assets/images/categories_4.png"
import Categories_5 from "../../assets/images/categories_5.jfif"
import Categories_6 from "../../assets/images/categories_6.png"
import Categories_7 from "../../assets/images/categories_7.jfif"
import Categories_8 from "../../assets/images/categories_8.png"
import Categories_9 from "../../assets/images/categories_9.jfif"
import Categories_10 from "../../assets/images/categories_10.png"


const Categories = () => {
    const { data } = useGetProductQuery(undefined);
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div className="mt-[32px] mx-auto" >
            <ul className="capitalize flex justify-center items-center gap-8" >
                <li>
                    <Link to={"/categories/powder"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_1} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Powder
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/categories/cream"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_2} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Cream
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/categories/pencil"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_3} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Pencil
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/categories/liquid"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_4} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Liquid
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/categories/gel"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_5} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Gel
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/categories/palette"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_6} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Palette
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/categories/concealer"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_7} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Concealer
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/categories/contour"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_8} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Contour
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/categories/bb%20cc"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_9} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Bb cc
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/categories/mineral"} >
                        <div className="w-[82px] h-[82px] p-3 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full object-cover" src={Categories_10} alt="" />
                        </div>
                        <p className="mt-2 font-fixel text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-center w-full font-normal" >
                            Mineral
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Categories