import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const BoxScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={1500} style={styles.imageContainer}>
        <Image
          source={require('../assets/images/box.jpg')}
          style={styles.image}
        />
      </Animatable.View>

      <Animatable.Text animation="fadeIn" duration={2000} style={styles.title}>
        Boxe
      </Animatable.Text>

      <Animatable.Text animation="fadeInUp" duration={2500} style={styles.description}>
        Découvrez notre programme de boxe conçu pour améliorer votre force, endurance et agilité. Nos entraînements variés, incluant des coups, esquives et combinaisons, sont parfaits pour les débutants comme pour les athlètes expérimentés.
      </Animatable.Text>

      <Animatable.Text animation="fadeInUp" delay={3000} duration={2500} style={styles.benefitsTitle}>
        Avantages :
      </Animatable.Text>
      <Animatable.View animation="fadeInUp" delay={3200} style={styles.benefits}>
        <Text style={styles.benefitItem}>- Amélioration de la force physique</Text>
        <Text style={styles.benefitItem}>- Renforcement de la coordination</Text>
        <Text style={styles.benefitItem}>- Augmentation de l'endurance</Text>
      </Animatable.View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Retour</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2196F3', // Vous pouvez changer cette couleur selon le style du programme
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 18,
    color: '#333',
    lineHeight: 25,
    textAlign: 'justify',
    marginBottom: 20,
  },
  benefitsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  benefits: {
    marginBottom: 20,
  },
  benefitItem: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default BoxScreen;
