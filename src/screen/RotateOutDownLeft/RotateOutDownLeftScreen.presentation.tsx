import React from 'react';
import { RotateOutDownLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRotateOutDownLeftScreenPresentationProps } from '.';

export const RotateOutDownLeftScreenPresentation: React.FC<IRotateOutDownLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateOutDownLeft delayInMS={1000}>
          <Logo />
        </RotateOutDownLeft>
      </Container>
    );
  };
