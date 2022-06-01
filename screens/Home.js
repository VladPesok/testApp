import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100
  }
});

const Home = (props) => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        onChangeText={setText}
        />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setList([...list, text])}>
          <Text>
            + Add
          </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setList([])}>
          <Text>
            Clear
          </Text>
      </TouchableOpacity>
      <View>
        {list.map((value, index) => (
          <Text key={index}>
            {value}
          </Text>
        ))}
      </View>
    </View>
  )
}

export default Home;