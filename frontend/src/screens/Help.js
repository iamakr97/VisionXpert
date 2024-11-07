import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Help = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>How to Use VisionXpert</Text>
            <Text style={styles.description}>
                Welcome to VisionXpert! Follow the steps below to make the most of the object detection, rose disease classification, and fish disease classification features.
            </Text>

            
            <View style={styles.section}>
                <Image source={require('../assets/Object-detection.png')} style={styles.image} />
                <Text style={styles.sectionTitle}>Object Detection</Text>
                <Text style={styles.step}>1. On the Home screen, tap the "Object Detection" category.</Text>
                <Text style={styles.step}>2. Use the camera or upload a photo to detect objects in the image.</Text>
                <Text style={styles.step}>3. The app will analyze the image and provide a prediction result.</Text>
            </View>

            
            <View style={styles.section}>
                <Image source={require('../assets/rose_disease.png')} style={styles.image} />
                <Text style={styles.sectionTitle}>Rose Disease Classification</Text>
                <Text style={styles.step}>1. Select the "Rose Disease" category from the Home screen.</Text>
                <Text style={styles.step}>2. Capture or upload a photo of a rose leaf.</Text>
                <Text style={styles.step}>3. The app will analyze the image and tell you if the rose is healthy or has a disease.</Text>
            </View>

            
            <View style={styles.section}>
                <Image source={require('../assets/fish_disease.jpg')} style={styles.image} />
                <Text style={styles.sectionTitle}>Fish Disease Classification</Text>
                <Text style={styles.step}>1. Select the "Fish Disease" category from the Home screen.</Text>
                <Text style={styles.step}>2. Capture or upload a photo of the fish or its infected area.</Text>
                <Text style={styles.step}>3. The app will analyze the image and provide a diagnosis for the fish disease.</Text>
            </View>

            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>

            
            <View style={styles.contactSection}>
                <Text style={styles.contactText}>Still need help?</Text>
                <TouchableOpacity>
                    <Text style={styles.contactLink}>Contact Support</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Help;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff', 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ff8856', 
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 30,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    step: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 15,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#ff8856',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    contactText: {
        fontSize: 16,
        color: '#555',
    },
    contactLink: {
        fontSize: 16,
        color: '#ff8856',
        fontWeight: 'bold',
        marginTop: 5,
    },
});
