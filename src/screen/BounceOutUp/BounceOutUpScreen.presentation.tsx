import React from 'react';
import { BounceOutUp } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceOutUpScreenPresentationProps } from '.';

export const BounceOutUpScreenPresentation: React.FC<IBounceOutUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceOutUp delayInMS={1000}>
          <Logo />
        </BounceOutUp>
      </Container>
    );
  };
