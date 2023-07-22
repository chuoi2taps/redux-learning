import axios from "axios";
export const fetchCart = () => async (dispatch:any) => {
    dispatch({type: "GET_CARTS"});
    try{
        await axios.get(`http://localhost:3000/carts`)
    }
    catch{}
}