import { Stack } from "expo-router";

const CommunityLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Communautés" }} />
    </Stack>
  );
};

export default CommunityLayout;
