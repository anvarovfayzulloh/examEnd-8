interface ArrowProps {
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void,
}

export { ArrowProps }


export interface Product  {
    id: string; 
    name: string;
    price: number;
    api_featured_image: string;
    color: string;
    brand: string;
    price_sign: string;
    currency: string;
    image_link: string;
    product_type: string;
    description: string;
};

export interface Product {
    rating: number | null;
    product_colors: { hex_value: string; colour_name: string }[];
}


export type CartItem = Pick<Product, 'id' | 'name' | 'price' | 'api_featured_image' | 'color'>;
