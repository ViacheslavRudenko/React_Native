import { Dispatch } from "redux";
import { getData, addTask, deleteTask } from "../../api/getData";
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

export const deleteOneTask = (id: ToDoIdType) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    await deleteTask(id)
      .then((resp) =>
        dispatch({
          type: TasksActionTypes.REMOVE_TASK,
          payload: id,
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
export const addNewTask = (task: ToDoType) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    await addTask(task)
      .then((resp) =>
        dispatch({
          type: TasksActionTypes.ADD_TASK,
          payload: task,
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
