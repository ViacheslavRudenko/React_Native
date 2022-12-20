import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { getData } from "../../api/getData";
import LoadingPage from "../../Components/Loading/Loading";
import Filter from "../../Components/ToDo/FIlter/Filter";
import AddToDo from "../../Components/ToDo/Input/ToDa";
import ToDoList from "../../Components/ToDo/List/ToDoList";
import { tasksPropsType, ToDoIdType, ToDoTitleType, ToDoType } from "./types";

const Tasks = (props: tasksPropsType) => {
  const [toDoArr, setToDoArr] = useState<ToDoType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isInProces, setIsInProcess] = useState<boolean>(true);

  const getToDoList = () => {
    getData()
      .then((res) => {
        setToDoArr(
          res.data.filter((data: any) =>
            !props.route.params.id
              ? data.completed !== isInProces
              : data.completed !== isInProces &&
                data.userId === props.route.params.id
          )
        );
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    console.log(props.route.params);

    props.navigation.setOptions({
      title: props.route.params.userName
        ? `${props.route.params.userName} tasks`
        : `All tasks`,
    });
    getToDoList();
  }, [isInProces]);

  const addToDo = (title: ToDoTitleType): void => {
    const newData: ToDoType = {
      id: Date.now().toString(),
      title,
      completed: false,
      userId: props.route.params.id,
    };

    setToDoArr([newData, ...toDoArr]);
  };

  const removeToDo = (id: ToDoIdType) => {
    setToDoArr((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      {props.route.params.id && <AddToDo onSubmit={addToDo} />}
      <Filter
        isInProces={isInProces}
        setIsInProcess={setIsInProcess}
        setIsLoading={setIsLoading}
        setToDoArr={setToDoArr}
      />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <ToDoList
          dataArr={toDoArr}
          onRemove={removeToDo}
          setToDoArr={setToDoArr}
          isLoading={isLoading}
          getToDoList={getToDoList}
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
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
