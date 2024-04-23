import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { IconButton, Avatar } from "react-native-paper";
import Card from "../components/Card";
import { useNavigation } from "@react-navigation/native";
import useGoogleApi from "../api/GoogleApi";
import useUserData from "./firebase/useUserData";
import { auth } from "./firebase/firebaseConfig";
import FetchProfilePic from "../components/FetchProfilePic";

export default function MyBooks() {
  const navigation = useNavigation();
  const books = useGoogleApi("fiction");

  const firstBook = books[5];
  const firstBookCover = firstBook?.volumeInfo.imageLinks?.thumbnail;

  const secondBook = books[6];
  const secondBookCover = secondBook?.volumeInfo.imageLinks?.thumbnail;

  const [user, setUser] = useState(auth.currentUser); // Add a state variable for the user

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser); // Update the user when the authentication state changes
    return unsubscribe;
  }, []);


  const { userData } = useUserData(auth.currentUser?.uid);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userSection}>
          <FetchProfilePic size={40} />
          <Text style={styles.greeting}>
            Hi, {userData ? userData.firstName : "Guest"}!
          </Text>
        </View>
        <IconButton
          icon="bell"
          color="grey"
          size={30}
          onPress={() => console.log("Notification button pressed")}
        />
      </View>
      <View style={styles.card}>
        <Card
          title="Want To Read"
          image={firstBookCover}
          onPress={() => navigation.navigate("WantToRead")}
        />
        <Card
          title="Read"
          image={secondBookCover}
          onPress={() => navigation.navigate("Reading")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 18,
    marginLeft: 10,
  },
  card: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
