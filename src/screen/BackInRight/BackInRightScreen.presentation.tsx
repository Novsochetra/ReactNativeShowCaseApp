import React from 'react';
import { BackInRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBackInRightScreenPresentationProps } from '.';

export const BackInRightScreenPresentation: React.FC<IBackInRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BackInRight delayInMS={1000}>
          <Logo />
        </BackInRight>
      </Container>
    );
  };
