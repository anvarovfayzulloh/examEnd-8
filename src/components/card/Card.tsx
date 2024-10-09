import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import { Container } from '../../utils';
import { ArrowProps } from '../../types';
import '../slider/CarouselHeader.css';
import Arrow from "../../assets/images/arrow-black.svg";
import { useDispatch, useSelector } from 'react-redux';
import { like, unLike } from '../../redux/slice/likeProducts';
import { AppDispatch, RootState } from '../../redux/store';

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

const CustomArrowRight: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
        className={`right ${className}`}
        style={{
            ...style,
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
                        {products?.map((item: any) => {
                            const isLiked = likedProducts.includes(item.id);
                            return (
                                <div
                                key={item.id}
                                >
                                    <div
                                    className="relative group p-[40px] w-[300px] h-[400px]" 
                                >
                                    <div className='relative flex justify-center items-center bg-[#fafafa] w-full h-full p-[40px]'>
                                        <img
                                            className='object-center object-cover w-full h-full' 
                                            src={item.api_featured_image}
                                            alt={item.name}
                                        />
                                        <button
                                            onClick={() => isLiked ? handleUnlike(item.id) : handleLike(item.id)}
                                            aria-label={isLiked ? 'Unlike product' : 'Like product'}
                                        >
                                            {
                                                isLiked
                                                    ?
                                                    <FcLike className={`absolute top-2 right-3 w-6 h-6 transition-opacity duration-200 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                                    :
                                                    <FcLikePlaceholder className={`absolute top-2 right-3 w-6 h-6 transition-opacity duration-200 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                            }
                                        </button>
                                    </div>
                                </div>
                                <p className="font-fixel text-[16px] " >
                                    {item.name}
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
