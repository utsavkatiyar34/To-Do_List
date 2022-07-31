import React, { useEffect } from "react";
import "../Styles/todo.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDoError,
  addToDoLoading,
  addToDoSuccess,
  deleteToDoError,
  deleteToDoLoading,
  deleteToDoSuccess,
  getToDoError,
  getToDoLoading,
  getToDoSuccess,
  patchToDoError,
  patchToDoLoading,
  patchToDoSuccess,
} from "../Store/actions";
export const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.todo);
  const {status} = useSelector((state) => state.login);
  let reqGet = () => {
    dispatch(getToDoLoading());
    axios({
      method: "get",
      url: "http://localhost:4000/todo",
    })
      .then((res) => {
        dispatch(getToDoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getToDoError());
      });
  };
  useEffect(() => {
    reqGet();
  }, []);
 
  let handleTodo = () => {
    dispatch(addToDoLoading());
    axios({
      method: "post",
      url: "http://localhost:4000/todo",
      data: {
        title: text,
        status: false,
        id: v4(),
      },
    })
      .then((res) => {
        dispatch(addToDoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addToDoError());
      });
    reqGet();
  };
  const handleToggle = (id, status) => {
    dispatch(patchToDoLoading());
    axios({
      method: "patch",
      url: `http://localhost:4000/todo/${id}`,
      data: {
        status: !status,
      },
    })
      .then((res) => {
        dispatch(patchToDoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(patchToDoError());
      });
    reqGet();
  };
  const handleDelete = (id) => {
    dispatch(deleteToDoLoading());
    axios({
      method: "delete",
      url: `http://localhost:4000/todo/${id}`,
    })
      .then((res) => {
        dispatch(deleteToDoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(deleteToDoError());
      });
    reqGet();
  };
  return (
    <>
      <div style={{ padding: "1.5vw", width: "100%", height:"2vw",textAlign:'center'}}>
        <input
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="inpfield"
          type="text"
        ></input>
        <Button
          onClick={handleTodo}
          variant="solid"
          sx={{
            color: "white",
            backgroundColor: "#900C3F",
            borderColor: "#900C3F",
            height:"2vw",
            "&:hover": { backgroundColor: "#a0522d" },
          }}
        >
          Add To-Do
        </Button>
      </div>
      {data.map((el) => {
        return (
          <div
            style={{
              border: "4px solid #900C3F",
              marginBottom: "1vw",
              padding: "1vw",
              width: "50%",
              marginLeft: "25%",
              textAlign:'center'
            }}
          >
            <div
              style={{
                color: "brown",
                fontSize: "2vw",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
              key={el.id}
            >
              {el.title}
            </div>
            <div>
              <Button
                onClick={() => handleToggle(el.id, el.status)}
                variant="solid"
                sx={{
                  color: "white",
                  backgroundColor: "#900C3F",
                  borderColor: "#900C3F",
                  width: "8vw",
                  height:"2vw",
                  marginRight: ".5vw",
                  "&:hover": { backgroundColor: "#a0522d" },
                }}
              >
                {el.status ? "Done" : "Pending"}
              </Button>
              <Button
                onClick={() => handleDelete(el.id)}
                variant="solid"
                sx={{
                  color: "white",
                  backgroundColor: "#900C3F",
                  borderColor: "#900C3F",
                  height:"2vw",
                  width: "8vw",
                  "&:hover": { backgroundColor: "#a0522d" },
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};
