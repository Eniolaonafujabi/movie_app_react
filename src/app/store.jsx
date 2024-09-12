import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice/counterSlice"
import { movieApi } from "../service/Api";
import { setupListeners } from "@reduxjs/toolkit/query";

 const store = configureStore({
    reducer: {
        counter: counterReducer,
        [movieApi.reducerPath]: movieApi.reducer    
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware)
})

setupListeners(store.dispatch)

export default store;