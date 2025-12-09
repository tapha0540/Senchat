import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: "white",
        // tabBarActiveBackgroundColor: "#0099ff",
        tabBarIconStyle: {
          backgroundColor: "#0099ff",
          width: "100%",
          borderRadius: 25,
        },
        tabBarInactiveTintColor: "#000ff",
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="discussions"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons name="message" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons name="groups" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons name="wifi-calling-3" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBarIconContainer: {},
});

export default TabsLayout;
