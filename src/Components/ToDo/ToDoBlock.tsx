import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View, ActivityIndicator } from "react-native";
import { getData } from "../../api/getData";
import Filter from "./FIlter/Filter";
import AddToDo from "./Input/ToDa";
import ToDoList from "./List/ToDoList";
import { ToDoIdType, ToDoTitleType, ToDoType } from "./ToDo";

const ToDoBlock = () => {
  const [toDoArr, setToDoArr] = useState<ToDoType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isInProces, setIsInProcess] = useState<boolean>(true);

  const getToDoList = () => {
    getData()
      .then((res) => {
        setToDoArr(
          res.data.filter((data: any) => data.completed !== isInProces)
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
    getToDoList();
  }, [isInProces]);

  const addToDo = (title: ToDoTitleType): void => {
    const newData: ToDoType = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    setToDoArr([...toDoArr, newData]);
  };

  const removeToDo = (id: ToDoIdType) => {
    setToDoArr((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <AddToDo onSubmit={addToDo} />
      <Filter
        isInProces={isInProces}
        setIsInProcess={setIsInProcess}
        setIsLoading={setIsLoading}
        setToDoArr={setToDoArr}
      />
      {isLoading ? (
        <View style={styles.lodaingContainer}>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <ToDoList
          dataArr={toDoArr}
          onRemove={removeToDo}
          setToDoArr={setToDoArr}
          isLoading={isLoading}
          getToDoList={getToDoList}
        />
      )}
    </View>
  );
};

export default ToDoBlock;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  lodaingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
  },
});
