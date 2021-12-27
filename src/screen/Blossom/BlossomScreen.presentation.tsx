import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IBlossomScreenPresentationProps } from '.';
import { InstructionCard } from './component/InstructionCard';

export const BlossomScreenPresentation: React.FC<IBlossomScreenPresentationProps> =
  () => {
    return (
      <View style={styles.container}>
        <InstructionCard
          title="How to Grow"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
          rotateInRad={Math.PI / 4}
          delayAnimationInMS={200}
        />
        <InstructionCard
          title="How to Grow"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
          rotateInRad={Math.PI / 4}
          delayAnimationInMS={300}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 16,
    backgroundColor: 'white',
  },
});
