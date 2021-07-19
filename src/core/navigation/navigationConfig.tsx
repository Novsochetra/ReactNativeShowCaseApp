import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { assets } from '@core/asset';
import { theme } from '@core/asset/style/theme';
import { StackNavigationOptions } from '@react-navigation/stack';
import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

export const defaultNavigationStack: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: { color: theme.white },
  headerBackTitleStyle: { color: theme.white },
  headerBackImage: () => (
    <Image source={assets.icons.chevronLeft()} style={styles.backIcon} />
  ),
  headerStyle: {
    backgroundColor: theme.primary,
  },
};

const icons = [
  {
    icon: assets.icons.home(),
    activeIcon: assets.icons.homeActive(),
    label: 'Home',
  },
  {
    icon: assets.icons.community(),
    activeIcon: assets.icons.communityActive(),
    label: 'Community',
  },
];

export function CustomBottomTabBar({
  state,
  navigation,
}: BottomTabBarProps<BottomTabBarOptions>) {
  return (
    <View style={styles.bottomTabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableNativeFeedback
            key={route.key}
            accessibilityRole="button"
            onPress={onPress}>
            <View style={styles.buttonWrapper}>
              <Animated.Image
                source={isFocused ? icons[index].activeIcon : icons[index].icon}
                style={[styles.bottomTabIcon, {}]}
                resizeMode="contain"
              />
              <Animated.Text style={[styles.bottomTabLabel]}>
                {icons[index].label}
              </Animated.Text>
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    width: 28,
    height: 28,
  },

  bottomTabContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
  },

  buttonWrapper: {
    flex: 1,
    backgroundColor: theme.primary,
    height: '100%',
    paddingTop: 10,
    alignItems: 'center',
  },

  bottomTabIcon: {
    width: 20,
    height: 20,
  },

  bottomTabLabel: {
    marginTop: 3,
    color: theme.white,
  },
});
