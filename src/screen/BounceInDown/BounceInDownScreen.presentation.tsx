import React from 'react';
import { BounceInDown } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceInDownScreenPresentationProps } from '.';

export const BounceInDownScreenPresentation: React.FC<IBounceInDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceInDown delayInMS={1000}>
          <Logo />
        </BounceInDown>
      </Container>
    );
  };
