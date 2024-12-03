import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const MusculationScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={1500} style={styles.imageContainer}>
        <Image
          source={require('../assets/images/musculation.jpg')} // Remplacez par une image réelle
          style={styles.image}
        />
      </Animatable.View>

      <Animatable.Text animation="fadeIn" duration={2000} style={styles.title}>
        Musculation
      </Animatable.Text>

      <Animatable.Text animation="fadeInUp" duration={2500} style={styles.description}>
        Renforcez votre corps avec notre programme de musculation. Parfait pour développer la masse musculaire et améliorer votre force grâce à des exercices ciblés comme les haltères, les machines et les poids libres.
      </Animatable.Text>

      <Animatable.Text animation="fadeInUp" delay={3000} duration={2500} style={styles.benefitsTitle}>
        Avantages :
      </Animatable.Text>
      <Animatable.View animation="fadeInUp" delay={3200} style={styles.benefits}>
        <Text style={styles.benefitItem}>- Augmentation de la masse musculaire</Text>
        <Text style={styles.benefitItem}>- Amélioration de la force physique</Text>
        <Text style={styles.benefitItem}>- Meilleure posture et endurance</Text>
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
    color: '#4CAF50',
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
    backgroundColor: '#4CAF50',
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

export default MusculationScreen;
