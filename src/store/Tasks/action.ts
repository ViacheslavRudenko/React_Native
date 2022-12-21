import { Dispatch } from "redux";
import { getData } from "../../api/getData";
import { ToDoIdType, ToDoType } from "../../Screens/Tasks/types";
import { TasksActionTypes, TasksAction } from "./types";

export const axiosData = (isCompleted = null, id = null) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    dispatch({ type: TasksActionTypes.FETCH_TASKS });
    await getData()
      .then((resp) =>
        dispatch({
          type: TasksActionTypes.FETCH_TASKS_SUCCESS,
          payload: { data: resp.data, isCompleted: isCompleted, userId: id },
        })
      )
      .catch((err) =>
        dispatch({
          type: TasksActionTypes.FETCH_TASKS_ERROR,
          payload: err.message,
        })
      );
  };
};

export const AddNewTask = (task: ToDoType) => {
  return { type: TasksActionTypes.ADD_NEW_TASK, payload: task };
};

export const RemoveTask = (id: ToDoIdType) => {
  return { type: TasksActionTypes.REMOVE_TASK, payload: id };
};

export const EditTask = (task: ToDoType) => {
  return { type: TasksActionTypes.EDIT_TASK, payload: task };
};
