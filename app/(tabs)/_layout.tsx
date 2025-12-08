import { Tabs } from "expo-router";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const TabBarIcon = ({
  icon,
  focused,
  title,
  size,
  color,
}: {
  icon: ReactNode;
  focused: boolean;
  title: string;
  size: number;
  color: string;
}) => <View style={styles.tabBarIconContainer}></View>;

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0099ff",
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="discussions"
        options={{
          tabBarIcon: (params) => (
            <TabBarIcon title="Discussions" icon={<></>} {...params} />
          ),
        }}
      />
      <Tabs.Screen name="news" />
      <Tabs.Screen name="community" />
      <Tabs.Screen name="calls" />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBarIconContainer: {},
});

export default TabsLayout;
