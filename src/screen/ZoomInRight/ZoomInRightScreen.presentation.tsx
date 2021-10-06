import React from 'react';
import { ZoomInRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { IZoomInRightScreenPresentationProps } from '.';
import { Logo } from '@component/Logo';

export const ZoomInRightScreenPresentation: React.FC<IZoomInRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomInRight delayInMS={1000}>
          <Logo />
        </ZoomInRight>
      </Container>
    );
  };
