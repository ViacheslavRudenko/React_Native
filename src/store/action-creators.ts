import * as TAsksActionCreators from "./Tasks/action";
import * as UserActivityActionCreators from "./UserActivity/action";

export default {
  ...TAsksActionCreators,
  ...UserActivityActionCreators,
};
