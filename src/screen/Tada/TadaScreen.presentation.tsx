import React from 'react';
import { Tada } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ITadaScreenPresentationProps } from '.';

export const TadaScreenPresentation: React.FC<ITadaScreenPresentationProps> =
  () => {
    return (
      <Container>
        <Tada delayInMS={1000}>
          <Logo />
        </Tada>
      </Container>
    );
  };
