import React from 'react';
import { RotateOutUpLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRotateOutUpLeftScreenPresentationProps } from '.';

export const RotateOutUpLeftScreenPresentation: React.FC<IRotateOutUpLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateOutUpLeft delayInMS={1000}>
          <Logo />
        </RotateOutUpLeft>
      </Container>
    );
  };
