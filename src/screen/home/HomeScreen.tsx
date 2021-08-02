import React from 'react';
import { ScrollView, View } from 'react-native';
import { IHomeScreenProps } from './HomeScreen.interface';
import { ListItem } from '@component/list-item/ListItem';
import { theme } from '@core/asset/style/theme';
import { Divider } from '@component/divider/Divider';
import { Menus } from './data/Menu.data';

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <>
      <ScrollView style={{ backgroundColor: theme.backgroundColor }}>
        {Menus().map((menu, idx) => {
          return (
            <View key={`menu-item-home-screen-${idx}`}>
              <Divider />
              <ListItem {...menu} paddingHorizontal={8} />
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};
