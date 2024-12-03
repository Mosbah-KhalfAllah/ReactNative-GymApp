import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Pour les icônes

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Menu en haut */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Coaches')}>
          <FontAwesome name="users" size={20} color="#fff" />
          <Text style={styles.navButtonText}>Coachs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Subscription')}>
          <FontAwesome name="credit-card" size={20} color="#fff" />
          <Text style={styles.navButtonText}>Abonnements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Schedule')}>
          <FontAwesome name="calendar" size={20} color="#fff" />
          <Text style={styles.navButtonText}>Horaires</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Contact')}>
          <FontAwesome name="envelope" size={20} color="#fff" />
          <Text style={styles.navButtonText}>Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Titre de la page */}
      <Text style={styles.title}>Bienvenue à notre Salle de Sport</Text>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/h-1.jpg')}
          style={styles.image}
        />
      </View>

      {/* Sous-titre */}
      <Text style={styles.subtitle}>Nos Services</Text>

      {/* Boutons pour naviguer vers les autres écrans */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Coaches')}>
        <Text style={styles.buttonText}>Voir les Coachs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Voir les Programmes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subscription')}>
        <Text style={styles.buttonText}>Voir les Plans d'Abonnement</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule')}>
        <Text style={styles.buttonText}>Voir les Horaires</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttonText}>Contactez-Nous</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 22,
    marginVertical: 10,
    color: '#FF6347',
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FF6347', // Bordure autour de l'image
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  // Styles pour la barre de navigation en haut
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 20,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
});

export default HomeScreen;
