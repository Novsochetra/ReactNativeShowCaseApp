import React from 'react';
import { RotateInUpLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRotateInUpLeftScreenPresentationProps } from '.';

export const RotateInUpLeftScreenPresentation: React.FC<IRotateInUpLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateInUpLeft delayInMS={1000}>
          <Logo />
        </RotateInUpLeft>
      </Container>
    );
  };
