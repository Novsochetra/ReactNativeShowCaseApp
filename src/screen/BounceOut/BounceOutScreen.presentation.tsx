import React from 'react';
import { BounceOut } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceOutScreenPresentationProps } from '.';

export const BounceOutScreenPresentation: React.FC<IBounceOutScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceOut delayInMS={1000}>
          <Logo />
        </BounceOut>
      </Container>
    );
  };
