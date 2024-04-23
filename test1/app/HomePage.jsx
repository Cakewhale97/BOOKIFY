// HomePage.jsx
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import useBooks from "../api/useBooks";
import BookList from "./BookList";
import Avatar from "../components/Avatar";
import FetchProfilePic from "../components/FetchProfilePic";
import useUserData from "./firebase/useUserData";
import { auth } from "./firebase/firebaseConfig";
import { globalStyles } from "../Styles/globalStyles";;

export default function HomePage() {
  const { books, loading } = useBooks();
  const navigation = useNavigation();

  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser); // Update the user when the authentication state changes
    return unsubscribe;
  }, []);

  const { userData } = useUserData(auth.currentUser?.uid);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.headerContent}>
          <View style={{ width: 85, height: 100, marginLeft: 20, justifyContent: "center" }}>
            <FetchProfilePic size={80} />
          </View>
          <Text style={styles.text}>
            Hi, {userData ? userData.firstName : "Guest"}!
          </Text>
        </View>
      </View>
      <Text style={styles.titleDiscover}>Discover</Text>
      <Text style={styles.title}>New York Times Best Seller!!</Text>
      <View style={styles.content}>
        {loading ? (
          <Text>Loading...</Text>
        ) : books.length > 0 ? (
          <BookList books={books} />
        ) : (
          <Text>No books found</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  appbar: {
    padding: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  headerContent: {
    flexDirection: "row", // Ensure this is row to align Avatar and Text horizontally
    alignItems: "center", // Center items vertically within the headerContent
    width: "100%",
    ...globalStyles.globalFont

  },
  text: {
    color: "black",
    fontSize: 25,
    marginLeft: 10, 
    ...globalStyles.globalFont
  },
  titleDiscover: {
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 40,
    marginLeft: 20,
    ...globalStyles.globalFont
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 0,
    ...globalStyles.globalFont,
    marginLeft: 20,

  },
  content: {
    paddingTop: 20,

    ...globalStyles.globalFont

  },
});
