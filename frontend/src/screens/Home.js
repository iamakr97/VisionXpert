import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
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
        <FeatureButton
          onPress={() => navigation.navigate('ObjectDetection')}
          title="Object Detection"
          imageSource={require('../assets/face-detection.png')}
        />
        <FeatureButton
          onPress={() => navigation.navigate('RoseDisease')}
          title="Rose Disease"
          imageSource={require('../assets/rose.png')}
        />
        <FeatureButton
          onPress={() => navigation.navigate('FishDisease')}
          title="Fish Disease"
          imageSource={require('../assets/clown-fish.png')}
        />
        <FeatureButton
          onPress={() => navigation.navigate('BeeClassification')}
          title="Bee Classification"
          imageSource={require('../assets/beelogo.png')}
        />
        <FeatureButton
          onPress={() => alert('This feature will be added soon!')}
          title="Example Feature 2"
        />
        <FeatureButton
          onPress={() => alert('This feature will be added soon!')}
          title="Example Feature 3"
        />
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

// FeatureButton Component
const FeatureButton = ({ onPress, title, imageSource }) => (
  <TouchableOpacity style={styles.featureButton} onPress={onPress}>
    {imageSource && <Image source={imageSource} style={styles.icon} />}
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', 
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
    backgroundColor: '#ffffff', 
    width: '45%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
    borderColor: '#e6e6e6', 
    borderWidth: 1,
  },
  icon: {
    width: 50,
    height: 50,
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
