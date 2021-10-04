import React from 'react';
import { BackInDown } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBackInDownScreenPresentationProps } from '.';

export const BackInDownScreenPresentation: React.FC<IBackInDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BackInDown delayInMS={1000}>
          <Logo />
        </BackInDown>
      </Container>
    );
  };
