import { theme } from '@core/asset/style/theme';
import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { IListItemProps } from './ListItem.interface';

export const ListItem: React.FC<IListItemProps> = ({
  leftLabel,
  rightLabel,

  padding = 4,
  paddingHorizontal = 0,
  paddingVertical = 0,

  margin = 0,
  marginHorizontal = 0,
  marginVertical = 0,

  backgroundColor = 'hsl(0,0,100%)',
  mainAxisAlignment,
  crossAxisAlignment,

  renderLeftItemComponent,
  renderRightItemComponent,
  rightIcon,
  leftIcon,
  onPress,
}) => {
  let containerStyle = {
    padding,
    paddingHorizontal,
    paddingVertical,

    margin,
    marginHorizontal,
    marginVertical,

    backgroundColor,
    justifyContent: mainAxisAlignment,
    alignItems: crossAxisAlignment,
  };
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.itemContainer, containerStyle]}>
        {renderLeftItemComponent ? (
          renderLeftItemComponent?.()
        ) : (
          <View style={styles.itemWrapper}>
            {leftIcon?.()}
            {leftLabel && <Text style={styles.text}>{leftLabel}</Text>}
          </View>
        )}

        {renderRightItemComponent ? (
          renderRightItemComponent?.()
        ) : (
          <View style={styles.itemWrapper}>
            {rightLabel && <Text style={styles.text}>{rightLabel}</Text>}
            {rightIcon?.()}
          </View>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },

  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 14,
    color: theme.textColor,
  },
});
