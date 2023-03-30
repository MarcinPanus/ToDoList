import { combineReducers } from "@reduxjs/toolkit";
import { tasksApiReducer } from "@store/services/tasksService";

const reducer = combineReducers({
  ...tasksApiReducer,
});
export default reducer;
