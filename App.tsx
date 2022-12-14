import {useColorScheme} from 'nativewind';
import React from 'react';
import {Text, Pressable} from 'react-native';

const App = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <Pressable
      className="flex-1 items-center justify-center bg-white dark:bg-black"
      onPress={() => toggleColorScheme()}>
      <Text className="custom-color dark:text-white">
        {`Open up App.js to start working on your app! ${colorScheme} `}
      </Text>
    </Pressable>
  );
};

export default App;
