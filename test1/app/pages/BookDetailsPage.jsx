import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Chip } from "react-native-paper";

export default function BooksDetailsPage({ route, navigation }) {
  const { book } = route.params;

  const handlePressAmazon = () => {
    Linking.openURL(book.amazon_product_url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              /* Add your share functionality here */
            }}
          >
            <Ionicons name="share-social" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /* Add your favorite functionality here */
            }}
          >
            <Ionicons name="heart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <Image style={styles.image} source={{ uri: book.book_image }} />
        <TouchableOpacity onPress={handlePressAmazon} style={styles.links}>
          <Ionicons name="logo-amazon" size={24} color="black" />
          <Text>Amazon</Text>
        </TouchableOpacity>
        <Text style={styles.description}>{book.description}</Text>
     <View style={styles.categories}>
  {['Fiction', 'Mystery', 'Thriller'].map((category, index) => (
    <Chip key={index} style={styles.category}>
      {category}
    </Chip>
  ))}
</View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* Add your functionality here */
          }}
        >
          <Text style={styles.buttonText}>Add Book</Text>
        </TouchableOpacity>
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
    width: "100%",
    padding: 20,
  },
  icons: {
    flexDirection: "row",
  },
  card: {
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    letterSpacing: 4,
    fontWeight: "bold",
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 210,

    height: 310,
    marginBottom: 20,
  },
  links: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: 110,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#071330",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    lineHeight: 50,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    marginTop: 10,
  },
  category: {
    marginRight: 5,
    marginBottom: 5,
  },
});
