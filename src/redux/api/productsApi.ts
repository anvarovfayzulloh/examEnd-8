import { api } from "./index";

const productsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query({
            query: () => ({
                url: "/products.json",
            }),
        }),
        getProductWithCategories: build.query({
            query: (category) => ({
                url: `/products.json?product_category=${category}`,
            }),
        }),
    }),
});

export const { useGetProductQuery, useGetProductWithCategoriesQuery } = productsApi;