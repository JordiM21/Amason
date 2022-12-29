import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import isLoadingSlice from "./slices/isLoadingSlice";
import productSlice from "./slices/productSlice";
import purchasesSlice from "./slices/purchasesSlice";

export default configureStore({
	reducer: {
		isLoading: isLoadingSlice,
		products: productSlice,
		cart: cartSlice,
		purchases: purchasesSlice,
	},
});
