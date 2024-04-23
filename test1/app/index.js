import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useFonts, Marcellus_400Regular } from "@expo-google-fonts/marcellus";



const BottomSheetBackground = ({ style, snapIndex }) => (
  <View
    style={[
      style,
      {
        backgroundColor: snapIndex === 0 ? "#071330" : "#071330",
        borderTopLeftRadius: "35%",
        borderTopRightRadius: "35%",
      },
    ]}
  />
);
const CustomHandle = () => (
  <View style={{ alignItems: "center", paddingTop: 20 }}>
    <View
      style={{
        width: 40,
        height: 5,
        backgroundColor: "white",
        borderRadius: 5,
      }}
    />
  </View>
);

export default function HomePage({ navigation }) {
  const bottomSheetRef = useRef(null);
  const [snapIndex, setSnapIndex] = useState(0);

  let [fontsLoaded] = useFonts({
    Marcellus_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }



  return (
    <ImageBackground
      source={require("../assets/hector-j-rivas-AZGxJ1Uyg2w-unsplash.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>BOOKIFY</Text>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={["8%", "30%", "50%"]}
        onChange={setSnapIndex}
        backgroundComponent={({ style }) => (
          <BottomSheetBackground style={style} snapIndex={snapIndex} />
        )}
        handleComponent={CustomHandle}
      >
        <BottomSheetView
          style={{
            backgroundColor: "transparent",
            height: "100",
            marginTop: -20,
          }}
        >
          {snapIndex !== 0 && (
            <>
              <TouchableOpacity
                style={styles.close}
                onPress={() => bottomSheetRef.current.collapse()}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <View style={styles.content}>
                <Text style={styles.contentTitle}>BOOKIFY</Text>
                <View>
                  <Text style={styles.descript}>
                    Crafted for book enthusiasts, that app offers a perfect
                    blend of classic charm and modern functionality.
                  </Text>
                  <Text style={styles.descripttwo}>
                    Explore a vast library with intuitive personalized features,
                    seamlessly switch between reading and listening, and enjoy
                    an elegant interface designed for immersive literary
                    experiences.
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.Startbutton}
                  onPress={() => navigation.navigate("signinPage")}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </BottomSheetView>
      </BottomSheet>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
    tintColor: "blue",
    transform: [{ scale: 1.0 }],
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: -100,
    color: "white",
    fontFamily: "Marcellus_400Regular",
  },
  button: {
    backgroundColor: "white",
    padding: "2%",
    width: "30%",
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  close: {
    alignSelf: "center",
    padding: 20,
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
    width: "90%",
    height: "80%",
    padding: 30,
    backgroundColor: "#071330",
    borderRadius: 20,
  },
  contentTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#D76B48",
    fontFamily: "Marcellus_400Regular",
  },
  descript: {
    paddingTop: 20,
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontFamily: "Marcellus_400Regular",
  },
  descripttwo: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontFamily: "Marcellus_400Regular",
  },
  Startbutton: {
    alignSelf: "center",
    width: "40%",
    marginTop: 20,
    backgroundColor: "#D76B48",
    borderRadius: 8,
    padding: 10,
  },
});
