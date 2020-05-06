import React, { useContext } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

import GrandChild from './GrandChild';
import AppContext from '../context/AppContext';

const Child = () => {
  const { increase, decrease } = useContext(AppContext);
  console.log('Child');
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={increase}>
        <Text>Increase</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={decrease}>
        <Text>Decrease</Text>
      </TouchableHighlight>
      <GrandChild />
    </View>
  );
};

export default Child;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'tomato',
    padding: 20,
    marginTop: 20,
  },
});
