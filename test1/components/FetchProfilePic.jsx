import React, { useState, useEffect } from "react";
import { Image, View, ActivityIndicator } from "react-native";
import { Avatar } from "react-native-paper";
import { getDoc, doc } from "firebase/firestore";
import { auth, firestore } from "../app/firebase/firebaseConfig";

export default function FetchProfilePic({ size = 50 }) {
    const [profilePicture, setProfilePicture] = useState(null);
    const [loading, setLoading] = useState(false); // Define the loading state variable
  
    useEffect(() => {
      const fetchProfilePicture = async () => {
        const userDoc = await getDoc(
          doc(firestore, "users", auth.currentUser.uid)
        );
        if (userDoc.exists()) {
          const profilePicUrl = userDoc.data().profilePicture;
          console.log("Fetched profile picture URL:", profilePicUrl); // Log the fetched profile picture URL
          setProfilePicture(profilePicUrl);
        }
      };
  
      fetchProfilePicture();
    }, []);
  
    return (
      <View>
        {profilePicture ? (
          <Image
            source={{ uri: profilePicture }}
            style={{ width: size, height: size, borderRadius: size / 2 }}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          />
        ) : (
          <Avatar.Text
            size={size}
            label={auth.currentUser?.displayName?.[0] || "U"}
          />
        )}
        {loading && <ActivityIndicator size="small" color="#0000ff" />}
      </View>
    );
  }
