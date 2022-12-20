import { combineReducers } from "redux";
import reducerTasks from "./Tasks/reducer";
import reducerUserActivity from "./UserActivity/reducer";

export const rootReducer = combineReducers({
  TasksData: reducerTasks,
  UserActivity: reducerUserActivity,
});
export type RootState = ReturnType<typeof rootReducer>;
