import React from 'react';
import { Bounce } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceScreenPresentationProps } from '.';

export const BounceScreenPresentation: React.FC<IBounceScreenPresentationProps> =
  () => {
    return (
      <Container>
        <Bounce delayInMS={1000}>
          <Logo />
        </Bounce>
      </Container>
    );
  };
