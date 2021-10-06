import React from 'react';
import { ZoomOutRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IZoomOutRightScreenPresentationProps } from '.';

export const ZoomOutRightScreenPresentation: React.FC<IZoomOutRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomOutRight delayInMS={1000}>
          <Logo />
        </ZoomOutRight>
      </Container>
    );
  };
