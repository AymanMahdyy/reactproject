import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./cartSlice";

export const store=configureStore({
    reducer:cartslice.reducer

})