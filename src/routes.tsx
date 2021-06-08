import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./pages/Home";
import Mylinks from "./pages/MyLinks";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "#2ccbb9",
        activeTintColor: "#fff",
        //@ts-ignore
        marginTop: 16,
        labelStyle: {
          fontSize: 19,
        },
      }}
    >
      <Drawer.Screen
        name={"Home"}
        options={{
          title: "Encurtar links",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        component={Home}
      />
      <Drawer.Screen
        name={"MyLinks"}
        options={{
          title: "Meus links",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        component={Mylinks}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
