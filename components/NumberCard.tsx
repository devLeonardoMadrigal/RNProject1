import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type NumberCardProps = {
  item: number;
  onPress: () => void;
};

const NumberCard = React.memo(({ item, onPress }: NumberCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>Number: {item}</Text>
    </TouchableOpacity>
  );
});

export { NumberCard };

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardTitle: { fontSize: 18, color: 'white', fontWeight: 'bold' },
});
