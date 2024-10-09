import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import { Container } from '../../utils';
import { ArrowProps } from '../../types';
import Arrow from "../../assets/images/arrow-black.svg";
import Favorite from "../../assets/images/favorite.svg";
import { useDispatch, useSelector } from 'react-redux';
import { like, unLike } from '../../redux/slice/likeProducts';
import { AppDispatch, RootState } from '../../redux/store';

const CustomArrowLeft: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
        className={`left ${className}`}
        style={{
            padding: "10px",
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

const CustomArrowRight: React.FC<ArrowProps> = ({ className, style, onClick }) => (
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

const CarouselCategory: React.FC<{ products: any }> = ({ products }) => {
    const dispatch = useDispatch<AppDispatch>(); 
    const likedProducts = useSelector((state: RootState) => state.wishlist.liked);

    const handleLike = (id: string) => {
        dispatch(like(id));
    };

    const handleUnlike = (id: string) => {
        dispatch(unLike(id));
    };

    return (
        <Container>
            <div className="my-[200px]">
                <ConfigProvider>
                    <Carousel
                        infinite
                        dots={false}
                        slidesToShow={5}
                        slidesToScroll={5}
                        arrows
                        nextArrow={<CustomArrowRight />}
                        prevArrow={<CustomArrowLeft />}
                    >
                        {products?.map((item: any) => {
                            const isLiked = likedProducts.includes(item.id);
                            return (
                                <div key={item.id} className="w-[300px] max-h-[450px] flex flex-col relative px-[10px] group">
                                    {/* Image & Hover Like Button */}
                                    <div className="relative w-full h-[250px] bg-[#FAFAFA] flex justify-center items-center cursor-pointer group-hover:bg-[#F5F5F5]">
                                        <img className="h-full" src={item.api_featured_image} alt={item.name} />
                                        
                                        {/* Like Button only on hover */}
                                        <button 
                                            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            onClick={() => isLiked ? handleUnlike(item.id) : handleLike(item.id)}
                                        >
                                            <img className="w-6 h-6" src={Favorite} alt="Favorite" />
                                        </button>
                                    </div>
                                    
                                    {/* Product Information */}
                                    <div className="flex flex-col items-start p-2">
                                        {/* Name */}
                                        <p className="capitalize font-bold text-[14px] text-left text-[#333]">
                                            {item.name}
                                        </p>
                                        {/* Rating */}
                                        <p className="text-yellow-500 text-sm mt-1">
                                            ★★★★☆ 175
                                        </p>
                                        {/* Prices */}
                                        <div className="mt-2 flex items-center space-x-2">
                                            <p className="text-red-500 font-bold text-lg">
                                                522000 сум
                                            </p>
                                            <p className="line-through text-gray-500 text-sm">
                                                533000 сум
                                            </p>
                                        </div>
                                    </div>

                                    {/* Buy Button */}
                                    <button className="w-full py-2 mt-auto bg-[#333] text-white text-sm text-center font-semibold hover:bg-[#555]">
                                        Купить
                                    </button>
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
