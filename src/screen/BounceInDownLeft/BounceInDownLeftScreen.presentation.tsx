import React from 'react';
import { BounceInLeft } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceInDownLeftScreenPresentationProps } from '.';

export const BounceInDownLeftScreenPresentation: React.FC<IBounceInDownLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceInLeft delayInMS={1000}>
          <Logo />
        </BounceInLeft>
      </Container>
    );
  };
