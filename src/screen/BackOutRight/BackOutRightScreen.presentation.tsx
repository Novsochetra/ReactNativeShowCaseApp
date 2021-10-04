import React from 'react';
import { BackOutRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBackOutRightScreenPresentationProps } from '.';

export const BackOutRightScreenPresentation: React.FC<IBackOutRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BackOutRight delayInMS={1000}>
          <Logo />
        </BackOutRight>
      </Container>
    );
  };
