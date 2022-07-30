import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS,GET_TODO_LOADING,GET_TODO_SUCCESS,GET_TODO_ERROR,} from "./actionTypes"

export const addToDoLoading= () => {
        return{
                type:ADD_TODO_LOADING,

        }
}
export const addToDoSuccess =(payload)=>{
        return{
                type:ADD_TODO_SUCCESS,
                payload
        }
}
export const addToDoError =()=>{
        return{
                type:ADD_TODO_ERROR,
        }
}
export const getToDoLoading= () => {
        return{
                type:GET_TODO_LOADING,

        }
}
export const getToDoSuccess =(payload)=>{
        return{
                type:GET_TODO_SUCCESS,
                payload
        }
}
export const getToDoError =()=>{
        return{
                type:GET_TODO_ERROR,
        }
}