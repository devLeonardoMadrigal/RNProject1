import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();

const LocalStorageScreen = () => {
  const [asyncInput, setAsyncInput] = useState('');
  const [keychainInput, setKeychainInput] = useState('');
  const [mmkvInput, setMmkvInput] = useState('');

  const [savedAsync, setSavedAsync] = useState<string | null>(null);
  const [savedKeychain, setSavedKeychain] = useState<string | null>(null);
  const [savedMmkv, setSavedMmkv] = useState<string | null>(null);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      const asyncVal = await AsyncStorage.getItem('@async_test_key');
      setSavedAsync(asyncVal);

      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        setSavedKeychain(credentials.password);
      } else {
        setSavedKeychain(null);
      }

      const mmkvVal = storage.getString('mmkv_test_key');
      setSavedMmkv(mmkvVal || null);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleSaveAsync = async () => {
    try {
      await AsyncStorage.setItem('@async_test_key', asyncInput);
      setSavedAsync(asyncInput);
      setAsyncInput('');
    } catch (e) {
      Alert.alert('Failed to save to AsyncStorage');
    }
  };

  const handleDeleteAsync = async () => {
    try {
      await AsyncStorage.removeItem('@async_test_key');
      setSavedAsync(null);
    } catch (e) {
      Alert.alert('Failed to delete from AsyncStorage');
    }
  };

  const handleSaveKeychain = async () => {
    try {
      await Keychain.setGenericPassword('dummyUser', keychainInput);
      setSavedKeychain(keychainInput);
      setKeychainInput('');
    } catch (e) {
      Alert.alert('Failed to save to Keychain');
    }
  };

  const handleDeleteKeychain = async () => {
    try {
      await Keychain.resetGenericPassword();
      setSavedKeychain(null);
    } catch (e) {
      Alert.alert('Failed to delete from Keychain');
    }
  };

  const handleSaveMMKV = () => {
    try {
      storage.set('mmkv_test_key', mmkvInput);
      setSavedMmkv(mmkvInput);
      setMmkvInput('');
    } catch (e) {
      Alert.alert('Failed to save to MMKV');
    }
  };

  const handleDeleteMMKV = () => {
    try {
      storage.remove('mmkv_test_key');
      setSavedMmkv(null);
    } catch (e) {
      Alert.alert('Failed to delete from MMKV');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Storage Tests</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>AsyncStorage</Text>
        <Text style={styles.valueText}>
          Saved Value: <Text>{savedAsync}</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter value..."
          value={asyncInput}
          onChangeText={setAsyncInput}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSaveAsync}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleDeleteAsync}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Keychain</Text>
        <Text style={styles.valueText}>
          Saved Value: <Text>{savedKeychain}</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter value..."
          value={keychainInput}
          onChangeText={setKeychainInput}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSaveKeychain}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleDeleteKeychain}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>MMKV</Text>
        <Text style={styles.valueText}>
          Saved Value: <Text>{savedMmkv}</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter value..."
          value={mmkvInput}
          onChangeText={setMmkvInput}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSaveMMKV}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleDeleteMMKV}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'gray',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  valueText: {
    fontSize: 14,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  saveButton: {
    backgroundColor: 'blue',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LocalStorageScreen;
