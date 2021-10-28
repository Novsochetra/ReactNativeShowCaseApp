import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import React from 'react';
import { Wobble } from '@core/lib/animated-css';
import { IWobbleScreenPresentationProps } from '.';

export const WobbleScreenPresentation: React.FC<IWobbleScreenPresentationProps> =
  () => {
    return (
      <Container>
        <Wobble delayInMS={1000}>
          <Logo />
        </Wobble>
      </Container>
    );
  };
