import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle" size={100} color="#FFC107" />
      <Text style={styles.title}>À propos de nous</Text>
      <Text style={styles.description}>
        Nous sommes une salle de sport dédiée à aider nos membres à atteindre leurs objectifs de fitness.
        Avec des coachs professionnels, des équipements modernes et des programmes adaptés à tous les niveaux,
        nous offrons une expérience unique.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E88E5',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#757575',
  },
});