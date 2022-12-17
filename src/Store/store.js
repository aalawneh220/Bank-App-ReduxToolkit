import { configureStore } from "@reduxjs/toolkit";
import accounsReducer from "./accounsReducer";
import Apireducer from "./Apireducer";
import counterReducer from "./counterReducer";

const store = configureStore({
  reducer: {
    accounts: accounsReducer,
    counter: counterReducer,
    movie: Apireducer,
  },
});

export default store;
