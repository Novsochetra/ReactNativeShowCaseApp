import { ColorValue, FlexStyle } from 'react-native';

export interface IListItemProps {
  leftLabel?: string;
  rightLabel?: string;

  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;

  margin?: number;
  marginHorizontal?: number;
  marginVertical?: number;

  backgroundColor?: ColorValue;
  mainAxisAlignment?: FlexStyle['justifyContent'];
  crossAxisAlignment?: FlexStyle['alignItems'];

  leftIcon?: () => React.ReactNode;
  rightIcon?: () => React.ReactNode;
  renderLeftItemComponent?: () => React.ReactNode;
  renderRightItemComponent?: () => React.ReactNode;
  onPress?: () => void;
}
