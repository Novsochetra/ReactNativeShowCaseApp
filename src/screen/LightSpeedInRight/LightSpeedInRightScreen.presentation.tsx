import React from 'react';
import { LightSpeedInRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ILightSpeedInRightScreenPresentationProps } from '.';

export const LightSpeedInRightScreenPresentation: React.FC<ILightSpeedInRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <LightSpeedInRight delayInMS={1000}>
          <Logo />
        </LightSpeedInRight>
      </Container>
    );
  };
