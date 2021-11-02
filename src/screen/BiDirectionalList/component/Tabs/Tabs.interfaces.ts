import { Ref } from 'react';
import { ScrollView } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface ITabsContainerProps {
  scrollY: Reanimated.SharedValue<number>;
}

export interface ITabsPresentationProps {
  ref: Ref<ScrollView>;
  data: Array<ITabDataItem['title']>;
}

export type IProduct = { title: string; price: string; productURL: string };

export type ITabDataItem = {
  title: string;
  data: Array<IProduct>;
};
export type ITabData = Array<ITabDataItem>;

export type ITabItem = {
  id: number;
  label: string;
};
