import React from 'react';
import { RubberBand } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRubberBandScreenPresentationProps } from '.';

export const RubberBandScreenPresentation: React.FC<IRubberBandScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RubberBand delayInMS={1000}>
          <Logo />
        </RubberBand>
      </Container>
    );
  };
