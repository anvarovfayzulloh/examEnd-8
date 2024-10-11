import { useEffect, useState } from "react";
import { useGetProductWithBrandsQuery, useGetProductWithCategoriesQuery } from "../../redux/api/productsApi";
import Loading from "../../assets/images/loading.gif";
import Card from "../../components/card/Card";
import { Container } from "../../utils";
import Recom from "../card/Recom";

const Popbrands = () => {
  const { data } = useGetProductWithBrandsQuery("dior");
  const { data: data2 } = useGetProductWithCategoriesQuery("powder");
  const [products, setProducts] = useState([]);
  const [productsv2, setProductsv2] = useState([]);
  const [productsv3, setProductsv3] = useState([]);
  const [productsv4, setProductsv4] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(true);

  useEffect(() => {
    setProducts(data?.slice(0, 20));
    setProductsv2(data?.slice(45, 55));
  }, [data]);

  useEffect(() => {
    setProductsv3(data2?.slice(30, 50));
    setProductsv4(data2?.slice(55, 65));
  }, [data2]);

  if (products === undefined) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={Loading} alt="Loading" />
      </div>
    );
  }
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Container>
      {isModalVisible && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 ">
            <div className="bg-white p-5 rounded shadow-lg text-center  max-w-[420px]">
              <h2 className="text-xl font-semibold">Important Notice</h2>
              <p className="mt-4 mb">
              Please note that the project is done approximately 24 hours before the exam. Thank you for your understanding.
              </p>
              <p>

              </p>
              <button
                onClick={handleCloseModal}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
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
