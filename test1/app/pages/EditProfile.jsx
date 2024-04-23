import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ImageUploader from '../../components/ImageUploader';

export default function EditProfile({ navigation }) {
  const handleUpload = (url) => {
    console.log('Image uploaded:', url);
  };

  return (
    <View style={styles.container}>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.uploadImg}>
      <ImageUploader onUpload={handleUpload} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
    uploadImg: {
        padding: 15,
        backgroundColor: 'red',
        marginTop: 20,
    },
});
