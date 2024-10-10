import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Button } from "antd";
import useCurrency from "../../hooks/useHooks";

const Cart = () => {
    const data = useSelector((state: RootState) => state.carts.cartList);
    console.log(data)
    return (
        <div className="flex justify-between p-4 w-full gap-[10px]">
            <div className="flex-1">
                {data.length > 0 ? (
                    data.map((item) => {
                        const { currency, convertPrice } = useCurrency(item.price);
                        return (
                            <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-2">
                                <img src={item.api_featured_image} className="w-16 h-16 object-cover mr-4" />
                                <div className="flex-1">
                                    <h1 className="font-semibold">{item.name}</h1>
                                    <p className="text-gray-500">Price: {convertPrice()} {currency}</p>
                                    <p className="text-gray-500">{item.color}</p>
                                </div>
                                <div className="flex justify-center items-start h-full" >
                                    <Button type="link" danger>Remove</Button>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div>Your cart is empty.</div>
                )}
            </div>
            <div className="flex flex-col gap-4">
                <Button type="primary">Checkout</Button>
                <Button type="primary" danger>Clear</Button>
            </div>
        </div>
    );
};

export default Cart;
