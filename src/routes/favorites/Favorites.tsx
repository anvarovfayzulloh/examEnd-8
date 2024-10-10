import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductWithIdQuery } from "../../redux/api/productsApi";
import { AppDispatch, RootState } from "../../redux/store";
import useCurrency from "../../hooks/useHooks";
import { Product } from "../../types";
import { addCart } from "../../redux/slice/addCartSlice";
import { like, unLike } from "../../redux/slice/likeProducts";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";


const Favorites: React.FC = () => {
    const likedProducts = useSelector((state: RootState) => state.wishlist.liked);

    return (
        <div>
            <h2>Your Favorite Products</h2>
            <div className="favorites-list grid grid-cols-3 gap-4">
                {likedProducts.length > 0 ? (
                    likedProducts.map((productId: string) => (
                        <FavoriteProduct key={productId} id={productId} />
                    ))
                ) : (
                    <p>No favorite products yet.</p>
                )}
            </div>
        </div>
    );
};

interface FavoriteProductProps {
    id: string;
}

const FavoriteProduct: React.FC<FavoriteProductProps> = ({ id }) => {
    
    const dispatch = useDispatch<AppDispatch>();

    const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});

    const handleAddCart = (item: Product, color: string) => {
        dispatch(addCart({ ...item, color }));
    };

    const handleLike = (id: string) => {
        dispatch(like(id));
    };

    const handleUnlike = (id: string) => {
        dispatch(unLike(id));
    };

    const { data: item, isLoading, error } = useGetProductWithIdQuery(id);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product.</p>;
    const likedProducts = useSelector((state: RootState) => state.wishlist.liked);
    const isLiked = likedProducts.includes(item.id);
    const { currency, convertPrice } = useCurrency(item.price);
    const selectedColor = selectedColors[item.id] || item.product_colors[0]?.hex_value;




    return (
        <div key={item.id}>
            <div className="relative group p-[40px] w-[300px] h-[400px] pb-[5px]">
                <div className='relative flex justify-center items-center bg-[#fafafa] w-full h-full p-[40px]'>
                    <img className='object-center object-cover w-full h-full' src={item.api_featured_image} alt={item.name} />
                    <button
                        onClick={() => isLiked ? handleUnlike(item.id) : handleLike(item.id)}
                        aria-label={isLiked ? 'Unlike product' : 'Like product'}
                    >
                        {
                            isLiked
                                ? <FcLike className={`absolute top-2 right-3 w-6 h-6 transition-opacity duration-200 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                : <FcLikePlaceholder className={`absolute top-2 right-3 w-6 h-6 transition-opacity duration-200 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        }
                    </button>
                </div>
            </div>
            <p className="font-fixel text-[16px] overflow-hidden whitespace-nowrap text-ellipsis pr-[61px] pl-[40px]">
                {item.name}
            </p>
            <p className="mt-1 text-[#727178] text-[14px] break-words font-fixel pl-[40px] capitalize">
                {item.product_type.split("_").join(" ")}
            </p>
            <div className="pl-[40px] mb-[5px]">
                <div className="text-[10px] text-[#000] font-fixel mt-[5px]">
                    {[...Array(5)].map((_, index) => (
                        <span key={index}>
                            {index < (item.rating === null ? 0 : item.rating) ? "★" : "☆"}
                        </span>
                    ))}
                    <span>{item.rating === null ? 0 : item.rating}</span>
                </div>
                <p className="font-fixel text-[16px] mt-[5px]">
                    {convertPrice()} {currency}
                </p>
            </div>
            <div className="pl-[40px] flex items-center justify-center max-w-[265px] flex-col gap-[10px]">
                <select
                    className="w-full py-2 border border-gray-300 rounded outline-none"
                    value={selectedColor}
                    onChange={(e) => {
                        setSelectedColors({ ...selectedColors, [item.id]: e.target.value });
                    }}
                >
                    {item.product_colors.map((color: any) => (
                        <option
                            key={color.hex_value}
                            value={color.hex_value}
                            className="text-gray-700 text-[14px] font-fixel"
                        >
                            {color.colour_name}
                        </option>
                    ))}
                </select>
                <button
                    onClick={() => handleAddCart(item, selectedColor)}
                    className="py-[6px] bg-black text-white flex items-center justify-center w-full px-[40px] font-fixel text-[14px]"
                >
                    Купить
                </button>
            </div>
        </div>
    );
};

export default Favorites;
