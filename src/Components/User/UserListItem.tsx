import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { userListPropsItemType } from "./types";

const UserListItem = (props: userListPropsItemType) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const showTasks = () => {
    props.navigation.navigate("Tasks", {
      id: props.item.id,
      userName: props.item.name,
    });
  };
  return (
    <View style={styles.userBox}>
      <View style={styles.user}>
        <View>
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg",
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.mainBox}>
          <View style={styles.nameBlock}>
            <Text>{props.item.name}</Text>
            <Text>@{props.item.username}</Text>
          </View>
          <Text>{props.item.company.name}</Text>
          <Text>{props.item.company.bs}</Text>
          <View style={styles.btnInfoBox}>
            <Pressable
              style={styles.btnDetails}
              onPress={() => {
                setIsShowMore(!isShowMore);
              }}
            >
              <Text style={styles.detailText}>
                {!isShowMore ? "Show more" : "Hide info"}
              </Text>
            </Pressable>
            <Pressable style={styles.btnDetails} onPress={showTasks}>
              <Text style={styles.detailText}>{"Show tasks"}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {isShowMore && (
        <View>
          <Text>tel: {props.item.phone}</Text>
          <Text>email: {props.item.email}</Text>
          <Text>
            address: {props.item.address.street}, {props.item.address.suite}
          </Text>
        </View>
      )}
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  userBox: {
    paddingVertical: 20,
    borderColor: "grey",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  user: {
    flexDirection: "row",
  },
  img: {
    width: 100,
    height: 110,
    marginRight: 20,
  },
  mainBox: { width: "60%" },
  nameBlock: {
    paddingBottom: 10,
  },
  btnInfoBox: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnDetails: {
    backgroundColor: "grey",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  detailText: {
    color: "#fff",
  },
});
