import { useParams } from "react-router-dom"
import { useGetProductWithIdQuery } from "../../redux/api/productsApi"
import { useEffect, useState } from "react"
import { Product } from "../../types"
import { Container } from "../../utils"

useParams

const SinglePage = () => {
    const { id } = useParams()
    const { data } = useGetProductWithIdQuery(id)
    const [product, setProduct] = useState<Product | null>(null);


    useEffect(() => {
        setProduct(data)
    }, [data])

    return (
        <div><Container>

            {product !== null ? (
                <div>
                    <h1 className="capitalize text-center my-5 text-[#a6a2a2] cursor-pointer" ><span className="hover:text-[#000]" >MAKEUP</span> / <span className="hover:text-[#000]" >{product?.product_type.split("_").join(" ")}</span> / <span className="text-[#000]" >{product?.name}</span></h1>
                    <div className="" >
                        <div>
                            <p className="capitalize mb-[20px] font-fixel text-[14px] " >{product?.brand}</p>
                            <p className="capitalize text-[26px] font-fixel font-medium" >{product?.name}</p>
                            <p className="capitalize text-[#a6a2a2] text-[14px] font-fixel font-medium" >{product?.product_type}</p>
                            {[...Array(5)].map((_, index) => (
                                <span key={index}>
                                    {index < (product.rating === null ? 0 : product.rating) ? "★" : "☆"}
                                </span>
                            ))}
                            <span className="pl-[10px]" >{product.rating === null ? 0 : product.rating}</span>
                        </div>
                    </div>
                </div>



            ) : (<p>Loading...</p>)
            }
        </Container>
        </div>
    )
}

export default SinglePage