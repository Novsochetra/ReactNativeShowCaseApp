import React from 'react';
import { ZoomInDown } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IZoomInDownScreenPresentationProps } from '.';

export const ZoomInDownScreenPresentation: React.FC<IZoomInDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomInDown delayInMS={1000}>
          <Logo />
        </ZoomInDown>
      </Container>
    );
  };
