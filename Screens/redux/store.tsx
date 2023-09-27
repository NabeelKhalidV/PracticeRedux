import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";
// import { combineReducers } from "redux"; "./rootreducer

const store=configureStore({
    reducer:rootreducer
});

export default store;