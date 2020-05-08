import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Color from 'color';

const App = () => {
  const [count, setCount] = useState(0);

  const showAlert = () => {
    setTimeout(() => {
      alert(`You clicked ${count} times`);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You clicked {count} times.</Text>
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          style={styles.button}
          underlayColor={Color('skyblue').darken(0.4)}
          onPress={() => setCount(count + 1)}>
          <Text>Click</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor={Color('skyblue').darken(0.4)}
          onPress={showAlert}>
          <Text>Alert</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'gray',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
});
