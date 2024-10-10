import { useEffect, useState } from "react";
import { useGetProductWithBrandsQuery, useGetProductWithCategoriesQuery } from "../../redux/api/productsApi";
import Loading from "../../assets/images/loading.gif";
import Card from "../../components/card/Card";
import { Container } from "../../utils";
import Recom from "../card/Recom";

const Popbrands = () => {
  const { data } = useGetProductWithBrandsQuery("dior");
  const {data:data2} =useGetProductWithCategoriesQuery("powder");
  const [products, setProducts] = useState([]);
  const [productsv2, setProductsv2] = useState([]);
  const [productsv3, setProductsv3] = useState([]);
  const [productsv4, setProductsv4] = useState([]);
  console.log(data2)
  useEffect(() => {
    setProducts(data?.slice(0, 20));
  }, [data]);

  useEffect(() => {
    setProductsv2(data?.slice(45, 55));
  }, [data]);

  useEffect(() => {
    setProductsv3(data2?.slice(30, 50));
  }, [data2]);

  useEffect(() => {
    setProductsv4(data2?.slice(55, 65));
  }, [data2]);

  

  if (products === undefined) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={Loading} alt="Loading" />
      </div>
    );
  }
  return (
    <div>
      <Container>
        <h1 className="flex justify-center items-center h-3">
          <span className="mt-[120px] font-fixel text-[26px] font-medium align-center">
            Предложения Брендов
          </span>
        </h1>
      </Container>
      <Card products={products} />
      <Recom products={productsv2} />
      <h1 className="flex justify-center items-center h-3">
          <span className="mt-[120px] font-fixel text-[26px] font-medium align-center">
            Предложения Брендов
          </span>
        </h1>
      <Card products={productsv3} />
      <Recom products={productsv4} />
    </div>
  );
};

export default Popbrands;
