import { LayoutChangeEvent } from 'react-native';

export interface ITabItemContainerProps {
  title: string;
  onPress: () => void;
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
}

export interface ITabItemPresentationProps extends ITabItemContainerProps {}
