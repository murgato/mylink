import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

function StatusBarPage(props: any): any {
  const isFocused = useIsFocused();
  return isFocused && <StatusBar {...props} />;
}
export default StatusBarPage;
