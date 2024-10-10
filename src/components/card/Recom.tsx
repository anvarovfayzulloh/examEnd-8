export const Users = [
    {
        id: 1,
        name: "Оксана",
        comments: "Пудра понравилась, на лице незаметна, прям нежная-нежная, и цена приемлемая. Спасибо Makeup",
    },
    {
        id: 2,
        name: "Андрей",
        comments: "Хороший крем для лица, отлично увлажняет и защищает.",
    },
];

import { Carousel, ConfigProvider } from 'antd';
import { Container } from '../../utils';
import { ArrowProps } from '../../types';
import '../slider/CarouselHeader.css';
import Arrow from "../../assets/images/arrow-black.svg";
import Query from "../../assets/images/query.svg"
import useCurrency from '../../hooks/useHooks';

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

const Recom: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <Container>
            <div className="my-[100px]">
                <ConfigProvider theme={{ components: { Carousel: {}, }, }}>
                    <Carousel infinite dots={false} slidesToShow={2} slidesToScroll={2} arrows nextArrow={<CustomArrowRight />} prevArrow={<CustomArrowLeft />}>
                        {products?.map((item, index) => {
                            const userReview = Users[index % Users.length];
                            const { currency, convertPrice } = useCurrency(item.price);

                            return (
                                <div key={item.id} >
                                    <div className="p-4 bg-[#FAFAFA] mr-[30px]">
                                        <div className="flex  items-center">
                                            <img className="w-[200px] h-[200px] object-cover rounded-lg mb-4" src={item.api_featured_image} alt={item.name} />
                                            <div className="text-center relative pl-[20px]">
                                                <img className='absolute top-[-35px] left-[30px] w-[18px] h-[18px]' src={Query} alt="" />
                                                <p className="text-left break-words max-w-[300px] font-fixel font-semibold text-[20px] ">{userReview.comments}</p>
                                                <p className="font-normal text-left ">{userReview.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pl-[16px]' >
                                        <p className=' pt-[10px] font-fixel text-[14px] hover:text-[#5b24c9]' >
                                            {item.name}
                                        </p>
                                        <p className=' pt-[4px] text-[#727178] font-fixel text-[12px] hover:text-[#5b24c9] capitalize' >
                                            {item.product_type.split('_').join(' ')}
                                        </p>
                                        <p className="font-fixel text-[16px] mt-[5px] text-red-600">
                                            {convertPrice()} {currency}
                                        </p>
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

export default Recom;
