import React from "react";
import { Text, View } from "react-native";
import { ButtonMenu } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Menu(): JSX.Element {
  const navigation = useNavigation();
  return (
      <ButtonMenu
        //@ts-ignore
        onPress={() => navigation.openDrawer()}
      >
        <Feather name={"menu"} size={40} color={"#fff"} />
      </ButtonMenu>
  );
}
