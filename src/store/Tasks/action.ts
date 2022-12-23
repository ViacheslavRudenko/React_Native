import { Dispatch } from "redux";
import { getData, addTask, deleteTask, editTask } from "../../api/Tasks";
import { ToDoIdType, ToDoType } from "../../Screens/Tasks/types";
import { userIdType } from "../../Screens/User/types";
import { TasksActionTypes, TasksAction } from "./types";

export const axiosData = (userId: userIdType, filter: string) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    dispatch({ type: TasksActionTypes.FETCH_TASKS });
    await getData(userId, filter)
      .then((resp) =>
        dispatch({
          type: TasksActionTypes.FETCH_TASKS_SUCCESS,
          payload: resp.data,
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

export const deleteOneTask = (userId: userIdType, taskId: ToDoIdType) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    await deleteTask(userId, taskId)
      .then((resp) =>
        dispatch({
          type: TasksActionTypes.REMOVE_TASK,
          payload: taskId,
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
export const addNewTask = (userId: userIdType, task: ToDoType) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    await addTask(userId, task)
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

export const editTaskData = (
  userId: userIdType,
  taskId: ToDoIdType,
  task: ToDoType
) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    await editTask(userId, taskId, task)
      .then((resp) =>
        dispatch({
          type: TasksActionTypes.EDIT_TASK,
          payload: { task: task, taskId: taskId },
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
