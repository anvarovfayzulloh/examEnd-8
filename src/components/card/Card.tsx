import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import { Container } from '../../utils';
import { ArrowProps } from '../../types';
import '../slider/CarouselHeader.css';
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
                                <div key={item.id} className="w-[300px] max-h-[400px] flex flex-col relative px-[10px] group">
                                    <div className="relative w-full h-[250px] px-[20px] py-[20px] bg-[#FAFAFA] flex justify-center items-center cursor-pointer group-hover:bg-[#F5F5F5]">
                                        <img className="h-full" src={item.api_featured_image} alt={item.name} />
                                        
                                        {/* Like and Buy buttons only visible on hover */}
                                        <div className="absolute inset-0 flex justify-between items-start p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button onClick={() => isLiked ? handleUnlike(item.id) : handleLike(item.id)}>
                                                <img className="w-6 h-6" src={Favorite} alt="Favorite" />
                                            </button>
                                            <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md">
                                                Купить
                                            </button>
                                        </div>
                                    </div>
                                    <p className="mt-4 font-semibold text-sm text-center capitalize hover:text-[#5b24c9] transition-colors">
                                        {item.name}
                                    </p>
                                    <p className="text-center text-gray-600 mt-1">
                                        {item.price} {item.currency}
                                    </p>
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
