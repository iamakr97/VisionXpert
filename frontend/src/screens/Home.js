import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>VisionXpert</Text>
        <Text style={styles.appTagline}>Empowering insights through AI-powered recognition</Text>
      </View>

      {/* Deep Learning Poster */}
      <Image
        source={require('../assets/deepLearning.jpg')}
        style={styles.poster}
      />

      {/* App Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          VisionXpert provides advanced object detection and disease classification for plants and fish,
          leveraging the power of deep learning to assist in identification and diagnosis.
        </Text>
      </View>

      {/* Feature Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.featureButton}
          onPress={() => navigation.navigate('ObjectDetection')}
        >
          <Image source={require('../assets/face-detection.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Object Detection</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureButton}
          onPress={() => navigation.navigate('RoseDisease')}
        >
          <Image source={require('../assets/rose.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Rose Disease</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureButton}
          onPress={() => navigation.navigate('FishDisease')}
        >
          <Image source={require('../assets/clown-fish.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Fish Disease</Text>
        </TouchableOpacity>

        {/* Placeholder Buttons */}
        <TouchableOpacity
          style={styles.featureButton}
          onPress={() => navigation.navigate('BeeClassificaion')}
        >
          <Image source={require('../assets/beelogo.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Bee Classification</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureButton}
          onPress={() => alert('This feature will be added soon!')}
        >
          {/* <Image source={require('../assets/placeholder_icon.png')} style={styles.icon} /> */}
          <Text style={styles.buttonText}>Example Feature 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureButton}
          onPress={() => alert('This feature will be added soon!')}
        >
          {/* <Image source={require('../assets/placeholder_icon.png')} style={styles.icon} /> */}
          <Text style={styles.buttonText}>Example Feature 3</Text>
        </TouchableOpacity>
      </View>

      {/* App Information Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>About VisionXpert</Text>
        <Text style={styles.infoText}>
          VisionXpert is a cutting-edge AI-based application that helps users identify objects and diagnose diseases in plants and fish. With easy-to-use navigation and a variety of features, it’s designed to provide insights that empower users to make informed decisions. Stay tuned for more exciting features coming soon!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6f7ff', // Soft light blue background
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  appTagline: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  poster: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureButton: {
    backgroundColor: 'rgba(0, 123, 255, 0.2)', // Transparent blue for a water-like effect
    width: '45%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderColor: '#007bff',
    borderWidth: 1,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  buttonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoSection: {
    marginTop: 30,
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
  },
});

export default Home;
