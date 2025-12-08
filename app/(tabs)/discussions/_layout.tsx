import { Stack } from "expo-router";

const DiscussionsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Discussions",
        }}
      />
    </Stack>
  );
};

export default DiscussionsLayout;
