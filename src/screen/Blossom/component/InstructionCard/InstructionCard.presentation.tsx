/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IInstructionCardPresentationProps } from './';

export const InstructionCardPresentation: React.FC<IInstructionCardPresentationProps> =
  ({ title, description, containerStyle, onLayout }) => {
    return (
      <Reanimated.View
        style={[styles.container, containerStyle]}
        onLayout={onLayout}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Reanimated.View>
    );
  };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',

    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    //transform: [{ translateX: 100 }, { rotateZ: '90deg' }, { translateY: 200 }],
    transform: [{ translateY: 200 }, { rotateZ: '45deg' }, { translateY: 0 }],
  },

  headerWrapper: {
    marginBottom: 8,
  },

  title: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.15,
    color: '#99A799',
  },

  description: {
    fontSize: 16,
    color: '#AAA492',
  },
});
