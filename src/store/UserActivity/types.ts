export interface UserActivityState {
  wishList: string[] | [];
}

export enum UserActivityActionTypes {
  ADD_WISH_LIST = "ADD_WISH_LIST",
  REMOVE_FROM_WISH_LIST = "REMOVE_FROM_WISH_LIST",
  ADD_NEW_TO_WISH_LIST = "ADD_NEW_TO_WISH_LIST",
}

interface addDataToWishList {
  type: UserActivityActionTypes.ADD_WISH_LIST;
  payload: string[];
}
interface removeFromWithList {
  type: UserActivityActionTypes.REMOVE_FROM_WISH_LIST;
  payload: string;
}
interface addNewDataToWhisList {
  type: UserActivityActionTypes.ADD_NEW_TO_WISH_LIST;
  payload: string;
}
export type UserActivityAction =
  | addDataToWishList
  | removeFromWithList
  | addNewDataToWhisList;
