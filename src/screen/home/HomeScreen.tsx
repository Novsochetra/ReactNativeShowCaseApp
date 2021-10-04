import React from 'react';
import { SectionList, View } from 'react-native';
import { IHomeScreenProps } from './HomeScreen.interface';
import { ListItem } from '@component/list-item/ListItem';
import { Divider } from '@component/divider/Divider';
import { MENUS } from './data/Menu.data';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { IMainStackNavigatorParams } from '@core/navigation/MainStackNavigator.interface';
import { Header } from './component/Header';
import { IListItemProps } from '@component/list-item/ListItem.interface';

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  const navigation =
    useNavigation<StackNavigationProp<IMainStackNavigatorParams>>();

  const renderItem = ({
    item,
    index,
  }: {
    item: IListItemProps & { screenName: keyof IMainStackNavigatorParams };
    index: number;
  }) => {
    return (
      <View key={`menu-item-home-screen-${index}`}>
        <ListItem
          {...item}
          onPress={() => {
            navigation.navigate(item.screenName);
          }}
          paddingHorizontal={8}
        />
      </View>
    );
  };

  return (
    <>
      <SectionList
        sections={MENUS}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
        renderSectionHeader={({ section: { title } }) => (
          <Header label={title} />
        )}
        stickySectionHeadersEnabled={true}
      />
    </>
  );
};
