import React from 'react';
import { FadeOutBottomRight } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeOutBottomRightScreenPresentationProps } from '.';

export const FadeOutBottomRightScreenPresentation: React.FC<IFadeOutBottomRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeOutBottomRight delayInMS={1000}>
          <Logo />
        </FadeOutBottomRight>
      </Container>
    );
  };
