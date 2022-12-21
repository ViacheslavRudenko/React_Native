import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import LoadingPage from "../../Components/Loading/Loading";
import Filter from "../../Components/ToDo/FIlter/Filter";
import AddToDo from "../../Components/ToDo/Input/ToDo";
import ToDoList from "../../Components/ToDo/List/ToDoList";
import { useActions } from "../../hooks/useActions";
import { RootState } from "../../store/root-reducer";
import { tasksPropsType, ToDoIdType, ToDoTitleType, ToDoType } from "./types";

const Tasks = (props: tasksPropsType) => {
  const [isInProces, setIsInProcess] = useState<any>(true);
  const { axiosData, AddNewTask, RemoveTask } = useActions();
  const { loading, err } = useSelector((state: RootState) => state.TasksData);

  useEffect(() => {
    axiosData(isInProces, props.route.params.id);
    err && Alert.alert("Error", err);

    props.navigation.setOptions({
      title: props.route.params.userName
        ? `${props.route.params.userName} tasks`
        : `All tasks`,
    });
  }, [isInProces, props.route.params.userName]);

  const addToDo = (title: ToDoTitleType): void => {
    const newData: ToDoType = {
      id: Date.now().toString(),
      title,
      completed: false,
      userId: props.route.params.id,
    };

    AddNewTask(newData);
  };

  return (
    <View style={styles.container}>
      {props.route.params.id && <AddToDo onSubmit={addToDo} />}
      <Filter isInProces={isInProces} setIsInProcess={setIsInProcess} />
      {loading ? (
        <LoadingPage />
      ) : (
        <ToDoList
          userId={props.route.params.id}
          navigation={props.navigation}
        />
      )}
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
