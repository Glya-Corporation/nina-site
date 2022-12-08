import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        getProducts: (state, action) => {
            const products = action.payload;
            return products;
        }
    }
})

export const getProductsThunk = () => dispatch => {
    //dispatch(setShowLoader(true));
    return axios.get("https://ninadb-production.up.railway.app/api/v1/products?offset=0&limit=100")
        .then(data => dispatch(getProducts(data.data)))
    //.finally(() => dispatch(setShowLoader(false)));
}

export const updateCategpryThunk = (id, category) => dispatch => {
    //dispatch(setIsLoading(true));
    return axios.put(`https://ninadb-production.up.railway.app/api/v1/products/${id}`, { category: category })
        .then(data => console.log(data))
        .then(() => dispatch(getProductsThunk()))
        .catch(error => console.error(error))
    //.finally(() => dispatch(setIsLoading(false)));
}

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;