import { ColorValue, StyleSheet, View } from 'react-native';
import React from 'react';
import Reanimated, {
  EntryAnimationsValues,
  Layout,
} from 'react-native-reanimated';

interface IProgressBarProps {
  value: number;
  barColor?: ColorValue;
  backgroundColor?: ColorValue;
}

function CustomEnteringAnimation(targetValues: EntryAnimationsValues) {
  'worklet';
  const animations = {
    width: targetValues.targetWidth,
  };

  const initialValues = {
    width: 0,
  };

  return {
    initialValues,
    animations,
  };
}

export const ProgressBar: React.FC<IProgressBarProps> = ({
  value,
  barColor = '#FFFFFF',
  backgroundColor = '#9D9CA3',
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Reanimated.View
        style={[styles.item, { width: `${value}%`, backgroundColor: barColor }]}
        entering={CustomEnteringAnimation}
        layout={Layout.springify()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },

  item: { height: '100%', borderRadius: 8 },
});
