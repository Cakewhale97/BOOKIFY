import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import Home from "./app/index";
import signinPage from "./app/signinPage.js";
import ContentPage from "./app/ContentPage.jsx";
import Reading from "./app/pages/CurrentlyReading.jsx";
import WantToRead from "./app/pages/WantToRead.jsx";
import BookDetailsPage from "./app/pages/BookDetailsPage.jsx";
import SignUpPage from "./app/pages/SignUpPage.jsx";
import HomePage from "./app/HomePage.jsx";
import EditProfile from "./app/pages/EditProfile.jsx";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, Marcellus_400Regular } from "@expo-google-fonts/marcellus";
import { ActivityIndicator } from "react-native";


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Marcellus_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <GluestackUIProvider config={config}>
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // hide the header
        />
        <Stack.Screen
          name="signinPage"
          component={signinPage}
          options={{ headerShown: false }} // hide the header
        />
        <Stack.Screen
          name="ContentPage"
          component={ContentPage}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Reading"
          component={Reading}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WantToRead"
          component={WantToRead}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookDetailsPage"
          component={BookDetailsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
