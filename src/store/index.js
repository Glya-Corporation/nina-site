import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'
import setShowLoader  from './slices/showLoader.slice'

export default configureStore({
    reducer: {
        products: productsSlice,
        loader: setShowLoader
    }
})
