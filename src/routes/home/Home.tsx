import React from 'react';
import Nav from '../../components/nav/Nav';
import Menu from '../../components/menu/Menu';
import CarouselHeader from '../../components/slider/Slider';

const Home: React.FC = () => {

    return (
        <>
            <Nav/>
            <Menu/>
            <CarouselHeader/>
        </>     
    );
};

export default Home;