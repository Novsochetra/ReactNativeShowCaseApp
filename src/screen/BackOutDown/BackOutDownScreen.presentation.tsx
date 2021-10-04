import React from 'react';
import { BackOutDown } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBackOutDownScreenPresentationProps } from '.';

export const BackOutDownScreenPresentation: React.FC<IBackOutDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BackOutDown delayInMS={1000}>
          <Logo />
        </BackOutDown>
      </Container>
    );
  };
