import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { IBuggyComponentProps } from './BuggyComponent.interface';

let timeout: NodeJS.Timeout;

export const BuggyComponent: React.FC<IBuggyComponentProps> = () => {
  useEffect(() => {
    timeout = setTimeout(() => {
      // product props
      console.log('ERROR', props);
      clearTimeout(timeout);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View>
      <Text>This is buggy component</Text>
    </View>
  );
};
