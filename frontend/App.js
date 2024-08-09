import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Home from './src/screes/Home';
import ObjectDetect from './src/components/ObjectDetect';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Object Detection App</Text>
      <ObjectDetect />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    height: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
});

export default App;
