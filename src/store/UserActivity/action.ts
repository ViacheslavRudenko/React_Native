import { Job } from "../Tasks/types";
import { UserActivityActionTypes } from "./types";

export const addJobsToWishList = (jobsArr: string[]) => {
  return { type: UserActivityActionTypes.ADD_WISH_LIST, payload: jobsArr };
};

export const removeJobFromWishList = (id: string) => {
  actionWithLS(id, "remove");
  return { type: UserActivityActionTypes.REMOVE_FROM_WISH_LIST, payload: id };
};

export const addNewJobToWihList = (id: string) => {
  actionWithLS(id);
  return { type: UserActivityActionTypes.ADD_NEW_TO_WISH_LIST, payload: id };
};

const actionWithLS = (id: string, type?: string): void => {
  const dataFromLS = localStorage.getItem("wishList");

  const dataArr = dataFromLS ? JSON.parse(dataFromLS) : [];
  localStorage.setItem(
    "wishList",
    JSON.stringify(
      type === "remove"
        ? dataArr.filter((data: string) => data !== id)
        : [...dataArr, id]
    )
  );
};
