import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import reducer from "./reducer";
import { tasksApi } from "./services/tasksService";

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), tasksApi.middleware],
});

setupListeners(store.dispatch);

export default store;
