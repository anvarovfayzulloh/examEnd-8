import { useEffect } from "react";
import { useGetProductQuery } from "../../redux/api/productsApi"
import { Link } from "react-router-dom";
import Categories_1 from "../../assets/images/categories_1.avif"
import Categories_2 from "../../assets/images/categories_2.jpg"
import Categories_3 from "../../assets/images/categories_3.webp"
import Categories_4 from "../../assets/images/categories_4.jpg"
import Categories_5 from "../../assets/images/categories_5.avif"
import Categories_6 from "../../assets/images/categories_6.avif"
import Categories_7 from "../../assets/images/categories_7.avif"
import Categories_8 from "../../assets/images/categories_8.webp"
import Categories_9 from "../../assets/images/categories_9.jpg"
import Categories_10 from "../../assets/images/categories_10.jpg"


const Categories = () => {
    const { data } = useGetProductQuery(undefined);
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div>
            <ul className="capitalize flex justify-center items-center gap-4" >
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_1} alt="" />
                        </div>
                        <p>
                            Blush
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_2} alt="" />
                        </div>
                        <p>
                            Bronzer
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_3} alt="" />
                        </div>
                        <p>
                            Eyebrow
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_4} alt="" />
                        </div>
                        <p>
                            Eyeliner
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_5} alt="" />
                        </div>
                        <p>
                            Eyeshadow
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_6} alt="" />
                        </div>
                        <p>
                            Foundation
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_7} alt="" />
                        </div>
                        <p>
                            Lip liner
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_8} alt="" />
                        </div>
                        <p>
                            Lipstick
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_9} alt="" />
                        </div>
                        <p>
                            Mascara
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <div className="w-[82px] h-[82px] p-4 border border-[#5b24c9] rounded-full" >
                            <img className="w-full h-full" src={Categories_10} alt="" />
                        </div>
                        <p>
                            Nail polish
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Categories