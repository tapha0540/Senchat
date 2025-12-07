import { Stack } from "expo-router";

const DiscussionsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Whatsapp",
        }}
      />
    </Stack>
  );
};

export default DiscussionsLayout;
