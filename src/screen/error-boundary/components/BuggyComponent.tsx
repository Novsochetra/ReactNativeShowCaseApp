import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { IBuggyComponentProps } from './BuggyComponent.interface';

let timeout: NodeJS.Timeout;

export const BuggyComponent: React.FC<IBuggyComponentProps> = () => {
  const [showErrorComponent, setShowErrorComponent] = useState<boolean>(false);

  useEffect(() => {
    timeout = setTimeout(() => {
      // product props
      setShowErrorComponent(true);
      clearTimeout(timeout);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View>
      <Text>This is buggy component</Text>
      {showErrorComponent && <Text>{props}</Text>}
    </View>
  );
};
