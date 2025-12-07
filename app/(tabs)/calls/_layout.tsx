import { Stack } from "expo-router";

const CallsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Appels" }} />
    </Stack>
  );
};

export default CallsLayout;
