import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../Styles/globalStyles";

export default function BookList({ books }) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={books}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("BookDetailsPage", { book: item })}
        >
          <View style={styles.bookContainer}>
            <View style={styles.bookCover}>
            <Image style={styles.image} source={{ uri: item.book_image }} />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.titlee}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.primary_isbn13}
    />
  );
}

const styles = StyleSheet.create({
  bookContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      height: 200,
  },
  textBox: {
    width: "65%",
    marginLeft: 30,
    padding: 10,
   
  },
  bookCover: {
    width: "20%",
    marginLeft: 10,
    
  },
  titlee: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
    ...globalStyles.globalFont,
  },
  author: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
    ...globalStyles.globalFont,
  },
  desc: {
    fontSize: 12,
    marginBottom: 10,
    ...globalStyles.globalFont,
  },
  image: {
    width: 120,
    height: 200,
    objectFit: "contain",
    borderRadius: 10,
  },
});
