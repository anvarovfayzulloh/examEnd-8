import React from 'react';
import { useGetProductQuery } from '../../redux/api/productsApi';

const Home: React.FC = () => {
    const { data, isLoading, error } = useGetProductQuery(undefined);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <div>
            {data?.map((product: any) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <img src={product.image_link} alt={product.name} style={{ width: '100px' }} />
                    <p>{product.brand}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;