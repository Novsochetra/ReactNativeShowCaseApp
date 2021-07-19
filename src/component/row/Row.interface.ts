import { ColorValue, FlexStyle } from 'react-native';

export type IRowProps = {
  padding?: number;
  backgroundColor?: ColorValue;
  mainAxisAlignment?: FlexStyle['justifyContent'];
  crossAxisAlignment?: FlexStyle['alignItems'];
};
