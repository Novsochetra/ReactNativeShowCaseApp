import React from 'react';
import { FlexStyle, StyleSheet, View } from 'react-native';

// TODO: Extract to appropriate folder
interface BoxSizing {
  margin?: FlexStyle['margin'];
  marginBottom?: FlexStyle['marginBottom'];
  marginEnd?: FlexStyle['marginEnd'];
  marginHorizontal?: FlexStyle['marginHorizontal'];
  marginLeft?: FlexStyle['marginLeft'];
  marginRight?: FlexStyle['marginRight'];
  marginStart?: FlexStyle['marginStart'];
  marginTop?: FlexStyle['marginTop'];
  marginVertical?: FlexStyle['marginBottom'];
  padding?: FlexStyle['padding'];
  paddingBottom?: FlexStyle['paddingBottom'];
  paddingEnd?: FlexStyle['paddingEnd'];
  paddingHorizontal?: FlexStyle['paddingHorizontal'];
  paddingLeft?: FlexStyle['paddingLeft'];
  paddingRight?: FlexStyle['paddingRight'];
  paddingStart?: FlexStyle['paddingStart'];
  paddingTop?: FlexStyle['paddingTop'];
  paddingVertical?: FlexStyle['paddingVertical'];
}

interface IRow extends BoxSizing {
  flex?: FlexStyle['flex'];
  grow?: FlexStyle['flexGrow'];
  wrap?: FlexStyle['flexWrap'];
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
  borderWidth?: FlexStyle['borderWidth'];
}
export const Row: React.FC<IRow> = ({
  children,
  flex,
  wrap,
  grow,
  ...rest
}) => {
  return (
    <View
      style={[
        styles.row,
        {
          flex,
          flexWrap: wrap,
          flexGrow: grow,
        },
        rest,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});
