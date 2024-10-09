import React from 'react';
import Nav from '../../components/nav/Nav';
import Menu from '../../components/menu/Menu';
import CarouselHeader from '../../components/slider/Slider';
import Categories from '../../components/brands/Categories';
import Popbrands from '../../components/popbrands/Popbrands';

const Home: React.FC = () => {



    return (
        <>
            <Nav/>
            <Menu/>
            <CarouselHeader/>
            <Categories/>
            <Popbrands/>
        </>     
    );
};

export default Home;