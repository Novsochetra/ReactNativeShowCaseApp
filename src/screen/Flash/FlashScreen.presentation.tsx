import React from 'react';
import {} from 'react-native';
import { Container } from '@component/container/Container';
import { Flash } from '@core/lib/animated-css';
import { Logo } from '@component/Logo';
import { IFlashScreenPresentationProps } from '.';

export const FlashScreenPresentation: React.FC<IFlashScreenPresentationProps> =
  () => {
    return (
      <Container>
        <Flash delayInMS={1000}>
          <Logo />
        </Flash>
      </Container>
    );
  };
