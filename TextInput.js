import React from 'react';

import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const FeedbackForm = () => { 
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  return (
    <ScrollView style={styles.container}>
    <Text style={styles.headingSection}> 
            How was your visit to MnM's Kitchenette? 
          </Text> 
          <Text style={styles.infoSection}> 
            MnM's Kitchenette is a home based bakery that serves various amazingly made desserts. Our Owner and herself, The Chef, makes efforts to provide the best taste to the customers. We would love 
    to hear your experience with us! 
          </Text> 
    <TextInput 
     style={styles.input} 
     value={name} 
    onChangeText={setName} 
    placeholder="Enter your name" />
    <TextInput 
      style={styles.input} 
            value={email} 
            onChangeText={setEmail} 
          placeholder="Enter your Email Address" /> 
          <TextInput 
            style={styles.messageInput} 
            value={feedback} 
            onChangeText={setFeedback} 
          placeholder="Your Feedback" /> 
    </ScrollView>
  );
};
  


// Add styles to the component
const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
    }, 
    input: { 
      height: 40, 
      margin: 12, 
      borderWidth: 1, 
      padding: 10, 
      fontSize: 16, 
      borderColor: 'EDEFEE', 
      backgroundColor: 'peru', 
    }, 
    messageInput: { 
      height: 100, 
      margin: 12, 
      borderWidth: 1, 
      padding: 10, 
      fontSize: 16, 
      backgroundColor: 'peru', 
    }, 
    infoSection: { 
      fontSize: 24, 
      padding: 20, 
      marginVertical: 8, 
      color: '#EDEFEE', 
      textAlign: 'center', 
      backgroundColor: '#495E57', 
    }, 
    headingSection: { 
      fontSize: 28, 
      padding: 20, 
      marginVertical: 8, 
      color: '#EDEFEE', 
      textAlign: 'center', 
      backgroundColor: '#495E57', 
    }, 
  }); 

export default FeedbackForm;
