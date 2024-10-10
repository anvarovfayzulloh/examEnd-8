import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/index';
import { removeCart } from '../../redux/slice/addCartSlice';
import { CartItem } from '../../types';
import { Button } from 'antd';

const Cart = () => {
    const dispatch = useDispatch();
    const cartList = useSelector((state: RootState) => state.carts.cartList);
    const handleClearCart = () =>{
        localStorage.clear();
        location.reload()
    }
    const handleRemoveItem = (item: CartItem) => {
        dispatch(removeCart(item));
    };

    return (
        <div className="p-4 w-full">
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
            {cartList.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='flex gap-[20px]' >
                    <ul className="flex flex-1 flex-col gap-[20px]">
                    {cartList.map((item) => (
                        <li key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center">
                                <img src={item.api_featured_image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                                <div>
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-gray-500">Price: ${item.price}</p>
                                    <p className="text-gray-500">Color: {item.color}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleRemoveItem(item)} 
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    <Button onClick={() => handleClearCart()} >Clear</Button> 
                </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
