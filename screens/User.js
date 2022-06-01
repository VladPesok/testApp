import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

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
  }
});

const User = (props) => {
  return(
    <View style={styles.container}>
      <Text>
        User Screen!
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => props.navigation.navigate('Home')}>
          <Text>
            Go to home!
          </Text>
      </TouchableOpacity>
    </View>
  )
}

export default User;