import { StyleSheet, Text, View } from 'react-native';
import Board from './components/Board.js';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Aldens Super cool chess thing</Text>
        <Text>Web and mobile systems final exam project 2023</Text>
      </View>
      <Board style={styles.board}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 50,
  },
});
