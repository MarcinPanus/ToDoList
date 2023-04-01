import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITaskProps } from "task-types";

enum TasksTagTypes {
  TASKS = "TASKS",
}

export const tasksApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("x-apikey", import.meta.env.VITE_API_KEY);
    },
  }),
  reducerPath: "tasksApi",
  tagTypes: [TasksTagTypes.TASKS],
  endpoints: (build) => ({
    getAllTasks: build.query<ITaskProps[], unknown>({
      query: () => ({
        method: "GET",
        url: "/rest/tasks",
      }),
      providesTags: [TasksTagTypes.TASKS],
    }),
    addTask: build.query<ITaskProps[], unknown>({
      query: ({ content }) => ({
        method: "POST",
        url: `rest/tasks`,
        body: content,
      }),
      providesTags: [TasksTagTypes.TASKS],
    }),
  }),
});

export const { useGetAllTasksQuery, useAddTaskQuery } = tasksApi;

export const tasksApiReducer = {
  [tasksApi.reducerPath]: tasksApi.reducer,
};
