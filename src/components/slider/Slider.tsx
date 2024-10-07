import { Carousel, ConfigProvider } from 'antd';
import Carousel_1 from "../../assets/images/carousel_1.jpg";
import Carousel_2 from "../../assets/images/carousel_2.jpg";
import Carousel_3 from "../../assets/images/carousel_3.jpg";
import Carousel_4 from "../../assets/images/carousel_4.jpg";
import Carousel_5 from "../../assets/images/carousel_5.jpg";
import Arrow from "../../assets/images/arrow.svg";
import { Container } from '../../utils';
import { ArrowProps } from '../../types';

const CustomArrowLeft: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{
                padding: "10px",
                ...style,
                background: "white",
                backgroundRepeat: 'no-repeat',
                width: '60px',
                height: '60px',
                position: 'absolute',
                top: '270px',
                left: '10px',
                transform: 'rotate(180deg)',
                cursor: 'pointer',
                zIndex: 10,
            }}
            onClick={onClick}><img className='w-full h-full' src={Arrow} /></div>
    );
};

const CustomArrowRight: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                padding: "10px",
                background: "white",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '60px',
                height: '60px',
                position: 'absolute',
                top: '50%',
                right: '10px',
                cursor: 'pointer',
                zIndex: 10,
            }}
            onClick={onClick}><img className='w-full h-full' src={Arrow} /></div>
    );
};

const CarouselHeader: React.FC = () => {
    return (
        <Container>
            <div style={{ position: 'relative' }}>

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
                    <Carousel effect="fade" arrows={true} nextArrow={<CustomArrowRight />} prevArrow={<CustomArrowLeft />} >
                        <div>
                            <img src={Carousel_1} alt="" />
                        </div>
                        <div ons >
                            <img src={Carousel_2} alt="" />
                        </div>
                        <div>
                            <img src={Carousel_3} alt="" />
                        </div>
                        <div>
                            <img src={Carousel_4} alt="" />
                        </div>
                        <div>
                            <img src={Carousel_5} alt="" />
                        </div>
                    </Carousel>
                </ConfigProvider>
            </div>
        </Container>
    );
};

export default CarouselHeader;
