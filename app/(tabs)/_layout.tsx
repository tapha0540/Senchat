import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="discussions/index"
        options={{
          title: "discussions",
        }}
      />
      <Tabs.Screen
        name="news/index"
        options={{
          title: "actus",
        }}
      />
      <Tabs.Screen
        name="community/index"
        options={{
          title: "Communautés",
        }}
      />
      <Tabs.Screen
        name="calls/index"
        options={{
          title: "Appels",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
