import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null);

  const handleSubmit = () => {
    // Handle feedback submission (e.g., send feedback to server or show confirmation message)
    alert(`Feedback Submitted:\nRating: ${rating}\nComments: ${feedback}`);
  };

  return (
    <View style={styles.container}>
      {/* Feedback Title */}
      <Text style={styles.title}>We value your feedback!</Text>

      {/* Rating Section */}
      <Text style={styles.label}>Rate your experience:</Text>
      <View style={styles.ratingContainer}>
        {['😡', '😐', '😊', '😍'].map((emoji, index) => (
          <TouchableOpacity key={index} onPress={() => setRating(emoji)} style={styles.emojiButton}>
            <Text style={rating === emoji ? styles.selectedEmoji : styles.emoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback Text Input */}
      <Text style={styles.label}>Your Comments:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type your feedback here..."
        placeholderTextColor="#888"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff8856', // Theme color
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  emojiButton: {
    padding: 10,
  },
  emoji: {
    fontSize: 30,
    color: '#aaa',
  },
  selectedEmoji: {
    fontSize: 35,
    color: '#ff8856', // Highlight selected emoji
  },
  textInput: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#333',
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#ff8856', // Theme color
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
