import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoadingSlice";
import axios from "axios";

export const productSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		setProduct: (state, action) => {
			const products = action.payload;
			return products;
		},
	},
});

export const getProductThunk = () => (dispatch) => {
	dispatch(setIsLoading(true));
	return axios
		.get("https://e-commerce-api.academlo.tech/api/v1/products")
		.then((res) => dispatch(setProduct(res.data?.data.products)))
		.finally(() => dispatch(setIsLoading(false)));
};

export const filterTitleThunk = (searchByTitle) => (dispatch) => {
	dispatch(setIsLoading(true));
	return axios
		.get(
			`https://e-commerce-api.academlo.tech/api/v1/products?query=${searchByTitle}`
		)
		.then((res) => dispatch(setProduct(res.data?.data.products)))
		.finally(() => dispatch(setIsLoading(false)));
};

export const filterByCategory = (categoryId) => (dispatch) => {
	dispatch(setIsLoading(true));
	return axios
		.get(
			`https://e-commerce-api.academlo.tech/api/v1/products?category=${categoryId}`
		)
		.then((res) => dispatch(setProduct(res.data?.data.products)))
		.finally(() => dispatch(setIsLoading(false)));
};

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
