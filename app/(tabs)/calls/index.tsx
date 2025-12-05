import { Stack } from "expo-router";
import { ScrollView, Text } from "react-native";

const Index = () => {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Appels" }} />
      <ScrollView>
        <Text>Appels</Text>
      </ScrollView>
    </>
  );
};

export default Index;
