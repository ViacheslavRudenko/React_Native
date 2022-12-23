import { Dispatch } from "redux";
import { getUsers } from "../../api/Users";
import { UsersActionTypes, UsersAction } from "./types";

export const axiosUsersData = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: UsersActionTypes.FETCH_USERS });
    await getUsers()
      .then((resp) =>
        dispatch({
          type: UsersActionTypes.FETCH_USERS_SUCCESS,
          payload: resp.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: UsersActionTypes.FETCH_USERS_ERROR,
          payload: err.message,
        })
      );
  };
};
