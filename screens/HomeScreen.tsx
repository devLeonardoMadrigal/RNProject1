import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../App';
import { GET_WEATHER_API } from '../api';

type Props = StackScreenProps<RootStackParams, 'Home'>;

let numbers = [];

for (let i = 1; i < 2000; i++) {
  numbers.push(i);
}

const HomeScreen = ({ route }: Props) => {
  const [weather, setWeather] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  const searchInputRef = useRef<TextInput>(null);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    searchInputRef.current?.focus();

    const loadWeather = async () => {
      try {
        const res = await fetch(GET_WEATHER_API);
        const resJson = await res.json();
        setWeather(
          `Min: ${Math.round(
            (resJson.main.temp_min - 273.15) * (9 / 5) + 32,
          )} Max: ${Math.round(
            (resJson.main.temp_max - 273.15) * (9 / 5) + 32,
          )}`,
        );
      } catch (error) {
        setWeather('No data');
      }
    };

    loadWeather();
  }, []);

  const filteredNumbers = useMemo(() => {
    if (!searchQuery) return numbers;
    return numbers.filter(num => num.toString().includes(searchQuery));
  }, [searchQuery]);

  const handleItemPress = useCallback(() => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>User: {route.params?.name}</Text>
      <Text style={styles.weatherText}>Weather: {weather}</Text>

      <TextInput
        ref={searchInputRef}
        style={styles.searchInput}
        placeholder="Enter a number"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        ref={flatListRef}
        data={filteredNumbers}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleItemPress()}
          >
            <Text style={styles.cardTitle}>Number: {item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold' },
  weatherText: { fontSize: 16, marginBottom: 20 },
  searchInput: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardTitle: { fontSize: 18, color: 'white', fontWeight: 'bold' },
});

export { HomeScreen };
