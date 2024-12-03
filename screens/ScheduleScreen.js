import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ScheduleScreen = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      updateCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  const checkOpeningStatus = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 8 && currentHour < 20) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    checkOpeningStatus();
  }, [currentTime]);

  const updateCountdown = () => {
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    let nextOpeningTime = { hour: 8, minute: 0 };

    if (currentHour >= 8 && currentHour < 20) {
      setCountdown('Nous sommes déjà ouverts!');
      return;
    } else if (currentHour >= 20) {
      nextOpeningTime = { hour: 8, minute: 0, nextDay: true };
    }

    const diffInMs = new Date(new Date().setHours(nextOpeningTime.hour, nextOpeningTime.minute, 0, 0)) - new Date();
    const diffInMinutes = Math.max(Math.floor(diffInMs / 60000), 0);
    const hoursLeft = Math.floor(diffInMinutes / 60);
    const minutesLeft = diffInMinutes % 60;

    setTimeLeft(`${hoursLeft}h ${minutesLeft}m`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos Horaires</Text>

      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleItem}>
          <FontAwesome5 name="clock" size={28} color="#4CAF50" />
          <Text style={styles.scheduleText}>Lundi - Vendredi : 8h00 - 20h00</Text>
        </View>
        <View style={styles.scheduleItem}>
          <FontAwesome5 name="clock" size={28} color="#4CAF50" />
          <Text style={styles.scheduleText}>Samedi : 10h00 - 18h00</Text>
        </View>
        <View style={styles.scheduleItem}>
          <FontAwesome5 name="times-circle" size={28} color="#FF6347" />
          <Text style={styles.scheduleText}>Dimanche : Fermé</Text>
        </View>
      </View>

      <Text style={styles.currentTime}>Heure actuelle : {currentTime}</Text>

      <Animated.View style={[styles.statusIndicator, { opacity: isOpen ? 1 : 0.7 }]}>
        <Text style={styles.statusText}>
          {isOpen ? 'Nous sommes ouverts!' : 'Nous sommes fermés.'}
        </Text>
      </Animated.View>

      {isOpen === false && (
        <View style={styles.countdownContainer}>
          <Text style={styles.countdownText}>Prochaine ouverture dans : {timeLeft}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 30,
  },
  scheduleContainer: {
    width: '100%',
    marginBottom: 20,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    paddingHorizontal: 15,
  },
  scheduleText: {
    fontSize: 20,
    marginLeft: 15,
    color: '#333',
  },
  currentTime: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  statusIndicator: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#E8F5E9',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  countdownContainer: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#FF8A65',
    borderRadius: 10,
  },
  countdownText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default ScheduleScreen; 