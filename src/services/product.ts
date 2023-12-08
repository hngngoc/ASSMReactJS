import { AxiosResponse } from "axios";
import instance from "@/core/api";
import { IProduct } from "@/common/Type";

export const getProducts = async () => {
    try {
        const response: AxiosResponse<IProduct[]> = await instance.get('/products')
        return response.data || []
    } catch (error) {
        console.log('[API_FETCHING_PRODUCTS_ERROR]', error)
    }
}
export const getOneProduct = async (id: number) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.get(`/products/${id}`)
        return response.data || {}
    } catch (error) {
        console.log('[API_FETCHING_PRODUCT_ERROR]', error)
    }
}
export const addProduct = async (product: IProduct) => {
    try {
        const response = await instance.post('/products', product)
        return response.data
    } catch (error) {
        console.log('[API_CREATE_PRODUCT_ERROR]', error)
    }
}
export const editProduct = async (product: IProduct) => {
    try {
        const response = await instance.patch('/products/' + product.id, product)
        return response.data
    } catch (error) {
        console.log('[API_UPDATE_PRODUCT_ERROR]', error)
    }
}
export const deleteProduct = async (id: number) => {
    try {
        await instance.delete('/products/' + id)
        return null
    } catch (error) {
        console.log('[API_UPDATE_PRODUCT_ERROR]', error)
    }
}