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
        getProductWithBrands: build.query({
            query: (brand) => ({
                url: `/products.json?brand=${brand}`,
            }),
        }),
        getProductWithId: build.query({
            query: (id) => ({
                url: `/products/${id}.json`,
            }),
        }),
    }),
});

export const { useGetProductQuery, useGetProductWithCategoriesQuery, useGetProductWithBrandsQuery,useGetProductWithIdQuery } = productsApi;