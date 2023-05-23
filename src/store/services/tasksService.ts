import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITaskProps, IModalAddTaksProps, IModalDeleteProps } from "task-types";

enum TasksTagTypes {
  TASKS = "TASKS",
}

export const tasksApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("x-apikey", import.meta.env.VITE_API_KEY);
      headers.set("Content-Type", "application/json");
      
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
    addTask: build.mutation<unknown, IModalAddTaksProps>({
      query: (data) => ({
        method: "POST",
        url: `rest/tasks`,
        body: data
      }),
      invalidatesTags: [TasksTagTypes.TASKS],
    }),
    deleteTask: build.mutation<unknown, IModalDeleteProps>({
      query: (id) => ({
        method: "DELETE",
        url: `rest/tasks/${id}`,
      }),
      invalidatesTags: [TasksTagTypes.TASKS],
    }),
  }),
});

export const { useGetAllTasksQuery, useAddTaskMutation, useDeleteTaskMutation } = tasksApi;

export const tasksApiReducer = {
  [tasksApi.reducerPath]: tasksApi.reducer,
};
