import React from 'react';
import { SlideInRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ISlideInRightScreenPresentationProps } from '.';

export const SlideInRightScreenPresentation: React.FC<ISlideInRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <SlideInRight delayInMS={1000}>
          <Logo />
        </SlideInRight>
      </Container>
    );
  };
