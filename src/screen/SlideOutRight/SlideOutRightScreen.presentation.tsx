import React from 'react';
import { SlideOutRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ISlideOutRightScreenPresentationProps } from '.';

export const SlideOutRightScreenPresentation: React.FC<ISlideOutRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <SlideOutRight delayInMS={1000}>
          <Logo />
        </SlideOutRight>
      </Container>
    );
  };
