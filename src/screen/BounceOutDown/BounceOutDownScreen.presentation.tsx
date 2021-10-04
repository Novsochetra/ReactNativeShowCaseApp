import React from 'react';
import { BounceOutDown } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceOutDownScreenPresentationProps } from '.';

export const BounceOutDownScreenPresentation: React.FC<IBounceOutDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceOutDown delayInMS={1000}>
          <Logo />
        </BounceOutDown>
      </Container>
    );
  };
