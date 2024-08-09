import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const ObjectDetect = () => {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState('');
    const [confidense, setConfidense] = useState();
    const [loading, setLoading] = useState(false);

    const galeryBtnHandler = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo', quality: 1 });
        if (result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    };
    const cameraBtnHandler = async () => {
        const result = await launchCamera({ mediaType: 'photo', quality: 1 });
        if (result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    };

    const detectObject = async () => {
        if (!image) {
            Alert.alert('No image selected', 'Please select or take a photo first.');
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append('file', {
            uri: image,
            type: 'image/jpeg',
            name: 'photo.jpg'
        });
        const url = "http://192.168.29.109:5000/upload";
        await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                setPrediction(response.data.predictions[0].class_name);
                setConfidense(response.data.predictions[0].confidence);
            }).catch((error) => {
                Alert.alert("Error in Prediction", error);
            }).finally(() => {
                setLoading(false);
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select option below</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.galeryBtn} onPress={galeryBtnHandler}>
                    <Text style={styles.btnText}>Select from Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cameraBtn} onPress={cameraBtnHandler}>
                    <Text style={styles.btnText}>Open Camera</Text>
                </TouchableOpacity>
            </View>
            <View>
                {image && (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.imagePreview} />
                    </View>
                )}
            </View>
            {image && (
                <TouchableOpacity style={styles.detectBtn} onPress={detectObject} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={styles.detectBtnText}>Detect Object</Text>
                    )}
                </TouchableOpacity>
            )}
            {prediction &&
                <View style={styles.predictionContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Prediction:</Text>
                        <Text style={styles.value}>{prediction}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Confidence:</Text>
                        <Text style={styles.value}>
                            {Math.round((confidense * 100) * 100) / 100}%
                        </Text>
                    </View>
                </View>
            }
        </View>
    )
}

export default ObjectDetect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
        textAlign: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    galeryBtn: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 8,
        width: '40%',
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    cameraBtn: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 8,
        width: '40%',
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    imagePreview: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    detectBtn: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 8,
        alignItems: 'center',
    },
    detectBtnText: {
        color: 'white',
        fontSize: 18,
    },
    predictionContainer: {
        padding: 16,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        margin: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#555',
    },

});