import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoadingSlice";

export const purchasesSlice = createSlice({
	name: "purchases",
	initialState: [],
	reducers: {
		setPurchases: (state, action) => {
			const purchases = action.payload;
			return purchases;
		},
	},
});

export const getPurchasesThunk = () => (dispatch) => {
	dispatch(setIsLoading(true));
	return axios
		.get(
			"https://e-commerce-api.academlo.tech/api/v1/purchases",
			getConfig()
		)
		.then((res) => dispatch(setPurchases(res.data.data.purchases)))
		.finally(() => dispatch(setIsLoading(false)));
};

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
