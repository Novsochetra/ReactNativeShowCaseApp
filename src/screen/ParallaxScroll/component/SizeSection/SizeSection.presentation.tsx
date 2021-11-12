import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ColorValue,
} from 'react-native';
import { ISizeSectionPresentationProps } from '.';

export const SizeSectionPresentation: React.FC<ISizeSectionPresentationProps> =
  () => {
    return (
      <View style={styles.container}>
        <View style={styles.chooseSizeWrapper}>
          <Text style={styles.chooseSizeTitle}>Choose Size</Text>
        </View>

        <View style={styles.sizeItemWrapper}>
          <SizeItem title="4" borderColor="#C85C5C" />
          <SizeItem title="4.5" borderColor="#C85C5C" />
          <SizeItem title="5" borderColor="#C85C5C" />
        </View>
      </View>
    );
  };

const SizeItem = ({
  title,
  borderColor,
}: {
  title: string;
  borderColor: ColorValue;
}) => {
  return (
    <TouchableOpacity style={[styles.sizeItem, { borderColor }]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chooseSizeWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chooseSizeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  sizeItemWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
  },

  sizeItem: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderWidth: 2,
  },
});
