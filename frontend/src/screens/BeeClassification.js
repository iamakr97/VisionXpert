import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const BeeClassification = () => {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState('');
    const [confidence, setConfidence] = useState(null);
    const [loading, setLoading] = useState(false);

    // Open image gallery to pick an image
    const handleGallery = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo', quality: 1 });
        if (result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
            setPrediction(''); // Clear previous prediction when new image is selected
        }
    };

    // Open camera to capture an image
    const handleCamera = async () => {
        const result = await launchCamera({ mediaType: 'photo', quality: 1 });
        if (result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
            setPrediction(''); // Clear previous prediction when new image is selected
        }
    };

    // Detect bee health status from the selected image
    const detectHoneybeeHealth = async () => {
        if (!image) {
            Alert.alert('No image selected', 'Please select or take a photo first.');
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append('file', {
            uri: image,
            type: 'image/jpeg',
            name: 'bee.jpg',
        });

        const url = "http://192.168.29.109:5000/honeybee-classification";
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Map predicted_class to bee health status
            let beeHealthStatus;
            switch (response.data.predicted_class) {
                case 0:
                    beeHealthStatus = "Varroa, Small Hive Beetles";
                    break;
                case 1:
                    beeHealthStatus = "Ant problems";
                    break;
                case 2:
                    beeHealthStatus = "Few varroa, hive beetles";
                    break;
                case 3:
                    beeHealthStatus = "Healthy";
                    break;
                case 4:
                    beeHealthStatus = "Hive being robbed";
                    break;
                case 5:
                    beeHealthStatus = "Missing queen";
                    break;
                default:
                    beeHealthStatus = "Unknown Status";
            }

            // Set the mapped bee health status and confidence
            setPrediction(beeHealthStatus);
            setConfidence((response.data.confidence * 100).toFixed(2) + '%');
        } catch (error) {
            Alert.alert("Error in Prediction", error.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Honeybee Health Classification</Text>
            <Text style={styles.subheading}>Identify honeybee health by uploading a photo.</Text>

            {/* Image Picker Buttons */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.button} onPress={handleGallery}>
                    <Text style={styles.buttonText}>Select from Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleCamera}>
                    <Text style={styles.buttonText}>Open Camera</Text>
                </TouchableOpacity>
            </View>

            {/* Image Preview */}
            {image && (
                <Image source={{ uri: image }} style={styles.imagePreview} />
            )}

            {/* Detect Bee Health Button */}
            {image && (
                <TouchableOpacity
                    style={[styles.detectButton, loading && { backgroundColor: '#ccc' }]}
                    onPress={detectHoneybeeHealth}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={styles.detectButtonText}>Detect Health</Text>
                    )}
                </TouchableOpacity>
            )}

            {/* Prediction Result */}
            {prediction && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>
                        <Text style={styles.label}>Prediction:</Text> {prediction}
                    </Text>
                    <Text style={styles.resultText}>
                        <Text style={styles.label}>Confidence:</Text> {confidence}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default BeeClassification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 10,
    },
    subheading: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        width: '45%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    imagePreview: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    detectButton: {
        backgroundColor: '#28a745',
        padding: 12,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
    },
    detectButtonText: {
        color: 'white',
        fontSize: 18,
    },
    resultContainer: {
        marginTop: 20,
        padding: 16,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        color: '#333',
        marginVertical: 4,
    },
    label: {
        fontWeight: 'bold',
        color: '#555',
    },
});
