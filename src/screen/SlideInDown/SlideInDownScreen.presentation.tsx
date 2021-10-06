import React from 'react';
import { SlideInDown } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ISlideInDownScreenPresentationProps } from '.';

export const SlideInDownScreenPresentation: React.FC<ISlideInDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <SlideInDown delayInMS={1000}>
          <Logo />
        </SlideInDown>
      </Container>
    );
  };
