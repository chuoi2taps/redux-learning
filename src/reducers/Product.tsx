import { produce } from "immer";

const initState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string }
export const productReducer = (state = initState, action: any) => {
    return produce(state, draft => {
        switch (action.type) {
            case "products/fetching":
                draft.isLoading = true
                break;
            case "products/fetchingSuccess":
                draft.products = action.payload
                break;
            case "products/fetchingFailed":
                draft.error = action.payload
                break;
            case "products/fetchingFinally":
                draft.isLoading = false
                break;
            case "products/addProduct":
                draft.products.push(action.payload)
                break;
            case "products/updateProduct":
                const product = action.payload;
                draft.products = draft.products.map((item: any) => item.id === product.id ? product : item)
                break;
            case "products/deleteProduct":
                const id = action.payload;
                draft.products = draft.products.filter((item: any) => item.id !== id)
                break;
            default:
                return state;
        }
    })
}
