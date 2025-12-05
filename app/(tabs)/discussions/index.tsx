import { Stack } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <>
      <Stack.Screen
        options={{
          //title: "WhatsApp",
          headerTitle: "Whatsapp",
        }}
      />
      <View>
        <Text>Discussions page</Text>
      </View>
    </>
  );
};

export default Index;
