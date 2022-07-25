import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1)
  return (
    <View>
    <TouchableOpacity>
      <Button title="Press me to increment" 
       onPress={increment}
       disabled = {true ? count < 0 : false}

      />
      
    </TouchableOpacity>
    <TouchableOpacity>
      <Button title='press me to decrement'
        onPress= {decrement}
        disabled = {true ? count < 0 : false}
       />
    </TouchableOpacity>
    <TouchableOpacity>
      <Button 
        title = "Reinitialize counter"
        onPress={
          () => setCount(0)
        }
      />
    </TouchableOpacity>
      
      <Text>
        The counter is set to: {count}
      </Text>
    </View>
  );
};

export default Counter;
