import { View, Text, Button, TextInput, StyleSheet, } from "react-native";
import React, {useState} from "react";

const Row = () => {
    const [text, setText] = useState("")
  return (
    <View>
      <TextInput 
        value = {text}
        style={styles.container}
        onChangeText = {
            (text) => setText(text)
        }
      />
      <Text>You type {text}</Text>
    </View>
  );
};

export default Row;


const styles = StyleSheet.create({
    container: {
    fontSize: 42,
    color: 'steelblue',
  },
})