import React from 'react';
import { Hinge } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IHingeScreenPresentationProps } from '.';

export const HingeScreenPresentation: React.FC<IHingeScreenPresentationProps> =
  () => {
    return (
      <Container>
        <Hinge delayInMS={1000}>
          <Logo />
        </Hinge>
      </Container>
    );
  };
