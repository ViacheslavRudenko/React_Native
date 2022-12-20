import { combineReducers } from "redux";
import reducerTasks from "./Tasks/reducer";
import reducerUserActivity from "./User/reducer";

export const rootReducer = combineReducers({
  TasksData: reducerTasks,
  Users: reducerUserActivity,
});
export type RootState = ReturnType<typeof rootReducer>;
