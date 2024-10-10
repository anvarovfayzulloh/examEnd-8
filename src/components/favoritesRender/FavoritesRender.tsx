import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import useCurrency from "../../hooks/useHooks";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";
import { useGetProductWithIdQuery } from "../../redux/api/productsApi";
import { addCart } from "../../redux/slice/addCartSlice";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { like, unLike } from "../../redux/slice/likeProducts";

interface FavoritesRenderProps {
    id: string;
}

const FavoritesRender: React.FC<FavoritesRenderProps> = ({ id }) => {
    const dispatch = useDispatch<AppDispatch>();
    const likedProducts = useSelector((state: RootState) => state.wishlist.liked);
    const { data, error, isLoading } = useGetProductWithIdQuery(id);
    
    const item = data || {};
    const { currency, convertPrice } = useCurrency(item.price);
    const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});
    const selectedColor = selectedColors[item.id] || (item.product_colors?.[0]?.hex_value || "");
    const isLiked = likedProducts.includes(item.id);

    useEffect(() => {
        if (item.id) {
            setSelectedColors((prev) => ({ ...prev, [item.id]: item.product_colors?.[0]?.hex_value }));
        }
    }, [item.id, item.product_colors]);

    const handleAddCart = () => {
        if (item) {
            dispatch(addCart({ ...item, color: selectedColor }));
        }
    };

    const handleLikeToggle = () => {
        if (isLiked) {
            dispatch(unLike(item.id));
        } else {
            dispatch(like(item.id));
        }
    };

    if (isLoading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center">Error loading product</p>;

    return (
        <div className="flex flex-col w-[280px]  p-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative flex items-center justify-center h-[250px]">
                <img 
                    className="object-cover w-full h-full" 
                    src={item.api_featured_image} 
                    alt={item.name} 
                />
                <button
                    onClick={handleLikeToggle}
                    aria-label={isLiked ? 'Unlike product' : 'Like product'}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
                >
                    {isLiked ? (
                        <FcLike className="w-6 h-6 transition-opacity duration-200" />
                    ) : (
                        <FcLikePlaceholder className="w-6 h-6 transition-opacity duration-200" />
                    )}
                </button>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</h3>
            <p className="mt-1 text-sm text-gray-600 capitalize">{item.product_type}</p>
            <div className="mt-2 text-sm text-gray-700 flex items-center">
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <span key={index}>
                            {index < (item.rating ?? 0) ? "★" : "☆"}
                        </span>
                    ))}
                    <span className="ml-1">{item.rating === null ? 0 : item.rating}</span>
                </div>
            </div>
            <p className="mt-1 text-lg font-bold">{convertPrice()} {currency}</p>
            <div className="mt-2">
                <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={selectedColor}
                    onChange={(e) => {
                        setSelectedColors({ ...selectedColors, [item.id]: e.target.value });
                    }}
                >
                    {item.product_colors?.map((color: any) => (
                        <option key={color.hex_value} value={color.hex_value}>
                            {color.colour_name}
                        </option>
                    ))}
                </select>
            </div>
            <button
                onClick={handleAddCart}
                className="mt-3 py-2 bg-black text-white w-full rounded hover:bg-gray-800 transition duration-200"
            >
                Купить
            </button>
        </div>
    );
};

export default FavoritesRender;
