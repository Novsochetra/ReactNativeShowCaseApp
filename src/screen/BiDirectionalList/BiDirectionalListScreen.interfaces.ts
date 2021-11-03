import { Ref } from 'react';
import { ScrollView, SectionList } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBiDirectionalListScreenContainerProps {}

export type ItemRefs = {
  sectionRef: Ref<SectionList>;
  tabRef: Ref<ScrollView> | undefined;
};
export interface IBiDirectionalListScreenPresentationProps {
  refs: ItemRefs;
  scrollY: Reanimated.SharedValue<number>;
  // TODO: update the type any
  onScroll: any;
  indicatorStyle: any;
  onPressTabItem: (index: number) => void;
  onSetTabSizes: (params1: any, params2: any) => void;
}
