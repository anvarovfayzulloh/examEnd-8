import { useEffect } from "react";
import { useGetProductQuery } from "../../redux/api/productsApi"
import { Link } from "react-router-dom";


const Brands = () => {
    const { data } = useGetProductQuery(undefined);
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div>
            <ul className="capitalize flex justify-center items-center gap-4" >
                <li>
                    <Link to={"/"} >
                    <img src="" alt="" />
                        nyx
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        clinique
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        dior
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        smashbox
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        e.l.f.
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        milani
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        rejuva minerals
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        annabelle
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        pure anada
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        pacifica
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        almay
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Brands