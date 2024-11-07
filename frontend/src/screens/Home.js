import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to VisionXpert</Text>
      <Text style={styles.subtitle}>Select a feature to get started:</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ObjectDetection')}
      >
        <Text style={styles.buttonText}>Object Detection</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RoseDisease')}
      >
        <Text style={styles.buttonText}>Rose Disease Classification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FishDisease')}
      >
        <Text style={styles.buttonText}>Fish Disease Classification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('This feature will be added soon!')}
      >
        <Text style={styles.buttonText}>Example Feature 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('This feature will be added soon!')}
      >
        <Text style={styles.buttonText}>Example Feature 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('This feature will be added soon!')}
      >
        <Text style={styles.buttonText}>Example Feature 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8', // Light background for contrast
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ff8856',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
