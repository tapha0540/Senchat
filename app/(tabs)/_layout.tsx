import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="discussions"
        options={{
          title: "discussions",
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "actus",
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Communautés",
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: "Appels",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
