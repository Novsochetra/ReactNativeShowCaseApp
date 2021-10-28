import React from 'react';
import { FadeOutTopRight } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeOutTopRightScreenPresentationProps } from '.';

export const FadeOutTopRightScreenPresentation: React.FC<IFadeOutTopRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeOutTopRight delayInMS={1000}>
          <Logo />
        </FadeOutTopRight>
      </Container>
    );
  };
