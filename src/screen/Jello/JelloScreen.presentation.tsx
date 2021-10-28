import React from 'react';
import { Jello } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IJelloScreenPresentationProps } from '.';

export const JelloScreenPresentation: React.FC<IJelloScreenPresentationProps> =
  () => {
    return (
      <Container>
        <Jello delayInMS={1000}>
          <Logo />
        </Jello>
      </Container>
    );
  };
