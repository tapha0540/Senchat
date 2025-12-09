import { userContext } from "@/hooks/user-context";
import { useContext } from "react";
import { Text, View } from "react-native";

const Discussions = () => {
  const user = useContext(userContext);
  return (
    <View>
      <Text>Discussions page</Text>
      <Text>Bonjour utlisateur avec le numéro {user?.$id}</Text>
    </View>
  );
};

export default Discussions;
