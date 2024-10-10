interface ArrowProps {
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void,
}

export { ArrowProps }


export type Product = {
    id: string; 
    name: string;
    price: number;
    api_featured_image: string;
    color: string;
    brand: string;
    price_sign: string;
    currency: string;
    image_link: string;
    rating: number;
    product_type: string;
    description: string;
};

export type CartItem = Pick<Product, 'id' | 'name' | 'price' | 'api_featured_image' | 'color'>;
