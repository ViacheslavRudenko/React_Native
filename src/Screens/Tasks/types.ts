export type ToDoType = {
  id: string | number;
  title: string;
  completed: boolean;
  userId: string | number;
};

export type ToDoTitleType = string;
export type ToDoIdType = string;

export type tasksPropsType = {
  route:
    | {
        params: {
          id: string | number;
          userName: string;
        };
      }
    | any;
  navigation: any;
};
