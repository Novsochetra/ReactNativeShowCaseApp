import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import React from 'react';
import { ZoomInUp } from '@core/lib/animated-css';
import { IZoomInUpScreenPresentationProps } from '.';

export const ZoomInUpScreenPresentation: React.FC<IZoomInUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomInUp delayInMS={1000}>
          <Logo />
        </ZoomInUp>
      </Container>
    );
  };
