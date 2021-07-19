import { ColorValue, FlexStyle } from 'react-native';

export type IColumnProps = {
  padding?: number;
  backgroundColor?: ColorValue;
  mainAxisAlignment?: FlexStyle['justifyContent'];
  crossAxisAlignment?: FlexStyle['alignItems'];
};
