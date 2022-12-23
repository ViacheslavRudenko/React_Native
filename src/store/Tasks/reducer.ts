import { TasksState, TasksAction, TasksActionTypes } from "./types";

export const initialState: TasksState = {
  loading: false,
  err: "",
  data: [],
};

const reducerJobs = (state = initialState, action: TasksAction): TasksState => {
  switch (action.type) {
    case TasksActionTypes.FETCH_TASKS: {
      return { loading: true, err: "", data: [] };
    }
    case TasksActionTypes.FETCH_TASKS_SUCCESS: {
      return {
        loading: false,
        err: "",
        data: action.payload,
      };
    }
    case TasksActionTypes.FETCH_TASKS_ERROR: {
      return { loading: false, err: action.payload, data: [] };
    }
    case TasksActionTypes.REMOVE_TASK: {
      return {
        loading: false,
        err: "",
        data: state.data.filter((item) => item.id !== action.payload),
      };
    }
    case TasksActionTypes.ADD_TASK: {
      return {
        loading: false,
        err: "",
        data: [action.payload, ...state.data],
      };
    }

    case TasksActionTypes.EDIT_TASK: {
      return {
        loading: false,
        err: "",
        data: state.data.filter(
          (item) => item.id !== action.payload.taskId && action.payload.task
        ),
      };
    }

    default:
      return state;
  }
};
export default reducerJobs;
