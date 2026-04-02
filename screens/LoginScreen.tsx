import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { WeatherCard } from '../components/WeatherCard';
import NavButton from '../components/NavButton';
import { RootStackParams } from '../types/RootStackParamList';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <WeatherCard />

          <Text style={styles.logoText}>GoRMV</Text>
          <Text style={styles.subtitleText}>Move cargo, grow business.</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
              <TextInput
                style={styles.textInput}
                placeholder="you@example.com"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
              <TextInput
                style={styles.textInput}
                placeholder="*********"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={true}
              />
              <Ionicons name="eye-off-outline" size={20} color="#9CA3AF" />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home', { name: 'Leo' })}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <NavButton route="LocalStorage" />

        <View style={styles.optionsRow}>
          <View style={styles.checkboxContainer}>
            <Ionicons name="checkbox" size={22} color="#3B82F6" />
            <Text style={styles.checkboxText}>Keep me signed in</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}>
              New to GoRMV?
              <View style={{ padding: 10 }}></View>
              <Text style={styles.createAccountText}>Create Account</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 18,
    color: '#6B7280',
  },
  formContainer: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000000',
  },
  loginButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#4B5563',
  },
  forgotPasswordText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 60,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#6B7280',
  },
  createAccountText: {
    color: '#3B82F6',
    fontWeight: 'bold',
  },
  weatherContainer: {
    backgroundColor: '#7facf4',
  },
});

export { LoginScreen };
