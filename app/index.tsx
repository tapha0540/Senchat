import images from "@/constants/images";
import { userContext } from "@/hooks/user-context";
import { Redirect, router } from "expo-router";
import { useContext } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const user = useContext(userContext);
  if (user) {
    console.log(user?.$id);
    return <Redirect href="/discussions" />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={images.splashIcon} style={styles.backgroundImg} />
        <Text style={styles.heading}>Bienvenue sur WakhTane !</Text>
        <Text style={styles.slogan}>
          Partagez et rester connectés avec vos amis.
        </Text>
        <View style={styles.middle}>
          <TouchableOpacity
            style={styles.logInBtn}
            activeOpacity={0.5}
            onPress={() => router.push("/login")}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Se connecter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={{ color: "#0099ff", textDecorationLine: "underline" }}>
              Si tu n{"'"}as pas de compte inscrit toi !
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};
/**
 *  #007fff
 *  #1e90ff
 *  #0099ff
 */
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f3f3cc",
  },
  backgroundImg: {
    width: width,
    height: width,
    borderRadius: 15,
  },
  heading: {
    color: "white",
    alignSelf: "center",
    fontSize: 18,
    position: "relative",
    top: "-18%",
    marginHorizontal: 5,
  },
  slogan: {
    color: "white",
    alignSelf: "center",
    fontSize: 14,
    position: "relative",
    top: "-15%",
    marginHorizontal: 5,
  },
  logInBtn: {
    width: 250,
    padding: 10,
    backgroundColor: "#0099ff",
    opacity: 0.975,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Home;
