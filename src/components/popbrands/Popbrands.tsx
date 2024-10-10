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
  const [showModal, setShowModal] = useState(true); // Состояние для отображения модального окна

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
    setShowModal(false); // Закрыть модальное окно
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm">
            <h2 className="text-lg font-semibold">Notice</h2>
            <p>
              "This site may experience issues loading the home page. If you encounter any errors or see nothing displayed, please refresh the site."
            </p>
            <p className="mt-2">
              "Please note that this website was developed in approximately 24 hours before the exam. Thank you for your understanding."
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
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
