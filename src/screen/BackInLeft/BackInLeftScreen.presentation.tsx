import React from 'react';
import { BackInLeft } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBackInLeftScreenPresentationProps } from '.';

export const BackInLeftScreenPresentation: React.FC<IBackInLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BackInLeft delayInMS={1000}>
          <Logo />
        </BackInLeft>
      </Container>
    );
  };
