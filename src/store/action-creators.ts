import * as TAsksActionCreators from "./Tasks/action";
import * as UserActionCreators from "./User/action";

export default {
  ...TAsksActionCreators,
  ...UserActionCreators,
};
