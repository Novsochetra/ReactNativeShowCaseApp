import { IEasingPreset } from '../../core/animation/EasingPreset.interface';

export interface IFadeInContainerProps {
  delayInMS: number;
  durationInMS: number;
  preset: IEasingPreset;
}

export interface IFadeInPresentationProps {
  delayInMS: number;
  durationInMS: number;
}
