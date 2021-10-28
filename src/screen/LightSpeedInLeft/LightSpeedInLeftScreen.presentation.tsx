import React from 'react';
import { LightSpeedInLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ILightSpeedInLeftScreenPresentationProps } from '.';

export const LightSpeedInLeftScreenPresentation: React.FC<ILightSpeedInLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <LightSpeedInLeft delayInMS={1000}>
          <Logo />
        </LightSpeedInLeft>
      </Container>
    );
  };
