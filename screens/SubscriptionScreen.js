import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Modal, Animated } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const SubscriptionScreen = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = React.useState(null);
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [modalVisible, setModalVisible] = React.useState(false);

  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlanPress = (plan) => {
    setSelectedPlan(plan);
    setModalVisible(true); // Afficher le pop-up
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleSubmit = () => {
    const { fullName, email, phone } = formData;
    if (!fullName || !email || !phone) {
      alert('Veuillez remplir tous les champs requis.');
      return;
    }

    // Affichage d'un message personnalisé avec un design moderne et joli
    Alert.alert(
      'Merci pour votre inscription!',
      `Bonjour ${fullName},\nVous avez choisi le plan ${selectedPlan.label}.`,
      [
        {
          text: 'Retour à l\'accueil',
          onPress: () => navigation.navigate('Home'),
          style: 'default',
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choisissez votre abonnement</Text>

      <View style={styles.planCards}>
        {[
          { label: 'Static', price: '5€/mois', icon: 'smile', value: 'static', color: '#f39c12' },
          { label: 'Standard', price: '15€/mois', icon: 'users', value: 'standard', color: '#27ae60' },
          { label: 'Premium', price: '25€/mois', icon: 'crown', value: 'premium', color: '#2980b9' },
        ].map((plan) => (
          <Animated.View
            key={plan.value}
            style={[
              styles.planCard,
              selectedPlan === plan.value && {
                borderColor: plan.color,
                backgroundColor: `${plan.color}20`,
              },
              { transform: [{ scale: selectedPlan === plan.value ? scaleAnim : 1 }] },
            ]}
          >
            <TouchableOpacity onPress={() => handlePlanPress(plan)}>
              <FontAwesome5 name={plan.icon} size={32} color={plan.color} />
              <Text style={styles.planTitle}>{plan.label}</Text>
              <Text style={styles.planPrice}>{plan.price}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      {/* Modal affichant les détails du plan sélectionné */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedPlan?.label} - Détails</Text>
            <Text style={styles.modalDescription}>
              {selectedPlan?.label === 'Static' ? 'Plan basique avec accès limité.' : ''}
              {selectedPlan?.label === 'Standard' ? 'Plan intermédiaire avec plus d\'avantages.' : ''}
              {selectedPlan?.label === 'Premium' ? 'Plan premium avec toutes les fonctionnalités.' : ''}
            </Text>
            <Text style={styles.modalPrice}>{selectedPlan?.price}</Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.form}>
        {[
          { placeholder: 'Nom complet', value: 'fullName', icon: 'person' },
          { placeholder: 'Adresse email', value: 'email', icon: 'email', keyboardType: 'email-address' },
          { placeholder: 'Numéro de téléphone', value: 'phone', icon: 'phone', keyboardType: 'phone-pad' },
          { placeholder: 'Adresse', value: 'address', icon: 'location-on' },
        ].map((field) => (
          <View style={styles.inputContainer} key={field.value}>
            <MaterialIcons name={field.icon} size={24} color="#2b6777" />
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              value={formData[field.value]}
              keyboardType={field.keyboardType || 'default'}
              onChangeText={(text) => handleInputChange(field.value, text)}
            />
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Souscrire maintenant</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  planCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  planCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    elevation: 3,
  },
  planTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  planPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2b6777',
    marginVertical: 5,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2b6777',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2b6777',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#f39c12',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubscriptionScreen;
