import React from 'react';
import { RollOut } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRollOutScreenPresentationProps } from '.';

export const RollOutScreenPresentation: React.FC<IRollOutScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RollOut delayInMS={1000}>
          <Logo />
        </RollOut>
      </Container>
    );
  };
