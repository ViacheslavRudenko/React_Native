import { UsersState, UsersAction, UsersActionTypes } from "./types";

export const initialState: UsersState = {
  loading: false,
  err: "",
  data: [],
};

const reducerJobs = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS: {
      return { loading: true, err: "", data: [] };
    }
    case UsersActionTypes.FETCH_USERS_SUCCESS: {
      return { loading: false, err: "", data: action.payload };
    }
    case UsersActionTypes.FETCH_USERS_ERROR: {
      return { loading: false, err: action.payload, data: [] };
    }

    default:
      return state;
  }
};
export default reducerJobs;
