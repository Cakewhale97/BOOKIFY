import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import GoogleApi from "../api/GoogleApi";

const BookDrawer = ({ genre }) => {
  const books = GoogleApi(genre);

  return (
    <FlatList
      horizontal
      data={books}
      renderItem={({ item }) => (
        <View style={styles.book}>
          <Image
            style={styles.bookCover}
            source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
            resizeMode="contain"
          />
          <Text style={styles.bookTitle} numberOfLines={1} ellipsizeMode="tail">
            {item.volumeInfo.title}
          </Text>
          <Text
            style={styles.bookAuthor}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.volumeInfo.authors && item.volumeInfo.authors.join(", ")}
          </Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  book: {
    padding: 10,
    marginTop: 10,
    width: 150,
  },
  bookCover: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  bookTitle: {
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
    // Add more styles as needed
  },
  bookAuthor: {
    padding: 5,
    paddingTop: 0,
    width: 170,
    fontSize: 12,
  },
});

export default BookDrawer;
