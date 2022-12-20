import { Job } from "../Tasks/types";
import {
  UserActivityState,
  UserActivityAction,
  UserActivityActionTypes,
} from "./types";

export const initialState: UserActivityState = {
  wishList: [],
};

const reducerUserActivity = (
  state = initialState,
  action: UserActivityAction
): UserActivityState => {
  switch (action.type) {
    case UserActivityActionTypes.ADD_WISH_LIST: {
      return { ...state, wishList: action.payload };
    }
    case UserActivityActionTypes.REMOVE_FROM_WISH_LIST: {
      return {
        ...state,
        wishList: state.wishList.filter((id: string) => id !== action.payload),
      };
    }
    case UserActivityActionTypes.ADD_NEW_TO_WISH_LIST: {
      return { ...state, wishList: [...state.wishList, action.payload] };
    }

    default:
      return state;
  }
};
export default reducerUserActivity;
