import React from 'react';
import { BackInUp } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBackInUpScreenPresentationProps } from '.';

export const BackInUpScreenPresentation: React.FC<IBackInUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BackInUp delayInMS={1000}>
          <Logo />
        </BackInUp>
      </Container>
    );
  };
