import React from 'react';
import { StyleSheet } from 'react-native';
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { MAXIMUM_HEIGHT as SECTION_HEADER_HEIGHT } from '../SectionListHeader';

export const CONTAINER_HEIGHT = 120;

interface IHeaderTitle {
  offsetY: Reanimated.SharedValue<number>;
}

export const HeaderTitle: React.FC<IHeaderTitle> = ({ offsetY }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const transY = interpolate(
      offsetY.value,
      [SECTION_HEADER_HEIGHT, SECTION_HEADER_HEIGHT + CONTAINER_HEIGHT],
      [0, -CONTAINER_HEIGHT],
      Extrapolate.CLAMP,
    );

    return {
      opacity: 1,
      marginTop: transY,
    };
  });

  const animatedTitleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      offsetY.value,
      [SECTION_HEADER_HEIGHT, SECTION_HEADER_HEIGHT + CONTAINER_HEIGHT],
      [1, 0],
      Extrapolate.CLAMP,
    );

    return {
      opacity: opacity,
    };
  });

  return (
    <Reanimated.View style={[styles.container, animatedStyle]}>
      <Reanimated.View style={styles.wrapper}>
        <Reanimated.Text style={[styles.title, animatedTitleStyle]}>
          $26,710
        </Reanimated.Text>
        <Reanimated.Text style={[styles.totalBalance]}>
          Total Balance
        </Reanimated.Text>
      </Reanimated.View>
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: CONTAINER_HEIGHT,
    backgroundColor: '#030303',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '600',
    bottom: 0,
    borderWidth: 1,
  },

  totalBalance: {
    color: '#58585A',
    fontWeight: '700',
  },
});
