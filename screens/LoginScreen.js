import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'mosbah@gmail.com' && password === '123') {
      navigation.navigate('Programs'); // Redirige vers l'écran Programs
    } else {
      Alert.alert('Erreur', 'Identifiants incorrects. Veuillez réessayer.');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.Text style={styles.title} animation="fadeInDown" duration={1500}>
        Connexion
      </Animatable.Text>

      <Animatable.View animation="fadeInUp" duration={1500}>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={24} color="#FF8C00" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="#FF8C00" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Animatable.View animation="bounceIn" duration={2000}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Se Connecter</Text>
          </TouchableOpacity>
        </Animatable.View>

        <TouchableOpacity style={styles.forgotPassword} onPress={() => Alert.alert("Fonctionnalité de réinitialisation de mot de passe non implémentée")}>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFE4B5', // Fond orange clair
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF8C00', // Couleur orange vif
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FF8C00', // Bordure orange
    padding: 15,
    width: '100%',
  },
  icon: {
    marginRight: 15,
  },
  input: {
    width: '90%',
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#FF8C00', // Bouton orange
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#FF8C00', // Couleur orange pour le lien
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
