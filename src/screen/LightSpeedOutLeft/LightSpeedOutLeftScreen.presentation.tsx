import React from 'react';
import { LightSpeedOutLeft } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ILightSpeedOutLeftScreenPresentationProps } from '.';

export const LightSpeedOutLeftScreenPresentation: React.FC<ILightSpeedOutLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <LightSpeedOutLeft delayInMS={1000}>
          <Logo />
        </LightSpeedOutLeft>
      </Container>
    );
  };
