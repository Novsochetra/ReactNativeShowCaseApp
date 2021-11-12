import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { IColorSectionPresentationProps } from './';

export const ColorSectionPresentation: React.FC<IColorSectionPresentationProps> =
  () => {
    return (
      <View style={styles.container}>
        <View style={styles.chooseColorTitleWrapper}>
          <Text style={styles.chooseColorTitle}>Choose Color</Text>
        </View>

        <View style={styles.colorPickerWrapper}>
          <ColorPicker color="#C85C5C" />
          <ColorPicker color="#F9975D" />
          <ColorPicker color="#FBD148" />
          <ColorPicker color="#B2EA70" />
        </View>
      </View>
    );
  };

const ColorPicker = ({ color }: { color: string }) => {
  return (
    <TouchableOpacity
      style={[styles.colorPickerItemWrapper, { backgroundColor: color }]}>
      <View style={[styles.colorPickerItem, { backgroundColor: color }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 16,
    paddingVertical: 8,
  },

  chooseColorTitleWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  chooseColorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  colorPickerWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
  },

  colorPickerItemWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },

  colorPickerItem: {
    width: 46,
    height: 46,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
  },
});
