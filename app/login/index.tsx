import { logIn } from "@/lib/appwrite";
import { Redirect } from "expo-router";
import { useState } from "react";
import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

// const accounts = [
//   {
//     first_name: "Moustapha",
//     last_name: "Fall",
//     tel: "0540", //"+221763190540",
//   },
// ];

const SignUpHome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: GestureResponderEvent) => {
    e.preventDefault();
    if (password.length >= 8) {
      logIn(phoneNumber.trim(), password.trim())
        .then((user) => {
          setIsLoggedIn(true);
          console.table(user);
        })
        .catch((err) => {
          console.error("error while login ", err);
        });
    } else {
      console.error(" password must be between 8 and 265");
    }
  };
  if (isLoggedIn) {
    return <Redirect href="/(tabs)/discussions" />;
  } else {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={{ alignSelf: "center", textAlign: "center" }}>
          Bienvenue sur la page de connexion.
        </Text>
        <TextInput
          value={phoneNumber}
          keyboardType="phone-pad"
          onChangeText={setPhoneNumber}
          label="Numéro de téléphone"
          mode="outlined"
          activeOutlineColor="#0099ff"
          placeholder="Ex: +221 76 319 05 40"
        />
        <TextInput
          value={password}
          keyboardType="phone-pad"
          onChangeText={setPassword}
          label="Mot de passe"
          mode="outlined"
          activeOutlineColor="#0099ff"
          placeholder="Ex: XXXX"
          maxLength={265}
        />
        <Button style={styles.logInBtn} onPress={handleSubmit}>
          <Text style={{ color: "white" }}>Se connecter</Text>
        </Button>
      </KeyboardAvoidingView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    rowGap: 40,
  },
  logInBtn: {
    paddingHorizontal: 2,
    backgroundColor: "#0099ff",
    borderRadius: 15,
  },
});
export default SignUpHome;
