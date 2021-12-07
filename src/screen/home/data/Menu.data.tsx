import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { assets } from '@core/asset';
import { IMainStackNavigatorParams } from '@core/navigation/MainStackNavigator.interface';

const getMenuItem = (
  label: string,
  screenName: keyof IMainStackNavigatorParams,
) => ({
  leftLabel: label,
  screenName,
  leftIcon: () => <Image source={assets.icons.menu()} style={styles.icon} />,
  rightIcon: () => (
    <Image source={assets.icons.chevronRight()} style={styles.icon} />
  ),
  paddingVertical: 16,
  mainAxisAlignment: 'space-between',
});

const SHOW_CASE = {
  title: 'Show Case',
  data: [
    getMenuItem('Apple News', 'AppleNewsScreen'),
    getMenuItem('Apple Stock', 'AppleStockScreen'),
    getMenuItem('Bi Directional List', 'BiDirectionalListScreen'),
    getMenuItem('Parallax Scroll', 'ParallaxScrollScreen'),
    getMenuItem('Image Network', 'ImageNetWorkScreen'),
  ],
};

const ATTENTION_SEEKER = {
  title: 'Attention Seeker',
  data: [
    getMenuItem('Bounce', 'BounceScreen'),
    getMenuItem('Flash', 'FlashScreen'),
    getMenuItem('Pulse', 'PulseScreen'),
    getMenuItem('RubberBand', 'RubberBandScreen'),
    getMenuItem('ShakeX', 'ShakeXScreen'),
    getMenuItem('ShakeY', 'ShakeYScreen'),
    getMenuItem('Swing', 'SwingScreen'),
    getMenuItem('Tada', 'TadaScreen'),
    getMenuItem('Wobble', 'WobbleScreen'),
    getMenuItem('Jello', 'JelloScreen'),
    getMenuItem('HeartBeat', 'HeartBeatScreen'),
  ],
};

const BACK_ENTRANCE = {
  title: 'Back Entrance',
  data: [
    getMenuItem('BackInDown', 'BackInDownScreen'),
    getMenuItem('BackInLeft', 'BackInLeftScreen'),
    getMenuItem('BackInRight', 'BackInRightScreen'),
    getMenuItem('BackInUp', 'BackInUpScreen'),
  ],
};

const BACK_EXIT = {
  title: 'Back Exit',
  data: [
    getMenuItem('BackOutDown', 'BackOutDownScreen'),
    getMenuItem('BackOutLeft', 'BackOutLeftScreen'),
    getMenuItem('BackOutRight', 'BackOutRightScreen'),
    getMenuItem('BackOutUp', 'BackOutUpScreen'),
  ],
};

const BOUNCE_ENTRANCE = {
  title: 'Bounce Entrance',
  data: [
    getMenuItem('BounceIn', 'BounceInScreen'),
    getMenuItem('BounceInDown', 'BounceInDownScreen'),
    getMenuItem('BounceInLeft', 'BounceInLeftScreen'),
    getMenuItem('BounceInRight', 'BounceInRightScreen'),
    getMenuItem('BounceInUp', 'BounceInUpScreen'),
  ],
};

const BOUNCE_EXIT = {
  title: 'Bounce Exit',
  data: [
    getMenuItem('BounceOut', 'BounceOutScreen'),
    getMenuItem('BounceOutDown', 'BounceOutDownScreen'),
    getMenuItem('BounceOutLeft', 'BounceOutLeftScreen'),
    getMenuItem('BounceOutRight', 'BounceOutRightScreen'),
    getMenuItem('BounceOutUp', 'BounceOutUpScreen'),
  ],
};

const FADE_ENTRANCE = {
  title: 'Fade Entrance',
  data: [
    getMenuItem('FadeIn', 'FadeInScreen'),
    getMenuItem('FadeInDown', 'FadeInDownScreen'),
    getMenuItem('FadeInLeft', 'FadeInLeftScreen'),
    getMenuItem('FadeInRight', 'FadeInRightScreen'),
    getMenuItem('FadeInUp', 'FadeInUpScreen'),
    getMenuItem('FadeInTopLeft', 'FadeInTopLeftScreen'),
    getMenuItem('FadeInTopRight', 'FadeInTopRightScreen'),
    getMenuItem('FadeInBottomLeft', 'FadeInBottomLeftScreen'),
    getMenuItem('FadeInBottomRight', 'FadeInBottomRightScreen'),
  ],
};

const FADE_EXIT = {
  title: 'Fade Entrance',
  data: [
    getMenuItem('FadeOut', 'FadeOutScreen'),
    getMenuItem('FadeOutDown', 'FadeOutDownScreen'),
    getMenuItem('FadeOutLeft', 'FadeOutLeftScreen'),
    getMenuItem('FadeOutRight', 'FadeOutRightScreen'),
    getMenuItem('FadeOutUp', 'FadeOutUpScreen'),
    getMenuItem('FadeOutTopLeft', 'FadeOutTopLeftScreen'),
    getMenuItem('FadeOutTopRight', 'FadeOutTopRightScreen'),
    getMenuItem('FadeOutBottomLeft', 'FadeOutBottomLeftScreen'),
    getMenuItem('FadeOutBottomRight', 'FadeOutBottomRightScreen'),
  ],
};

const FLIPPER = {
  title: 'Flipper',
  data: [
    getMenuItem('Flip', 'FlipScreen'),
    getMenuItem('FlipInX', 'FlipInXScreen'),
    getMenuItem('FlipInY', 'FlipInYScreen'),
    getMenuItem('FlipOutX', 'FlipOutXScreen'),
    getMenuItem('FlipOutY', 'FlipOutYScreen'),
  ],
};

const LIGHT_SPEED = {
  title: 'Light Speed',
  data: [
    getMenuItem('LightSpeedInRight', 'LightSpeedInRightScreen'),
    getMenuItem('LightSpeedInLeft', 'LightSpeedInLeftScreen'),
    getMenuItem('LightSpeedOutRight', 'LightSpeedOutRightScreen'),
    getMenuItem('LightSpeedOutLeft', 'LightSpeedOutLeftScreen'),
  ],
};

const ROTATE_ENTRANCE = {
  title: 'Rotate Entrance',
  data: [
    getMenuItem('RotateIn', 'RotateInScreen'),
    getMenuItem('RotateInDownLeft', 'RotateInDownLeftScreen'),
    getMenuItem('RotateInDownRight', 'RotateInDownRightScreen'),
    getMenuItem('RotateInUpLeft', 'RotateInUpLeftScreen'),
    getMenuItem('RotateInUpRight', 'RotateInUpRightScreen'),
  ],
};

const ROTATE_EXIT = {
  title: 'Rotate Exit',
  data: [
    getMenuItem('RotateOut', 'RotateOutScreen'),
    getMenuItem('RotateOutDownLeft', 'RotateOutDownLeftScreen'),
    getMenuItem('RotateOutDownRight', 'RotateOutDownRightScreen'),
    getMenuItem('RotateOutUpLeft', 'RotateOutUpLeftScreen'),
    getMenuItem('RotateOutUpRight', 'RotateOutUpRightScreen'),
  ],
};

const SPECIAL = {
  title: 'Special',
  data: [
    getMenuItem('Hinge', 'HingeScreen'),
    getMenuItem('JackInTheBox', 'JackInTheBoxScreen'),
    getMenuItem('RollIn', 'RollInScreen'),
    getMenuItem('RollOut', 'RollOutScreen'),
  ],
};

const ZOOM_ENTRANCE = {
  title: 'Zoom Entrance',
  data: [
    getMenuItem('ZoomIn', 'ZoomInScreen'),
    getMenuItem('ZoomInDown', 'ZoomInDownScreen'),
    getMenuItem('ZoomInLeft', 'ZoomInLeftScreen'),
    getMenuItem('ZoomInRight', 'ZoomInRightScreen'),
    getMenuItem('ZoomInUp', 'ZoomInUpScreen'),
  ],
};

const ZOOM_EXIT = {
  title: 'Zoom Exit',
  data: [
    getMenuItem('ZoomOut', 'ZoomOutScreen'),
    getMenuItem('ZoomOutDown', 'ZoomOutDownScreen'),
    getMenuItem('ZoomOutLeft', 'ZoomOutLeftScreen'),
    getMenuItem('ZoomOutRight', 'ZoomOutRightScreen'),
    getMenuItem('ZoomOutUp', 'ZoomOutUpScreen'),
  ],
};

const SLIDE_ENTRANCE = {
  title: 'Slide Entrance',
  data: [
    getMenuItem('SlideInDown', 'SlideInDownScreen'),
    getMenuItem('SlideInLeft', 'SlideInLeftScreen'),
    getMenuItem('SlideInRight', 'SlideInRightScreen'),
    getMenuItem('SlideInUp', 'SlideInUpScreen'),
  ],
};

const SLIDE_EXIT = {
  title: 'Slide Exit',
  data: [
    getMenuItem('SlideOutDown', 'SlideOutDownScreen'),
    getMenuItem('SlideOutLeft', 'SlideOutLeftScreen'),
    getMenuItem('SlideOutRight', 'SlideOutRightScreen'),
    getMenuItem('SlideOutUp', 'SlideOutUpScreen'),
  ],
};

export const MENUS: Array<{
  title: string;
  data: Array<any>;
}> = [
  SHOW_CASE,
  ATTENTION_SEEKER,
  BACK_ENTRANCE,
  BACK_EXIT,
  BOUNCE_ENTRANCE,
  BOUNCE_EXIT,
  FADE_ENTRANCE,
  FADE_EXIT,
  FLIPPER,
  LIGHT_SPEED,
  ROTATE_ENTRANCE,
  ROTATE_EXIT,
  SPECIAL,
  ZOOM_ENTRANCE,
  ZOOM_EXIT,
  SLIDE_ENTRANCE,
  SLIDE_EXIT,
];

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});
