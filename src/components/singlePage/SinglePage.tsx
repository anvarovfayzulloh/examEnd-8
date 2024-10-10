import { useParams } from "react-router-dom";
import { useGetProductWithIdQuery } from "../../redux/api/productsApi";
import { useEffect, useState } from "react";
import { Product } from "../../types";
import { Container } from "../../utils";
import Loading from "../../assets/images/loading.gif";
import useCurrency from "../../hooks/useHooks";

const SinglePage = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetProductWithIdQuery(id);
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (data) {
            setProduct(data);
        }
    }, [data]);

    // Ensure `useCurrency` is always called regardless of product
    const { currency, convertPrice } = useCurrency(product?.price || 0);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <img className="w-[32px] h-[32px]" src={Loading} alt="Loading" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Error loading product. Please try again later.</p>
            </div>
        );
    }

    return (
        <Container>
            {product !== null ? (
                <div>
                    <h1 className="capitalize text-center my-5 text-[#a6a2a2] cursor-pointer">
                        <span className="hover:text-[#000]">MAKEUP</span> /{" "}
                        <span className="hover:text-[#000]">
                            {product.product_type.split("_").join(" ")}
                        </span>{" "}
                        / <span className="text-[#000]">{product.name}</span>
                    </h1>
                    <div className="flex mt-[180px]">
                        <div className="flex flex-col justify-start pt-[40px]">
                            <div className="flex items-center justify-center bg-black max-w-[44px] w-full mb-[20px]">
                                <p className="font-fixel font-semibold text-[12px] text-white pt-[4px] tracking-[1px] uppercase">
                                    Deal
                                </p>
                            </div>
                            <p className="capitalize mb-[10px] font-fixel text-[14px]">
                                {product.brand}
                            </p>
                            <p className="capitalize text-[26px] font-fixel font-medium mt-[5px] mb-[20px]">
                                {product.name}
                            </p>
                            <p className="capitalize text-[#a6a2a2] text-[14px] font-fixel">
                                {product.product_type.split("_").join(" ")}
                            </p>
                            <div className="flex items-center mt-[10px]">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index}>
                                        {index < (product.rating === null ? 0 : product.rating) ? "★" : "☆"}
                                    </span>
                                ))}
                                <span className="pl-[10px]">{product.rating === null ? 0 : product.rating}</span>
                            </div>
                            <div>
                                <p className="font-fixel text-[12px] text-white uppercase pt-[7px] px-[7px] pb-[5px] bg-[#5b24c9] inline">
                                    Акция
                                </p>
                            </div>
                            <div>
                                <p className="max-w-[300px] font-fixel text-[14px] leading-[22px] text-left text-[#212121] break-words mt-[20px]">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center">
                            <img className="h-[520px]" src={product.api_featured_image} alt={product.name} />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex">
                                <strong className="font-fixel text-[20px] font-medium leading-[32px] text-[#ff5252] lowercase">
                                    {convertPrice()} {currency}
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <p>Product not found</p>
                </div>
            )}
        </Container>
    );
};

export default SinglePage;
