import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import React, { useState } from 'react';
import { Carousel, ConfigProvider } from 'antd';
import { Container } from '../../utils';
import { ArrowProps } from '../../types';
import '../slider/CarouselHeader.css';
import Arrow from "../../assets/images/arrow-black.svg";
import { useDispatch, useSelector } from 'react-redux';
import { like, unLike } from '../../redux/slice/likeProducts';
import { addCart } from '../../redux/slice/addCartSlice';
import { AppDispatch, RootState } from '../../redux/store';
import useCurrency from "../../hooks/useHooks";

const CustomArrowLeft: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
        className={`left ${className}`}
        style={{
            padding: "10px",
            ...style,
            background: "white",
            width: '50px',
            height: '50px',
            position: 'absolute',
            top: '-75px',
            left: '1200px',
            transform: 'rotate(180deg)',
            cursor: 'pointer',
            zIndex: 10,
        }}
        onClick={onClick}>
        <img className='w-full h-full' src={Arrow} alt="Left arrow" />
    </div>
);

const CustomArrowRight: React.FC<ArrowProps> = ({ className, onClick }) => (
    <div
        className={`right ${className}`}
        style={{
            padding: "10px",
            background: "white",
            width: '50px',
            height: '50px',
            position: 'absolute',
            top: '-50px',
            right: '10px',
            cursor: 'pointer',
            zIndex: 10,
        }}
        onClick={onClick}>
        <img className='w-full h-full' src={Arrow} alt="Right arrow" />
    </div>
);

interface Product {
    id: string;
    api_featured_image: string;
    name: string;
    product_type: string;
    price: number;
    rating: number | null;
    product_colors: { hex_value: string, colour_name: string }[];
}

const CarouselCategory: React.FC<{ products: Product[] }> = ({ products }) => {
    const dispatch = useDispatch<AppDispatch>();
    const likedProducts = useSelector((state: RootState) => state.wishlist.liked);

    const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});

    const handleAddCart = (item: Product, color: string) => {
        dispatch(addCart({ ...item, color })); // Dispatch the entire product object
    };

    const handleLike = (id: string) => {
        dispatch(like(id));
    };

    const handleUnlike = (id: string) => {
        dispatch(unLike(id));
    };

    return (
        <Container>
            <div className="my-[200px]">
                <ConfigProvider
                    theme={{
                        components: {
                            Carousel: {},
                        },
                    }}
                >
                    <Carousel
                        infinite
                        dots={false}
                        slidesToShow={5}
                        slidesToScroll={5}
                        arrows
                        nextArrow={<CustomArrowRight />}
                        prevArrow={<CustomArrowLeft />}
                    >
                        {products?.map((item) => {
                            const isLiked = likedProducts.includes(item.id);
                            const { currency, convertPrice } = useCurrency(item.price);
                            const selectedColor = selectedColors[item.id] || item.product_colors[0]?.hex_value;

                            return (
                                <div key={item.id}>
                                    <div className="relative group p-[40px] w-[300px] h-[400px] pb-[5px]">
                                        <div className='relative flex justify-center items-center bg-[#fafafa] w-full h-full p-[40px]'>
                                            <img className='object-center object-cover w-full h-full' src={item.api_featured_image} alt={item.name} />
                                            <button
                                                onClick={() => isLiked ? handleUnlike(item.id) : handleLike(item.id)}
                                                aria-label={isLiked ? 'Unlike product' : 'Like product'}
                                            >
                                                {
                                                    isLiked
                                                        ? <FcLike className={`absolute top-2 right-3 w-6 h-6 transition-opacity duration-200 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                                        : <FcLikePlaceholder className={`absolute top-2 right-3 w-6 h-6 transition-opacity duration-200 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <p className="font-fixel text-[16px] overflow-hidden whitespace-nowrap text-ellipsis pr-[61px] pl-[40px]">
                                        {item.name}
                                    </p>
                                    <p className="mt-1 text-[#727178] text-[14px] break-words font-fixel pl-[40px] capitalize">
                                        {item.product_type.split("_").join(" ")}
                                    </p>
                                    <div className="pl-[40px] mb-[5px]">
                                        <div className="text-[10px] text-[#000] font-fixel mt-[5px]">
                                            {[...Array(5)].map((_, index) => (
                                                <span key={index}>
                                                    {index < (item.rating === null ? 0 : item.rating) ? "★" : "☆"}
                                                </span>
                                            ))}
                                            <span>{item.rating === null ? 0 : item.rating}</span>
                                        </div>
                                        <p className="font-fixel text-[16px] mt-[5px]">
                                            {convertPrice()} {currency}
                                        </p>
                                    </div>
                                    <div className="pl-[40px] flex items-center justify-center max-w-[265px] flex-col gap-[10px]">
                                        <select
                                            className="w-full py-2 border border-gray-300 rounded outline-none"
                                            value={selectedColor}
                                            onChange={(e) => {
                                                setSelectedColors({ ...selectedColors, [item.id]: e.target.value });
                                            }}
                                        >
                                            {item.product_colors.map((color) => (
                                                <option
                                                    key={color.hex_value}
                                                    value={color.hex_value}
                                                    className="text-gray-700 text-[14px] font-fixel"
                                                >
                                                    {color.colour_name}
                                                </option>
                                            ))}
                                        </select>
                                        <button
                                            onClick={() => handleAddCart(item, selectedColor)} 
                                            className="py-[6px] bg-black text-white flex items-center justify-center w-full px-[40px] font-fixel text-[14px]"
                                        >
                                            Купить
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </ConfigProvider>
            </div>
        </Container>
    );
};

export default CarouselCategory;
