/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.text}>Hello from a modal!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.buttonClose}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>

      <View style={styles.container}>
        <Text style={styles.text}>Leo's App</Text>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <TextInput
          style={styles.input}
          value={emailText}
          onChangeText={setEmailText}
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={passwordText}
          onChangeText={setPasswordText}
          textContentType="password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.button_text}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 42,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: 300,
    padding: 10,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    width: 150,
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  button_text: {
    color: 'white',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default App;
