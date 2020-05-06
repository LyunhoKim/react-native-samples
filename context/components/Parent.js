import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppContext from '../context/AppContext';
import Child from './Child';

const Parent = () => {
  const number = useContext(AppContext);
  console.log('Parent');
  return (
    <View style={styles.container}>
      <Text>{number.value}</Text>
      <Child />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Parent;
