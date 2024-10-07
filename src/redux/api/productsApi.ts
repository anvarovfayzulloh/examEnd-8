import { api } from "./index";

const productsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query({
            query: () => ({
                url: "/products.json",
            }),
        }),
    }),
});

export const { useGetProductQuery } = productsApi;