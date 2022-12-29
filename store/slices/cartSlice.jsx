import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoadingSlice";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		setCart: (state, action) => {
			const currentCart = action.payload;
			return currentCart;
		},
	},
});
export const getCartThunk = () => (dispatch) => {
	dispatch(setIsLoading(true));
	return axios
		.get(
			"https://e-commerce-api.academlo.tech/api/v1/cart",
			getConfig()
		)
		.then((res) => dispatch(setCart(res.data)))
		.catch((error) => console.log(error.response))
		.finally(() => dispatch(setIsLoading(false)));
};
export const addToCartThunk = (item) => (dispatch) => {
	dispatch(setIsLoading(true));
	return axios
		.post(
			"https://e-commerce-api.academlo.tech/api/v1/cart",
			item,
			getConfig()
		)
		.then(() => dispatch(getCartThunk()))
		.finally(() => dispatch(setIsLoading(false)))
		.catch(() =>
			alert(
				"Oops! You've already added this product to the cart"
			)
		);
};
export const buyCartThunk = () => (dispatch) => {
	dispatch(setIsLoading(true));
	return axios
		.post(
			"https://e-commerce-api.academlo.tech/api/v1/purchases",
			{},
			getConfig()
		)
		.then(() => dispatch(setCart([])))
		.finally(() => dispatch(setIsLoading(false)));
};
export const deleteItemFromCart = (id) => (dispatch) => {
	dispatch(setIsLoading(true));
	return axios
		.delete(
			`https://e-commerce-api.academlo.tech/api/v1/cart/${id}`,
			getConfig()
		)
		.then(() => dispatch(getCartThunk()))
		.catch((error) => console.log(error.response))
		.finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
