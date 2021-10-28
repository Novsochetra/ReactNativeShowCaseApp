import React from 'react';
import { RollIn } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRollInScreenPresentationProps } from '.';

export const RollInScreenPresentation: React.FC<IRollInScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RollIn delayInMS={1000}>
          <Logo />
        </RollIn>
      </Container>
    );
  };
