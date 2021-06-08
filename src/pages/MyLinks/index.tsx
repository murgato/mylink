import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import StatusBarPage from "../../components/StatusBarPage";

export default function MyLinks(): JSX.Element {
  return (
    <View>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />

      <Text>Pagina Links</Text>
    </View>
  );
}
