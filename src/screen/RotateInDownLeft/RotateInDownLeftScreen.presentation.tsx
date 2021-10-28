import React from 'react';
import { RotateInDownLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRotateInDownLeftScreenPresentationProps } from '.';

export const RotateInDownLeftScreenPresentation: React.FC<IRotateInDownLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateInDownLeft delayInMS={1000}>
          <Logo />
        </RotateInDownLeft>
      </Container>
    );
  };
