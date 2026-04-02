import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherContext } from '../store/context/WeatherContext';

const WeatherCard = () => {
  const { weather, getWeather } = useContext(WeatherContext);

  useEffect(() => {
    if (!weather) {
      getWeather();
    }
  }, [weather, getWeather]);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Weather: {weather}</Text>
    </View>
  );
};

export { WeatherCard };

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1991a6',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardTitle: { fontSize: 18, color: 'black', fontWeight: 'bold' },
});
