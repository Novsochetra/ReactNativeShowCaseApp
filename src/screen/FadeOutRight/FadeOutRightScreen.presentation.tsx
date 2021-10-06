import React from 'react';
import { FadeOutRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeOutRightScreenPresentationProps } from '.';

export const FadeOutRightScreenPresentation: React.FC<IFadeOutRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeOutRight delayInMS={1000}>
          <Logo />
        </FadeOutRight>
      </Container>
    );
  };
