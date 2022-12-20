import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { userListPropsItemType } from "./types";

const UserListItem = (props: userListPropsItemType) => {
  const [isShowMore, setIsShowMore] = useState(false);
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
        <View>
          <View style={styles.nameBlock}>
            <Text>{props.item.name}</Text>
            <Text>@{props.item.username}</Text>
          </View>
          <Text>{props.item.company.name}</Text>
          <Text>{props.item.company.bs}</Text>
          <View style={styles.btnInfoBox}>
            <Button
              title={!isShowMore ? "Show more" : "Hide info"}
              color="grey"
              onPress={() => {
                setIsShowMore(!isShowMore);
              }}
            />
            <Button
              title="Show tasks"
              color="grey"
              onPress={() => {
                props.navigation.navigate("Tasks", {
                  id: props.item.id,
                  userName: props.item.name,
                });
              }}
            />
          </View>
        </View>
      </View>
      {isShowMore && (
        <View style={styles.info}>
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
  nameBlock: {
    paddingBottom: 10,
  },
  btnInfoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {},
});
