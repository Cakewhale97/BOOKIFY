import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth } from '../app/firebase/firebaseConfig';
import { updateProfile } from 'firebase/auth';
import * as FileSystem from 'expo-file-system';
import { getStorage } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import { firestore } from '../app/firebase/firebaseConfig'; // Import your Firestore instance


const storage = getStorage();

export default function ImageUploader({ onUpload }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadImage(result.assets[0].uri);
    }
  };

const uploadImage = async (uri) => {
  try {
    if (!uri) {
      console.error('No image URI provided');
      return;
    }

    const user = auth.currentUser;

    if (user) {
      const imageRef = ref(storage, `profilePicture/${user.uid}.jpg`);

      const response = await fetch(uri);
      const blob = await response.blob();

      const snapshot = await uploadBytes(imageRef, blob);

      const downloadURL = await getDownloadURL(snapshot.ref);

      await updateProfile(user, { photoURL: downloadURL });

      await setDoc(doc(firestore, 'users', user.uid), { profilePicture: downloadURL }, { merge: true });

      setImage(downloadURL);
      if (onUpload) {
        onUpload(downloadURL);
      }
    } else {
      Alert.alert(
        "Error",
        "You need to be logged in to change your profile picture."
      );
    }
  } catch (error) {
    console.error(error);
    Alert.alert(
      "Upload failed",
      "An error occurred while uploading the image."
    );
  }
};

  return (
    <TouchableOpacity onPress={pickImage}>
      <Text>Upload Profile Picture</Text>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20 }} />}
    </TouchableOpacity>
  );
}