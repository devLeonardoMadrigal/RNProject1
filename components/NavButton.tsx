import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../types/RootStackParamList';

interface NavButtonProps {
  route: keyof RootStackParams;
}

const NavButton = ({ route }: NavButtonProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <TouchableOpacity
      style={styles.navButton}
      onPress={() => navigation.navigate(route as never)}
    >
      <Text style={styles.navButtonText}>Local Storage Screen</Text>
    </TouchableOpacity>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  navButton: {
    backgroundColor: 'green',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
