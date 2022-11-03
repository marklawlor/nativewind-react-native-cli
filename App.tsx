import {useColorScheme, styled} from 'nativewind';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

import './styles/global.css';

const Button = styled(Pressable, 'border', {
  variants: {
    status: {
      primary: 'border-red-400',
      secondary: 'border-blue-500',
    },
  },
  defaultVariants: {
    status: 'primary',
  },
});

const App = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Button
        onPress={() => toggleColorScheme()}
        className="flex-1 bg-slate-300 dark:bg-slate-800">
        <Text className="brand-color dark:text-white">
          Open up App.js to start working on your app!
        </Text>
        <Text className="brand-color dark:text-white">
          {colorScheme === 'dark' ? '🌙 Dark' : '🌞 Light'}
        </Text>
      </Button>
    </View>
  );
};

export default App;
