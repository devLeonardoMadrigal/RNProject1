import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../types/RootStackParamList';
import { NumberCard } from '../components/NumberCard';
import { WeatherCard } from '../components/WeatherCard';

type Props = StackScreenProps<RootStackParams, 'Home'>;

let numbers = [];

for (let i = 1; i < 2000; i++) {
  numbers.push(i);
}

const HomeScreen = ({ route }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchInputRef = useRef<TextInput>(null);
  const flatListRef = useRef<FlatList>(null);

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
      <WeatherCard />

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
          <NumberCard item={item} onPress={handleItemPress} />
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
});

export { HomeScreen };
