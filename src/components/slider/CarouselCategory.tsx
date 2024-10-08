import { Carousel, ConfigProvider } from 'antd';
import Carousel1_1 from "../../assets/images/carousel1_1.jpg";
import Carousel1_2 from "../../assets/images/carousel1_2.jpg";
import Carousel1_3 from "../../assets/images/carousel1_3.jpg";
import Carousel1_4 from "../../assets/images/carousel1_4.jpg";
import Carousel1_5 from "../../assets/images/carousel1_5.jpg";
import Carousel1_6 from "../../assets/images/carousel1_6.jpg";
import Arrow from "../../assets/images/arrow.svg";
import { Container } from '../../utils';
import { ArrowProps } from '../../types';
import './CarouselHeader.css';

const CustomArrowLeft: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={`carousel-arrow left ${className}`}
            style={{
                padding: "10px",
                ...style,
                background: "white",
                backgroundRepeat: 'no-repeat',
                width: '50px',
                height: '50px',
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%) rotate(180deg)',
                cursor: 'pointer',
                zIndex: 10,
            }}
            onClick={onClick}><img className='w-full h-full' src={Arrow} /></div>
    );
};

const CustomArrowRight: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={`carousel-arrow right ${className}`}
            style={{
                ...style,
                padding: "10px",
                background: "white",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '50px',
                height: '50px',
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                zIndex: 10,
            }}
            onClick={onClick}><img className='w-full h-full' src={Arrow} /></div>
    );
};

const CarouselCategory: React.FC = () => {
    return (
        <Container>
            <div className="carousel-wrapper">
                <ConfigProvider
                    theme={{
                        components: {
                            Carousel: {
                                dotWidth: 5,
                                dotHeight: 5,
                                dotActiveWidth: 10,
                            },
                        },
                    }}
                >
                    <Carousel pauseOnHover autoplay autoplaySpeed={2500} effect="fade" arrows={true} nextArrow={<CustomArrowRight />} prevArrow={<CustomArrowLeft />} >
                        <div>
                            <img src={Carousel1_1} alt="" />
                        </div>
                        <div>
                            <img src={Carousel1_2} alt="" />
                        </div>
                        <div>
                            <img src={Carousel1_3} alt="" />
                        </div>
                        <div>
                            <img src={Carousel1_4} alt="" />
                        </div>
                        <div>
                            <img src={Carousel1_5} alt="" />
                        </div>
                        <div>
                            <img src={Carousel1_6} alt="" />
                        </div>
                    </Carousel>
                </ConfigProvider>
            </div>
        </Container>
    );
};

export default CarouselCategory;
