import React from 'react';
import { View, StyleSheet } from 'react-native';

const GrandChild = () => {
  console.log('GrandChild');
  return <View style={styles.container} />;
};

export default GrandChild;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'magenta',
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
