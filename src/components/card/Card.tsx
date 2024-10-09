import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import { Container } from '../../utils';
import { ArrowProps } from '../../types';
import '../slider/CarouselHeader.css';
import Arrow from "../../assets/images/arrow-black.svg";
import Favorite from "../../assets/images/favorite.svg";
import { useDispatch, useSelector } from 'react-redux';
import { like, unLike } from '../../redux/slice/likeProducts';
import { AppDispatch, RootState } from '../../redux/store'; // Import RootState

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
            left: '1470px',
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
    const likedProducts = useSelector((state: RootState) => state.wishlist.liked); // Use RootState to specify the type

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
                                <div key={item.id} className="w-[300px] max-h-[352px] flex flex-col relative px-[10px] group">
                                    <div className='w-full h-full px-[40px] py-[24px] flex justify-center items-center cursor-pointer bg-[#FAFAFA] relative'>
                                        <img className='h-full' src={item.api_featured_image} alt={item.name} />
                                        <button onClick={() => isLiked ? handleUnlike(item.id) : handleLike(item.id)}>
                                            <img className={`absolute top-3 right-4 w-6 h-6 transition-opacity duration-200 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} src={Favorite} alt="Favorite" />
                                        </button>
                                    </div>
                                    <p className='capitalize font-fixel font-normal text-[16px] hover:text-[#5b24c9]'>
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
