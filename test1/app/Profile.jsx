import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { auth } from "./firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import useUserData from "./firebase/useUserData";

export default function ProfileScreen({ navigation }) {
  const { userData, loading, error } = useUserData(auth.currentUser?.uid);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("signinPage");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  if (loading) {
    return <Text>Loading....</Text>;
  }

  if (error) {
    Alert.alert("Error", error);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>
        Hey {userData ? userData.firstName : "Guest"}!
      </Text>
      <Text style={styles.text}>Edit your profile here</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile')} 
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      {/* Sign-out button */}
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
