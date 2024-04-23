import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../firebase/firebaseConfig";

import { firestore } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from "../../Styles/globalStyles";
import { KeyboardAvoidingView, Platform } from "react-native";

const image = require("../../assets/cole-keister-doVrqo9tD3s-unsplash.jpg");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },
  background: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%", // Set the height to 75% of the screen height
    borderTopLeftRadius: 40, // Set the top left border radius
    borderTopRightRadius: 40, // Set the top right border radius
    backgroundColor: "white", // Set the background color
    alignItems: "center", // Center the content
    padding: 10, // Add some padding
    justifyContent: "center",
    backgroundColor: "#D76B48",
  },

  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
  },
  input: {
    height: 50,
    margin: 10,
    color: "white",
    backgroundColor: "#fff",
    width: "80%",
  },
  signUpButton: {
    backgroundColor: "#071330",
    padding: 15,
    width: "40%",
    borderRadius: 10,
    marginTop: 20,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    ...globalStyles.globalFont,
  },
});

export default function SignUpPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignUp = () => {
    // Basic validation
    if (email === "" || password === "") {
      Alert.alert("Error", "Please enter email and password.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // The sign-up was successful. userCredential.user will contain user information
        const user = userCredential.user;
        // Using setDoc to set the user data in Firestore
        return setDoc(doc(firestore, "users", user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          // ... any other fields you want to save
        });
      })
      .then(() => {
        Alert.alert("Success", "You have signed up successfully!", [
          { text: "OK", onPress: () => navigation.navigate("ContentPage") },
        ]);
      })
      .catch((error) => {
        // Handle errors here
        // Display an alert or update UI to show error message
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
      });
  };

  return (
    <ImageBackground source={image} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={32} color="white" />

          <Text style={styles.backButtonText}></Text>
        </TouchableOpacity>

        <View style={styles.background}>
          <Text
            style={{
              fontSize: 24,
              marginBottom: 20,
              fontWeight: "bold",
              ...globalStyles.globalFont,
              color: "white",
            }}
          >
            Register Now
          </Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            mode="outlined"
            padding="10"
            theme={{ roundness: 20 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            mode="outlined"
            padding="10"
            theme={{ roundness: 20 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail} // Update the email state with the input
            mode="outlined"
            padding="10"
            theme={{ roundness: 20 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword} // Update the password state with the input
            secureTextEntry // Hide password input
            mode="outlined"
            padding="10"
            theme={{ roundness: 20 }}
          />
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
