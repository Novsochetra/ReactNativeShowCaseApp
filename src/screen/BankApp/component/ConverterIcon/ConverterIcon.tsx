import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Reanimated, {
  useAnimatedReaction,
  runOnJS,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withSequence,
} from 'react-native-reanimated';
import { CONTAINER_HEIGHT as HEADER_TITLE_CONTAINER_HEIGHT } from '../HeaderTitle/HeaderTitle';
import { MAXIMUM_HEIGHT as CARD_LIST_CONTAINER_HEIGHT } from '../SectionListHeader';

interface IConverterIconProps {
  offsetY: Reanimated.SharedValue<number>;
}

export const ConverterIcon: React.FC<IConverterIconProps> = ({ offsetY }) => {
  const [icon, setIcon] = useState('💰');
  const opacity = useSharedValue(1);

  useAnimatedReaction(
    () => {
      if (
        offsetY.value >
        CARD_LIST_CONTAINER_HEIGHT + HEADER_TITLE_CONTAINER_HEIGHT
      ) {
        return '🔍';
      } else {
        return '💰';
      }
    },
    (result, prev) => {
      if (result !== prev) {
        opacity.value = withSequence(
          withTiming(0, {}, (isFinished) => {
            if (isFinished) {
              runOnJS(setIcon)(result);
            }
          }),
          withTiming(1),
        );
      }
    },
    [offsetY.value],
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Reanimated.Text style={[styles.icon, animatedStyle]}>
        {icon}
      </Reanimated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    backgroundColor: '#58585A',
    position: 'absolute',
    top: 16,
    right: 16,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },

  icon: {
    fontSize: 24,
  },
});
