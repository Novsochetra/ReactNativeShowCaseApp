import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Reanimated from 'react-native-reanimated';
import { IControllButtonPresentationProps } from './';

export const ControllButtonPresentation: React.FC<IControllButtonPresentationProps> =
  ({ size, controllButtonStyle, onChangeSlide, dotStyle }) => {
    return (
      <ControllButtonContainer controllButtonStyle={controllButtonStyle}>
        {Array.from({ length: size }).map((_, index) => {
          return (
            <ControllButtonItem
              key={uuidv4()}
              value="1"
              onPress={() => onChangeSlide(index)}
            />
          );
        })}

        <Reanimated.View style={dotStyle} />
      </ControllButtonContainer>
    );
  };

const ControllButtonItem = ({
  onPress,
}: {
  value: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ControllButtonItemContainer />
    </TouchableOpacity>
  );
};

// Style Component
const ControllButtonContainer: React.FC<{ controllButtonStyle: any }> = ({
  children,
  controllButtonStyle,
}) => {
  return (
    <Reanimated.View
      style={[styles.controllButtonContainer, controllButtonStyle]}>
      {children}
    </Reanimated.View>
  );
};

const ControllButtonItemContainer: React.FC = ({ children }) => {
  return (
    <View style={styles.controllButtonItemContainer}>
      <View style={styles.ControllButtonItemWrapper}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  controllButtonContainer: {
    position: 'absolute',
    zIndex: 999,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },

  controllButtonItemContainer: {
    width: 20,
    height: 20,
    margin: 4,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ControllButtonItemWrapper: {
    backgroundColor: 'transparent',
    width: 16,
    height: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'white',
  },
});
