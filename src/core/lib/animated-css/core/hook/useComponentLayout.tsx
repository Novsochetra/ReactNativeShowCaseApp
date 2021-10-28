import { useCallback, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

export const useComponentLayout: () => [
  { width: number; height: number },
  (event: LayoutChangeEvent) => void,
] = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};
