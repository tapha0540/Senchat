import { Stack } from "expo-router";
import { ScrollView, Text } from "react-native";

const Index = () => {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Communautés" }} />
      <ScrollView>
        <Text>Communatés</Text>
      </ScrollView>
    </>
  );
};

export default Index;
