import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS,GET_TODO_LOADING,
        GET_TODO_SUCCESS,GET_TODO_ERROR,PATCH_TODO_ERROR,PATCH_TODO_LOADING,PATCH_TODO_SUCCESS,
DELETE_TODO_ERROR,DELETE_TODO_SUCCESS,DELETE_TODO_LOADING} from "./actionTypes"

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

export const patchToDoLoading= () => {
        return{
                type:PATCH_TODO_LOADING,

        }
}
export const patchToDoSuccess =(payload)=>{
        return{
                type:PATCH_TODO_SUCCESS,
                payload
        }
}
export const patchToDoError =()=>{
        return{
                type:PATCH_TODO_ERROR,
        }
}

export const deleteToDoLoading= () => {
        return{
                type:DELETE_TODO_LOADING,

        }
}
export const deleteToDoSuccess =()=>{
        return{
                type:DELETE_TODO_SUCCESS,
        }
}
export const deleteToDoError =()=>{
        return{
                type:DELETE_TODO_ERROR,
        }
}