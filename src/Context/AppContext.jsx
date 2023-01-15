import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { getProductFailureAction, getProductRequestAction, getProductSuccessAction } from "../Reducer/action";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../Reducer/actionTypes";
import { reducer } from "../Reducer/reducer";

export const AppContext = createContext()

const {Provider} = AppContext
const initState = {
        isLoading : false,
        isError: false,
        product: [],
        cart: [],
        isSidebarOpen: false
    }
const url= "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"

export const AppContextProvider = ({children})=>{  
    const [state,dispatch] = useReducer(reducer,initState)
    const openSidebar=()=>{
        dispatch({type:OPEN_SIDEBAR})
      }
      const closeSidebar=()=>{
        dispatch({type:CLOSE_SIDEBAR})
      }
    const getProducts = ()=>{
        dispatch(getProductRequestAction())
        fetch(url)
        .then(res=> res.json())
        .then(res => {
            // console.log(res)
            dispatch(getProductSuccessAction(res))
        })
        .catch(err => {
            console.log(err)
            dispatch(getProductFailureAction())
        })
    }
    // console.log(state)
    useEffect(()=>{
        getProducts()
    },[])
    return(
        <Provider value={{state,dispatch,openSidebar,closeSidebar}}>
            {children}
        </Provider>
    )
}