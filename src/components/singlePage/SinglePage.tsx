import { BsBoxSeam } from "react-icons/bs"; 
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetProductWithIdQuery } from "../../redux/api/productsApi";
import { useEffect, useState } from "react";
import { Product } from "../../types";
import { Container } from "../../utils";
import Loading from "../../assets/images/loading.gif";
import useCurrency from "../../hooks/useHooks";
import { useDispatch } from "react-redux";
import { addCart } from '../../redux/slice/addCartSlice';

const SinglePage = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetProductWithIdQuery(id);
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        if (data) {
            setProduct(data);
            setSelectedColor(data.product_colors[0]?.hex_value); 
        }
    }, [data]);

    const { currency, convertPrice } = useCurrency(product?.price || 0);

    const handleAddCart = () => {
        if (product) {
            dispatch(addCart({ ...product, color: selectedColor }));
        }
    };

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
                    <h1 className="capitalize text-center my-5 text-[#a6a2a2] cursor-pointer ">
                        <span className="hover:text-[#000]">MAKEUP</span> /{" "}
                        <span className="hover:text-[#000]">
                            {product.product_type.split("_").join(" ")}
                        </span>{" "}
                        / <span className="text-[#000]">{product.name}</span>
                    </h1>
                    <div className="flex mt-[180px] justify-between">
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
                                <p className="max-w-[300px] font-fixel text-[14px] leading-[22px] text-left text-[#212121] break-words mt-[20px]">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center">
                            <img className="h-[520px]" src={product.api_featured_image} alt={product.name} />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <strong className="font-fixel text-[20px] font-medium leading-[32px] text-[#ff5252]">
                                    {convertPrice()} {currency}
                                </strong>
                                <select
                                    className="w-[330px] py-2 border border-gray-300 rounded outline-none mt-3"
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                >
                                    {product.product_colors && Array.isArray(product.product_colors) ? (
                                        product.product_colors.map((color) => (
                                            <option
                                                key={color.hex_value}
                                                value={color.hex_value}
                                                className="text-gray-700 text-[14px] font-fixel"
                                            >
                                                {color.colour_name}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>No colors available</option>
                                    )}
                                </select>
                                <button
                                    onClick={handleAddCart} 
                                    className="py-[13px] bg-black text-white flex items-center justify-center w-full px-[40px] font-fixel text-[14px] mt-3"
                                >
                                    Купить
                                </button>
                                <div className="flex justify-between mt-[10px]" >
                                    <p>
                                    Есть в наличии!
                                    </p>
                                    <p>
                                    Код: {product.id}
                                    </p>
                                </div>
                                <Link to={location} className="text-[#5b24c9] mt-[25px]" >
                                    Нет Нужного объема?
                                </Link>
                                <p className="flex items-center gap-[8px] text-[#5b24c9] mt-[10px] font-fixel text-[14px] " >
                                    <BsBoxSeam className="mt-[-4px]" /> Бесплатная доставка
                                </p>
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
