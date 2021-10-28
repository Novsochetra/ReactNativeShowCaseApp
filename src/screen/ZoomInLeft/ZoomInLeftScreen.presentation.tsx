import React from 'react';
import { ZoomInLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IZoomInLeftScreenPresentationProps } from '.';

export const ZoomInLeftScreenPresentation: React.FC<IZoomInLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomInLeft delayInMS={1000}>
          <Logo />
        </ZoomInLeft>
      </Container>
    );
  };
