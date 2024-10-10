import { useParams } from "react-router-dom";
import { useGetProductWithCategoriesQuery } from "../../redux/api/productsApi";
import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import Menu from "../../components/menu/Menu";
import Banner from "../../components/banners/Banner";
import CarouselCategory from "../../components/slider/CarouselCategory";
import { Checkbox } from 'antd';
import { Container } from "../../utils";
import CardRender from "../../components/cardRender/CardRender";
import { Product } from "../../types";

const Categories = () => {
    const { category } = useParams();
    const { data } = useGetProductWithCategoriesQuery(category);
    const [products, setProducts] = useState<Product[] | null>(null); 

    useEffect(() => {
        setProducts(data);
    }, [data]);

    return (
        <div>
            <Banner />
            <Nav />
            <Menu />
            <div>
                <h1 className="capitalize text-center my-5 text-[#a6a2a2] cursor-pointer ">
                    <span className="hover:text-[#000]">MAKEUP</span> /{" "}
                    <span className="text-[#000]">{category}</span>
                </h1>
            </div>
            <Container>
                <div className="flex">
                    <div className="w-[312px] pr-[64px]">
                        <ul className="flex flex-col gap-[16px] font-fixel text-[16px] text-[#212121] ">
                            <li className="font-bold">Бренды</li>
                            <li><Checkbox>Alfaparf</Checkbox></li>
                            <li><Checkbox>Kerastase</Checkbox></li>
                            <li><Checkbox>L'Oreak Paris</Checkbox></li>
                            <li><Checkbox>L'Oreak Professional</Checkbox></li>
                            <li><Checkbox>Matrix</Checkbox></li>
                            <li><Checkbox>Schwarzkopf Professional</Checkbox></li>
                            <li><Checkbox>-417</Checkbox></li>
                            <li><Checkbox>4 Seasons</Checkbox></li>
                            <li><Checkbox>4Organic</Checkbox></li>
                        </ul>
                    </div>
                    <CarouselCategory />
                </div>
            </Container>
            <Container>
                <div className="flex">
                    <div className="w-[312px] pr-[20px] box-border"></div>
                    <CardRender products={products} /> 
                </div>
            </Container>
        </div>
    );
}

export default Categories;
