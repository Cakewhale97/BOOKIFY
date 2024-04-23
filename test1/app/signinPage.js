import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { IconButton } from "react-native-paper"; // Import IconButton
import { useFonts, Marcellus_400Regular } from "@expo-google-fonts/marcellus";

export default function SignUpPage({}) {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("ContentPage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Sign In Failed", errorMessage);
      });
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    navigation.navigate("SignUpPage");
  };

  let [fontsLoaded] = useFonts({
    Marcellus_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      source={require("../assets/hamza-nouasria-KXrvPthkmYQ-unsplash.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <IconButton
          icon="arrow-left" // Use "arrow-left" icon
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 50,
            left: -2,

            backgroundColor: "white",
          }}
        />
        <Text style={styles.title}>BOOKIFY</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        <View></View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

SignUpPage.navigationOptions = ({ navigation }) => ({
  headerLeft: () => <HeaderBackButton onPress={() => navigation.goBack()} />,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginTop: 250,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Marcellus_400Regular",
  },
  inputContainer: {
    justifyContent: "flex-end",
    flex: 0.8,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 0,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "white",
    padding: "2%",
    width: "40%",
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    padding: 10,
    backgroundColor: "white",
  },
  backButtonText: {
    color: "black",
    fontSize: 16,
  },
  signupText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
