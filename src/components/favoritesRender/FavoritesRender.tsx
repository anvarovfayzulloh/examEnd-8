import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import useCurrency from "../../hooks/useHooks";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";
import { useGetProductWithIdQuery } from "../../redux/api/productsApi";
import { addCart} from "../../redux/slice/addCartSlice"; 
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { like, unLike } from "../../redux/slice/likeProducts";

const FavoritesRender: React.FC<{ id: string }> = ({ id }) => {
    const dispatch = useDispatch<AppDispatch>();
    const likedProducts = useSelector((state: RootState) => state.wishlist.liked);
    const { data } = useGetProductWithIdQuery(id);
    const item = data || {};
    const { currency, convertPrice } = useCurrency(item.price);
    const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});
    const selectedColor = selectedColors[item.id] || (item.product_colors?.[0]?.hex_value || "");
    const isLiked = likedProducts.includes(item.id);

    useEffect(() => {
        if (item.id) {
            setSelectedColors((prev) => ({ ...prev, [item.id]: item.product_colors[0]?.hex_value }));
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

    return (
        <div key={item.id}>
            <div className="relative group p-[40px] w-[300px] h-[400px] pb-[5px]">
                <div className='relative flex justify-center items-center bg-[#fafafa] w-full h-full p-[40px]'>
                    <img className='object-center object-cover w-full h-full' src={item.api_featured_image} alt={item.name} />
                    <button
                        onClick={handleLikeToggle}
                        aria-label={isLiked ? 'Unlike product' : 'Like product'}
                    >
                        {isLiked ? (
                            <FcLike className={`absolute top-2 right-3 w-6 h-6 transition-opacity duration-200 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        ) : (
                            <FcLikePlaceholder className={`absolute top-2 right-3 w-6 h-6 transition-opacity duration-200 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        )}
                    </button>
                </div>
            </div>
            <p className="font-fixel text-[16px] overflow-hidden whitespace-nowrap text-ellipsis pr-[61px] pl-[40px]">
                {item.name}
            </p>
            <p className="mt-1 text-[#727178] text-[14px] break-words font-fixel pl-[40px] capitalize">
                {item.product_type}
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
                    {item.product_colors?.map((color: any) => (
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
                    onClick={handleAddCart}
                    className="py-[6px] bg-black text-white flex items-center justify-center w-full px-[40px] font-fixel text-[14px]"
                >
                    Купить
                </button>
            </div>
        </div>
    );
};

export default FavoritesRender;
