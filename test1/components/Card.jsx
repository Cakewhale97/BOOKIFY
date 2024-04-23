import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Card({ title, image, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: image}} style={styles.image} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 10,
        elevation: 2,
    },
    image: {
        width: 100,
        height: 150,
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 18,
    },
});