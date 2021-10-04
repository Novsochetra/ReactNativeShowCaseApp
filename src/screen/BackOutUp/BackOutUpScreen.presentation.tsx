import React from 'react';
import { BackOutUp } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBackOutUpScreenPresentationProps } from '.';

export const BackOutUpScreenPresentation: React.FC<IBackOutUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BackOutUp delayInMS={1000}>
          <Logo />
        </BackOutUp>
      </Container>
    );
  };
