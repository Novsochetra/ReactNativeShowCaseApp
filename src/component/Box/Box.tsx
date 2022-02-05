import React from 'react';
import { FlexStyle, ShadowStyleIOS, View, ViewStyle } from 'react-native';
import { BoxSizing } from '@component/Column/Column';

interface ShadowAndroid {
  // TODO: need to implement shadow props for easy passing
  elevation: ViewStyle['elevation'];
}

interface IBox extends BoxSizing, ShadowStyleIOS, ShadowAndroid {
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  overflow?: ViewStyle['overflow'];

  borderWidth?: FlexStyle['borderWidth'];
  backgroundColor?: ViewStyle['backgroundColor']; // TODO: maybe need to inherith from the pallete
  borderBottomColor?: ViewStyle['borderBottomColor'];
  borderBottomEndRadius?: ViewStyle['borderBottomEndRadius'];
  borderBottomLeftRadius?: ViewStyle['borderBottomLeftRadius'];
  borderBottomRightRadius?: ViewStyle['borderBottomRightRadius'];
  borderBottomStartRadius?: ViewStyle['borderBottomStartRadius'];
  borderBottomWidth?: ViewStyle['borderBottomWidth'];
  borderColor?: ViewStyle['borderColor'];
  borderEndColor?: ViewStyle['borderEndColor'];
  borderLeftColor?: ViewStyle['borderLeftColor'];
  borderLeftWidth?: ViewStyle['borderLeftWidth'];
  borderRadius?: ViewStyle['borderRadius'];
  borderRightColor?: ViewStyle['borderRightColor'];
  borderRightWidth?: ViewStyle['borderRightWidth'];
  borderStartColor?: ViewStyle['borderStartColor'];
  borderStyle?: ViewStyle['borderStyle'];
  borderTopColor?: ViewStyle['borderTopColor'];
  borderTopEndRadius?: ViewStyle['borderTopEndRadius'];
  borderTopLeftRadius?: ViewStyle['borderTopLeftRadius'];
  borderTopRightRadius?: ViewStyle['borderTopRightRadius'];
  borderTopStartRadius?: ViewStyle['borderTopStartRadius'];
  borderTopWidth?: ViewStyle['borderTopWidth'];
}

export const Box: React.FC<IBox> = ({ children, ...rest }) => {
  return <View style={[rest]}>{children}</View>;
};
