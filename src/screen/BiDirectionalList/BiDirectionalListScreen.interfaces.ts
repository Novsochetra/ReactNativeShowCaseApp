import Reanimated from 'react-native-reanimated';

export interface IBiDirectionalListScreenContainerProps {}

export interface IBiDirectionalListScreenPresentationProps {
  scrollY: Reanimated.SharedValue<number>;
  // TODO: update the type any
  onScroll: any;
  indicatorStyle: any;
  onPressTabItem: (index: number) => void;
  onSetTabSizes: (value: any) => void;
}
