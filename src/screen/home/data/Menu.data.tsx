import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { IListItemProps } from '@component/list-item/ListItem.interface';
import { assets } from '@core/asset';
import { useNavigation } from '@react-navigation/native';
import { IMainStackNavigatorParams } from '@core/navigation/MainStackNavigator.interface';
import { StackNavigationProp } from '@react-navigation/stack';

export const Menus: () => Array<IListItemProps> = () => {
  const navigation =
    useNavigation<StackNavigationProp<IMainStackNavigatorParams>>();

  return [
    {
      leftLabel: 'Row',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('RowScreen'),
    },

    {
      leftLabel: 'Column',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('ColumnScreen'),
    },

    {
      leftLabel: 'Error Boundary',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('ErrorBoundaryScreen'),
    },

    {
      leftLabel: 'Custom Switch',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('CustomSwitchScreen'),
    },

    {
      leftLabel: 'Collapsible',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('CollapsibleScreen'),
    },

    {
      leftLabel: 'Versioning React Native',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('VersioningReactNativeScreen'),
    },

    {
      leftLabel: 'Scrollable Header',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('ScrollableHeaderScreen'),
    },

    {
      leftLabel: 'Google Chrome Tab',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('GoogleChromeTabScreen'),
    },

    {
      leftLabel: 'FadeIn',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('FadeIn'),
    },
  ];
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});
