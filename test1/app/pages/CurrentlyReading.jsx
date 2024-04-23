import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CurrentlyReading() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
        <Text>Currently Reading</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    });

