import React from 'react';
import { Pulse } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { IPulseScreenPresentationProps } from '.';
import { Logo } from '@component/Logo';

export const PulseScreenPresentation: React.FC<IPulseScreenPresentationProps> =
  () => {
    return (
      <Container>
        <Pulse delayInMS={1000}>
          <Logo />
        </Pulse>
      </Container>
    );
  };
