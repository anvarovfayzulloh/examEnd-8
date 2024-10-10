import { useDispatch } from "react-redux";
import useCurrency from "../../hooks/useHooks";
import { Product } from "../../types";
import { addCart } from "../../redux/slice/addCartSlice";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";

const CardRender: React.FC<{ products: Product[] | null }> = ({ products }) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[80px]">
            {products ? (
                products.map((product) => {
                    // 1. Ensure `useCurrency` is called for every product in the same manner
                    const { currency, convertPrice } = useCurrency(product.price);
                    
                    // 2. Ensure `useState` is not conditional and is always called
                    const defaultColor = product.product_colors[0]?.hex_value || ""; // Fallback if no colors exist
                    const [selectedColor, setSelectedColor] = useState(defaultColor);

                    const handleAddToCart = () => {
                        dispatch(addCart({ ...product, color: selectedColor }));
                    };

                    return (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <img 
                                className="w-full h-48 object-cover" 
                                src={product.api_featured_image} 
                                alt={product.name} 
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2 break-words overflow-hidden max-h-[24px]">{product.name}</h2>
                                <p className="text-gray-700 font-medium">{convertPrice()} {currency}</p>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index}>
                                            {index < (product.rating ?? 0) ? "★" : "☆"}
                                        </span>
                                    ))}
                                    <span className="ml-2 text-gray-600">{product.rating ?? 0}</span>
                                </div>

                                <select
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                    className="mt-4 border border-gray-300 rounded p-2 w-full"
                                >
                                    {product.product_colors?.map((color) => (
                                        <option key={color.hex_value} value={color.hex_value}>
                                            {color.colour_name}
                                        </option>
                                    ))}
                                </select>

                                <button 
                                    onClick={handleAddToCart} 
                                    className="mt-4 bg-black w-full text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors duration-300"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};


export default CardRender;
