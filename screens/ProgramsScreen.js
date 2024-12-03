import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const programs = [
  {
    id: '1',
    title: 'Cardio',
    description: 'Entraînements pour améliorer votre endurance et votre condition physique.',
    color: '#FF6347',
    screen: 'Cardio',
  },
  {
    id: '2',
    title: 'Box',
    description: 'Améliorez votre force, endurance et agilité avec des entraînements de boxe.',
    color: '#2196F3',
    screen: 'Box',
  },
  {
    id: '3',
    title: 'Musculation',
    description: 'Programmes pour construire de la masse musculaire et augmenter votre force.',
    color: '#4CAF50',
    screen: 'Musculation',
  },
  {
    id: '4',
    title: 'Yoga',
    description: 'Sessions axées sur la relaxation, la souplesse et la maîtrise de soi.',
    color: '#9C27B0',
    screen: 'Yoga',
  },
  {
    id: '5',
    title: 'HIIT',
    description: 'Entraînements intensifs pour brûler des calories en un temps record.',
    color: '#FF9800',
    screen: 'HIIT',
  },
];

const ProgramCard = ({ program, navigation }) => (
  <Animatable.View
    animation="bounceIn"
    duration={800}
    style={[styles.programCard, { borderLeftColor: program.color }]}
  >
    <Text style={styles.programTitle}>{program.title}</Text>
    <Text style={styles.programDescription}>{program.description}</Text>
    <TouchableOpacity
      style={[styles.button, { backgroundColor: program.color }]}
      onPress={() => navigation.navigate(program.screen)} // Navigation vers la page spécifique
    >
      <Text style={styles.buttonText}>Voir Détails</Text>
    </TouchableOpacity>
  </Animatable.View>
);

const ProgramsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Explorez Nos Programmes</Text>
    <FlatList
      data={programs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProgramCard program={item} navigation={navigation} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  programCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    borderLeftWidth: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  programTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  programDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProgramsScreen;
