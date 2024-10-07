import React from 'react';
import Nav from '../../components/nav/Nav';
import Menu from '../../components/menu/Menu';
import CarouselHeader from '../../components/slider/Slider';
import Brands from '../../components/brands/Brands';

const Home: React.FC = () => {

    return (
        <>
            <Nav/>
            <Menu/>
            <CarouselHeader/>
            <Brands/>
        </>     
    );
};

export default Home;