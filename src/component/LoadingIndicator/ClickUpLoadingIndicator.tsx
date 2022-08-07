import React, { useEffect } from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import Reanimated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export interface IClickLoadingIndicatorProps {
  size?: number;
  color?: ColorValue;
}

export const ClickUpLoadingIndicator: React.FC<IClickLoadingIndicatorProps> = ({
  size = 40,
  color = 'rgba(85,30,217, 1)',
}) => {
  return (
    <View style={styles.container}>
      <Circle size={size} delay={0} color={color} />
      <Circle size={size} delay={250} color={color} />
      <Circle size={size} delay={500} color={color} />
    </View>
  );
};

// TODO: export component to different file
interface ICircleProps {
  size?: number;
  delay?: number;
  color?: ColorValue;
}
const Circle: React.FC<ICircleProps> = ({
  size = 40,
  delay = 0,
  color = 'rgba(85,30,217, 1)',
}) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      backgroundColor: color,
      margin: 4,
      borderRadius: size / 2,
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    const IS_LOOP = -1;
    scale.value = withDelay(
      delay,
      withRepeat(
        withTiming(0, {
          duration: 750,
        }),
        IS_LOOP,
        true,
      ),
    );
    return () => {
      cancelAnimation(scale);
    };
  }, [delay, scale]);
  return <Reanimated.View style={animatedStyle} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
