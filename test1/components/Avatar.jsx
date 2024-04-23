// Avatar.jsx
import React from "react";
import { Avatar as PaperAvatar } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function Avatar() {
  return (
    <View style={styles.avatar}>
      <PaperAvatar.Icon size={50} icon="account" />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: "100%",
    padding: 30,
  },
});

// // Avatar.jsx
// import React from 'react';
// import { Avatar as PaperAvatar } from 'react-native-paper';

// export default function Avatar({ uri }) {
//   return uri
//     ? <PaperAvatar.Image size={50} source={{ uri }} />
//     : <PaperAvatar.Icon size={50} icon="account" />;
// }

// // HomePage.jsx
// import Avatar from './Avatar'; // Import the Avatar component

// // ...

// <View style={styles.avatar}>
//   <Avatar uri={user.profileIconUri} />
// </View>
