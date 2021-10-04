import React from 'react';
import { BounceIn } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceInScreenPresentationProps } from '.';

export const BounceInScreenPresentation: React.FC<IBounceInScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceIn delayInMS={1000}>
          <Logo />
        </BounceIn>
      </Container>
    );
  };
