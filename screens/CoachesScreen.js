import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';

const coaches = [
  { 
    id: '1', 
    name: 'John Doe', 
    specialty: 'Cardio', 
    photo: require('../assets/images/c-1.jpg'),
    bio: 'John is a certified cardio coach with 10 years of experience.' 
  },
  { 
    id: '2', 
    name: 'Jane Smith', 
    specialty: 'Musculation', 
    photo: require('../assets/images/c-2.jpg'),
    bio: 'Jane specializes in strength training and has helped many achieve their fitness goals.' 
  },
  { 
    id: '3', 
    name: 'Emily Johnson', 
    specialty: 'Yoga', 
    photo: require('../assets/images/c-3.jpg'),
    bio: 'Emily teaches yoga and mindfulness to help you improve flexibility and mental health.' 
  },
  { 
    id: '4', 
    name: 'Michael Brown', 
    specialty: 'HIIT', 
    photo: require('../assets/images/c-4.jpg'),
    bio: 'Michael is an expert in High-Intensity Interval Training (HIIT), helping clients burn fat and improve stamina.' 
  },
  { 
    id: '5', 
    name: 'Jake Tyson', 
    specialty: 'Boxe', 
    photo: require('../assets/images/c-5.jpg'),
    bio: 'Jake is a professional boxer and coach, teaching boxing techniques and self-defense.' 
  },
];

const CoachCard = ({ coach, onPress }) => (
  <Animatable.View
    animation="fadeInUp"
    duration={1000}
    style={styles.coachCard}
  >
    <TouchableOpacity activeOpacity={0.8} style={styles.coachImageContainer}>
      <Image source={coach.photo} style={styles.coachImage} />
    </TouchableOpacity>
    <Text style={styles.coachName}>{coach.name}</Text>
    <Text style={styles.coachSpecialty}>{coach.specialty}</Text>
    <TouchableOpacity style={styles.viewProfileButton} onPress={() => onPress(coach)}>
      <Text style={styles.viewProfileButtonText}>Voir le profil</Text>
    </TouchableOpacity>
  </Animatable.View>
);

const CoachesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState(null);

  const handlePress = (coach) => {
    setSelectedCoach(coach);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCoach(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos Coachs</Text>
      <FlatList
        data={coaches}
        keyExtractor={(item) => item.id}
        numColumns={2} // Layout in 2 columns
        renderItem={({ item }) => <CoachCard coach={item} onPress={handlePress} />}
      />

      {/* Modal */}
      {selectedCoach && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <ScrollView contentContainerStyle={styles.modalScrollView}>
                <Image source={selectedCoach.photo} style={styles.modalImage} />
                <Text style={styles.modalName}>{selectedCoach.name}</Text>
                <Text style={styles.modalSpecialty}>{selectedCoach.specialty}</Text>
                <Text style={styles.modalBio}>{selectedCoach.bio}</Text>
                <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                  <Text style={styles.modalCloseButtonText}>Fermer</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F4F4',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  coachCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  coachImageContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#FF6347',
  },
  coachImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  coachName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  coachSpecialty: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
    textAlign: 'center',
  },
  viewProfileButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  viewProfileButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 10,
  },
  modalScrollView: {
    alignItems: 'center',
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  modalName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalSpecialty: {
    fontSize: 18,
    color: '#888',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalBio: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalCloseButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CoachesScreen;
