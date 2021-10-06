import React from 'react';
import { LightSpeedOutRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ILightSpeedOutRightScreenPresentationProps } from '.';

export const LightSpeedOutRightScreenPresentation: React.FC<ILightSpeedOutRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <LightSpeedOutRight delayInMS={1000}>
          <Logo />
        </LightSpeedOutRight>
      </Container>
    );
  };
