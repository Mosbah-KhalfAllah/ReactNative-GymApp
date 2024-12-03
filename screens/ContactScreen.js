import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ContactScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    Alert.alert(
      'Message envoyé !',
      'Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.',
      [
        {
          text: 'Retour à l\'accueil',
          onPress: () => navigation.navigate('Home'),
          style: 'cancel',
        },
      ]
    );
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactez-Nous</Text>
      <Text style={styles.subtitle}>Nous serons ravis de répondre à vos questions</Text>

      {/* Formulaire de contact avec icônes */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Votre Nom"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Votre Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="comment" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.textarea}
          placeholder="Votre Message"
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={4}
        />
      </View>

      {/* Bouton d'envoi */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Envoyer le Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FF6347',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 10,
    color: '#555',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  textarea: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    height: 120,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ContactScreen;
