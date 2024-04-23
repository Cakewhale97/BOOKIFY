import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Searchbar, IconButton, Chip } from "react-native-paper";
import BookDrawer from "../components/BookDrawer";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <View style={styles.searchSection}>
        <Searchbar placeholder="Book,author,genre" style={styles.searchBar} />
        <IconButton
          icon="tune"
          mode="contained"
          onPress={() => {}}
          style={styles.filterButton}
          size={20}
          theme={{ colors: { primary: "white" } }} // Set the color of the icon
        />
      </View>

      <View style={styles.categories}>
        <Text style={styles.header}>Categories</Text>
        <View style={styles.chipContainer}>
          <Chip style={styles.chip}>Fantasy</Chip>
          <Chip style={styles.chip} icon="book">
            History
          </Chip>
          <Chip style={styles.chip}>
            Non-fiction
          </Chip>
          <Chip style={styles.chip}>
            Science Fiction
          </Chip>
          <Chip style={styles.chip}>
            Novel
          </Chip>
        </View>
      </View>
      <View style={styles.bookList}>
      <Text style={styles.name}>Fantasy</Text>
      <View style={styles.genre}>
        <BookDrawer genre="fantasy" />
      </View>
      <View style={styles.best}>
      <Text style={styles.best}>History</Text>
      <BookDrawer genre="history" />
      </View>
      <View style={styles.best}>
      <Text style={styles.best}>Non-fiction</Text>
      <BookDrawer genre="nonfiction" />
      </View>
        
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 40,
    padding: 10,
    position: "relative",
  },
  searchBar: {
    flex: 1,
    marginRight: 10,
  },
  categories: {
    padding: 20,
    backgroundColor: "lightgrey",
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  chip: {
    margin: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
    bookList: {
        flexDirection: 'column',
       
        
        padding: 20,
       
    },
  name: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  genre: {
    marginBottom: 20,
  },
    best: {
        
        marginLeft: 5,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: "bold",
    },
  filterButton: {
    backgroundColor: "black",

    margin: 0,
    position: "absolute",
    right: 30,
    top: 41,
    transform: [{ translateY: -20 }],
    alignItems: "center",
    justifyContent: "center",
  },
});
