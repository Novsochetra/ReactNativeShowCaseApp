/* eslint-disable react-hooks/exhaustive-deps */
import { ImageNetwork } from '@component/ImageNetwork';
import { theme } from '@core/asset/style/theme';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IPlanIntroPresentationProps } from './';

export const PlanIntroPresentation: React.FC<IPlanIntroPresentationProps> = ({
  title,
  subTitle,
  description,
  icon,
  animatedDescriptionStyle,
  animatedTypingDescriptionStyle,
  animatedOverlayBoxStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, {}]}>
        <View>
          <ImageNetwork uri={icon} containerStyle={styles.image} />
        </View>
        <View style={[styles.titleWrapper, {}]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
      <View style={[styles.description]}>
        <Reanimated.Text
          style={[styles.descriptionText, animatedDescriptionStyle]}>
          {description}
        </Reanimated.Text>
        <Reanimated.View style={animatedTypingDescriptionStyle}>
          <Reanimated.Text style={[styles.descriptionText]}>
            One month since repotted
          </Reanimated.Text>
          <Reanimated.View
            style={[styles.overlaySubDescription, animatedOverlayBoxStyle]}
          />
        </Reanimated.View>

        <Ribbon />
      </View>
    </View>
  );
};

const Ribbon = () => {
  return <View style={styles.ribbon} />;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: theme.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  row: {
    flexDirection: 'row',
  },

  image: {
    borderRadius: 50,
    overflow: 'hidden',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: 'rgba(255,253,248,1)',
  },

  titleWrapper: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
    borderStyle: 'dashed',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.textColor,
  },

  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.textColor,
  },

  description: {
    marginTop: 16,
    borderColor: '#FFAB4C',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    minHeight: 120,
    backgroundColor: 'rgba(255,253,248,1)',
  },

  descriptionText: {
    fontWeight: 'bold',
    color: theme.textColor,
    opacity: 0.8,
    fontSize: 16,
  },

  overlaySubDescription: {
    position: 'absolute',
    backgroundColor: 'rgba(255,253,248,1)',
    width: '100%',
    height: '100%',
  },

  ribbon: {
    position: 'absolute',
    backgroundColor: '#FFAB4C',
    bottom: -1,
    right: -1,
    borderTopWidth: 16,
    borderLeftWidth: 16,
    borderRightWidth: 16,
    borderBottomWidth: 16,

    borderTopColor: '#FFAB4C',
    borderBottomColor: theme.white,
    borderLeftColor: '#FFAB4C',
    borderRightColor: theme.white,
    borderTopLeftRadius: 8,
  },
});
