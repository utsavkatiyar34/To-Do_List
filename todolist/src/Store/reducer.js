import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from "./actionTypes";

const initialState = {
  todo: {
    loading: false,
    error: false,
    data: []
  }
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LOADING:
      return {
        ...state,
        todo: {
        ...state.todo,
          loading: true,
        },
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todo: {
        ...state.todo,
          loading: false,
          error: false,
        },
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        todo: {
        ...state.todo,
          loading: false,
          error: true,
        },
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        todo: {
        ...state.todo,
          loading: true,
        },
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todo: {
        ...state.todo,
          loading: false,
          error: false,
          data: action.payload,
        },
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        todo: {
        ...state.todo,
          loading: false,
          error: true,
        },
      };

    default:
      return {...state}
  }
};
