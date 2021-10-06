import React from 'react';
import { FadeInTopRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeInTopRightScreenPresentationProps } from '.';

export const FadeInTopRightScreenPresentation: React.FC<IFadeInTopRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeInTopRight delayInMS={1000}>
          <Logo />
        </FadeInTopRight>
      </Container>
    );
  };
