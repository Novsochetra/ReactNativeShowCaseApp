import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';
import { MainAccountCard } from './Card/MainAccountCard';
import { NormalAcountCard } from './Card/NormalAcountCard';

interface ISectionListHeaderProps {
  offsetY: Reanimated.SharedValue<number>;
}

export const MAXIMUM_HEIGHT = 160;
const WIDTH = Dimensions.get('window').width;

const SectionListHeader: React.FC<ISectionListHeaderProps> = ({ offsetY }) => {
  const animatedContainerStyle = useAnimatedStyle(() => {
    const rotateX = interpolate(
      offsetY.value,
      [0, MAXIMUM_HEIGHT],
      [0, 90],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      offsetY.value,
      [0, MAXIMUM_HEIGHT / 2, MAXIMUM_HEIGHT],
      [1, 0.8, 0],
      Extrapolate.CLAMP,
    );

    return {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#030303',
      opacity,
      transform: [
        { translateY: MAXIMUM_HEIGHT / 2 },
        { translateX: -WIDTH / 4 },
        { perspective: 400 },
        { rotateX: `${rotateX}deg` },
        { translateX: WIDTH / 4 },
        { translateY: -MAXIMUM_HEIGHT / 2 },
      ],
    };
  });

  return (
    <Reanimated.View>
      <Reanimated.ScrollView
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled
        horizontal
        contentContainerStyle={[styles.headerContainerStyle]}>
        <Reanimated.View style={animatedContainerStyle}>
          <View style={styles.cardWrapper}>
            <MainAccountCard
              title={'Main Account'}
              amount={'$87,760'}
              icon={'🏀'}
            />
          </View>

          <View style={styles.cardWrapper}>
            <NormalAcountCard
              title={'Vocation'}
              amount={'$4,302'}
              icon={'🏡'}
              percentage={50}
            />
          </View>

          <View style={styles.cardWrapper}>
            <NormalAcountCard
              title={'Buy Tesla'}
              amount={'$3,000'}
              icon={'⚡️'}
              percentage={50}
            />
          </View>
        </Reanimated.View>
      </Reanimated.ScrollView>
    </Reanimated.View>
  );
};

export default SectionListHeader;

const styles = StyleSheet.create({
  cardWrapper: {
    margin: 8,
  },

  headerContainerStyle: {
    backgroundColor: '#030303',
    flexGrow: 1,
    height: MAXIMUM_HEIGHT,
  },
});
