import { Redirect } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const accounts = [
  {
    first_name: "Moustapha",
    last_name: "Fall",
    tel: "0540", //"+221763190540",
  },
];

const SignUpHome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tel, setTel] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (accounts.some((account) => account.tel === tel.replaceAll(" ", ""))) {
      setIsLoggedIn(true);
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
          value={tel}
          keyboardType="phone-pad"
          onChangeText={setTel}
          label="Numéro de téléphone"
          mode="outlined"
          activeOutlineColor="#0099ff"
          placeholder="Ex: +221 76 319 05 40"
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
    // backgroundColor: "white",
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
