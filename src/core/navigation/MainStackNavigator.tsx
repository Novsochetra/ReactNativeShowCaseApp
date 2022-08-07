import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IMainStackNavigatorParams } from './MainStackNavigator.interface';
import { defaultNavigationStack } from './navigationConfig';
import { HomeScreen } from '@screen/Home/HomeScreen';
import { BounceScreen } from '@screen/Bounce';
import { FlashScreen } from '@screen/Flash';
import { PulseScreen } from '@screen/Pulse';
import { RubberBandScreen } from '@screen/RubberBand';
import { ShakeXScreen } from '@screen/ShakeX';
import { ShakeYScreen } from '@screen/ShakeY';
import { SwingScreen } from '@screen/Swing';
import { TadaScreen } from '@screen/Tada';
import { WobbleScreen } from '@screen/Wobble';
import { JelloScreen } from '@screen/Jello';
import { HeartBeatScreen } from '@screen/HeartBeat';
import { BackInDownScreen } from '@screen/BackInDown';
import { BackInLeftScreen } from '@screen/BackInLeft';
import { BackInRightScreen } from '@screen/BackInRight';
import { BackInUpScreen } from '@screen/BackInUp';
import { BackOutDownScreen } from '@screen/BackOutDown';
import { BackOutLeftScreen } from '@screen/BackOutLeft';
import { BackOutRightScreen } from '@screen/BackOutRight';
import { BackOutUpScreen } from '@screen/BackOutUp';
import { BounceInScreen } from '@screen/BounceIn';
import { BounceInDownScreen } from '@screen/BounceInDown';
import { BounceInDownLeftScreen } from '@screen/BounceInDownLeft';
import { BounceInRightScreen } from '@screen/BounceInRight';
import { BounceInUpScreen } from '@screen/BounceInUp';
import { BounceOutScreen } from '@screen/BounceOut';
import { BounceOutDownScreen } from '@screen/BounceOutDown';
import { BounceOutLeftScreen } from '@screen/BounceOutLeft';
import { BounceOutRightScreen } from '@screen/BounceOutRight';
import { BounceOutUpScreen } from '@screen/BounceOutUp';
import { FadeInScreen } from '@screen/FadeIn';
import { FadeInDownScreen } from '@screen/FadeInDown';
import { FadeInUpScreen } from '@screen/FadeInUp';
import { FadeInLeftScreen } from '@screen/FadeInLeft';
import { FadeInRightScreen } from '@screen/FadeInRight';
import { FadeInTopLeftScreen } from '@screen/FadeInTopLeft';
import { FadeInTopRightScreen } from '@screen/FadeInTopRight';
import { FadeInBottomLeftScreen } from '@screen/FadeInBottomLeft';
import { FadeInBottomRightScreen } from '@screen/FadeInBottomRight';
import { FadeOutScreen } from '@screen/FadeOut';
import { FadeOutDownScreen } from '@screen/FadeOutDown';
import { FadeOutLeftScreen } from '@screen/FadeOutLeft';
import { FadeOutRightScreen } from '@screen/FadeOutRight';
import { FadeOutUpScreen } from '@screen/FadeOutUp';
import { FadeOutTopLeftScreen } from '@screen/FadeOutTopLeft';
import { FadeOutTopRightScreen } from '@screen/FadeOutTopRight';
import { FadeOutBottomLeftScreen } from '@screen/FadeOutBottomLeft';
import { FadeOutBottomRightScreen } from '@screen/FadeOutBottomRight';
import { FlipScreen } from '@screen/Flip';
import { FlipInXScreen } from '@screen/FlipInX';
import { FlipInYScreen } from '@screen/FlipInY';
import { FlipOutYScreen } from '@screen/FlipOutY';
import { FlipOutXScreen } from '@screen/FlipOutX';
import { LightSpeedInRightScreen } from '@screen/LightSpeedInRight';
import { LightSpeedInLeftScreen } from '@screen/LightSpeedInLeft';
import { LightSpeedOutLeftScreen } from '@screen/LightSpeedOutLeft';
import { LightSpeedOutRightScreen } from '@screen/LightSpeedOutRight';
import { RotateInScreen } from '@screen/RotateIn';
import { RotateInDownLeftScreen } from '@screen/RotateInDownLeft';
import { RotateInDownRightScreen } from '@screen/RotateInDownRight';
import { RotateInUpLeftScreen } from '@screen/RotateInUpLeft';
import { RotateInUpRightScreen } from '@screen/RotateInUpRight';
import { RotateOutScreen } from '@screen/RotateOut';
import { RotateOutDownLeftScreen } from '@screen/RotateOutDownLeft';
import { RotateOutDownRightScreen } from '@screen/RotateOutDownRight';
import { RotateOutUpLeftScreen } from '@screen/RotateOutUpLeft';
import { RotateOutUpRightScreen } from '@screen/RotateOutUpRight';
import { HingeScreen } from '@screen/Hinge';
import { JackInTheBoxScreen } from '@screen/JackInTheBox';
import { RollInScreen } from '@screen/RollIn';
import { RollOutScreen } from '@screen/RollOut';
import { ZoomInScreen } from '@screen/ZoomIn';
import { ZoomInDownScreen } from '@screen/ZoomInDown';
import { ZoomInLeftScreen } from '@screen/ZoomInLeft';
import { ZoomInRightScreen } from '@screen/ZoomInRight';
import { ZoomInUpScreen } from '@screen/ZoomInUp';
import { ZoomOutScreen } from '@screen/ZoomOut';
import { ZoomOutDownScreen } from '@screen/ZoomOutDown';
import { ZoomOutLeftScreen } from '@screen/ZoomOutLeft';
import { ZoomOutRightScreen } from '@screen/ZoomOutRight';
import { ZoomOutUpScreen } from '@screen/ZoomOutUp';
import { SlideInDownScreen } from '@screen/SlideInDown';
import { SlideInLeftScreen } from '@screen/SlideInLeft';
import { SlideInRightScreen } from '@screen/SlideInRight';
import { SlideInUpScreen } from '@screen/SlideInUp';
import { SlideOutDownScreen } from '@screen/SlideOutDown';
import { SlideOutLeftScreen } from '@screen/SlideOutLeft';
import { SlideOutRightScreen } from '@screen/SlideOutRight';
import { SlideOutUpScreen } from '@screen/SlideOutUp';
import { AppleNewsScreen } from '@screen/AppleNews';
import { AppleStockScreen } from '@screen/AppleStock';
import { BiDirectionalListScreen } from '@screen/BiDirectionalList';
import { ParallaxScrollScreen } from '@screen/ParallaxScroll';
import { ImageNetworkScreen } from '@screen/ImageNetwork';
import { BankAppScreen } from '@screen/BankApp/BankAppScreen';
import { LoadingScreen } from '@screen/Loading/LoadingScreen';

const Stack = createStackNavigator<IMainStackNavigatorParams>();

export const MainStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          ...defaultNavigationStack,
          detachPreviousScreen: !navigation.isFocused(),
        };
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />

      <Stack.Screen
        name="AppleNewsScreen"
        component={AppleNewsScreen}
        options={{ title: 'Apple News' }}
      />

      <Stack.Screen
        name="AppleStockScreen"
        component={AppleStockScreen}
        options={{ title: 'Apple Stock' }}
      />

      <Stack.Screen
        name="BankAppScreen"
        component={BankAppScreen}
        options={{ title: 'Bank App' }}
      />

      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ title: 'Loading' }}
      />

      <Stack.Screen
        name="BiDirectionalListScreen"
        component={BiDirectionalListScreen}
        options={{ title: 'Bi-Directional List' }}
      />

      <Stack.Screen
        name="ParallaxScrollScreen"
        component={ParallaxScrollScreen}
        options={{ title: 'Parralax Scroll Header' }}
      />

      <Stack.Screen
        name="ImageNetWorkScreen"
        component={ImageNetworkScreen}
        options={{ title: 'Image Network' }}
      />

      <Stack.Screen
        name="BounceScreen"
        component={BounceScreen}
        options={{ title: 'Bounce' }}
      />

      <Stack.Screen
        name="FlashScreen"
        component={FlashScreen}
        options={{ title: 'Flash ⚡️' }}
      />

      <Stack.Screen
        name="PulseScreen"
        component={PulseScreen}
        options={{ title: 'Pulse' }}
      />

      <Stack.Screen
        name="RubberBandScreen"
        component={RubberBandScreen}
        options={{ title: 'Rubber Band 🧼' }}
      />

      <Stack.Screen
        name="ShakeXScreen"
        component={ShakeXScreen}
        options={{ title: 'Shake X' }}
      />

      <Stack.Screen
        name="ShakeYScreen"
        component={ShakeYScreen}
        options={{ title: 'Shake Y' }}
      />

      <Stack.Screen
        name="SwingScreen"
        component={SwingScreen}
        options={{ title: 'Swing 🐤' }}
      />

      <Stack.Screen
        name="TadaScreen"
        component={TadaScreen}
        options={{ title: 'Tada 🛵' }}
      />

      <Stack.Screen
        name="WobbleScreen"
        component={WobbleScreen}
        options={{ title: 'Wobble ⚓️' }}
      />

      <Stack.Screen
        name="JelloScreen"
        component={JelloScreen}
        options={{ title: 'Jello' }}
      />

      <Stack.Screen
        name="HeartBeatScreen"
        component={HeartBeatScreen}
        options={{ title: 'Heart Beat' }}
      />

      <Stack.Screen
        name="BackInDownScreen"
        component={BackInDownScreen}
        options={{ title: 'BackInDown' }}
      />

      <Stack.Screen
        name="BackInLeftScreen"
        component={BackInLeftScreen}
        options={{ title: 'BackInLeft' }}
      />

      <Stack.Screen
        name="BackInRightScreen"
        component={BackInRightScreen}
        options={{ title: 'BackInRight' }}
      />

      <Stack.Screen
        name="BackInUpScreen"
        component={BackInUpScreen}
        options={{ title: 'BackInUp' }}
      />

      <Stack.Screen
        name="BackOutDownScreen"
        component={BackOutDownScreen}
        options={{ title: 'BackOutDown' }}
      />

      <Stack.Screen
        name="BackOutLeftScreen"
        component={BackOutLeftScreen}
        options={{ title: 'BackOutLeft' }}
      />

      <Stack.Screen
        name="BackOutRightScreen"
        component={BackOutRightScreen}
        options={{ title: 'BackOutRight' }}
      />

      <Stack.Screen
        name="BackOutUpScreen"
        component={BackOutUpScreen}
        options={{ title: 'BackOutUp' }}
      />

      <Stack.Screen
        name="BounceInScreen"
        component={BounceInScreen}
        options={{ title: 'BounceIn 🎾' }}
      />

      <Stack.Screen
        name="BounceInDownScreen"
        component={BounceInDownScreen}
        options={{ title: 'BounceInDown 🎾' }}
      />

      <Stack.Screen
        name="BounceInLeftScreen"
        component={BounceInDownLeftScreen}
        options={{ title: 'BounceInLeft 🎾' }}
      />

      <Stack.Screen
        name="BounceInRightScreen"
        component={BounceInRightScreen}
        options={{ title: 'BounceInRight 🎾' }}
      />

      <Stack.Screen
        name="BounceInUpScreen"
        component={BounceInUpScreen}
        options={{ title: 'BounceInUp 🎾' }}
      />

      <Stack.Screen
        name="BounceOutScreen"
        component={BounceOutScreen}
        options={{ title: 'BounceOut 🎾' }}
      />

      <Stack.Screen
        name="BounceOutDownScreen"
        component={BounceOutDownScreen}
        options={{ title: 'BounceOutDown 🎾' }}
      />

      <Stack.Screen
        name="BounceOutLeftScreen"
        component={BounceOutLeftScreen}
        options={{ title: 'BounceOutLeft 🎾' }}
      />

      <Stack.Screen
        name="BounceOutRightScreen"
        component={BounceOutRightScreen}
        options={{ title: 'BounceOutRight 🎾' }}
      />

      <Stack.Screen
        name="BounceOutUpScreen"
        component={BounceOutUpScreen}
        options={{ title: 'BounceOutUp 🎾' }}
      />

      <Stack.Screen
        name="FadeInScreen"
        component={FadeInScreen}
        options={{ title: 'FadeIn' }}
      />

      <Stack.Screen
        name="FadeInDownScreen"
        component={FadeInDownScreen}
        options={{ title: 'FadeInDown' }}
      />

      <Stack.Screen
        name="FadeInUpScreen"
        component={FadeInUpScreen}
        options={{ title: 'FadeInUp' }}
      />

      <Stack.Screen
        name="FadeInLeftScreen"
        component={FadeInLeftScreen}
        options={{ title: 'FadeInLeft' }}
      />

      <Stack.Screen
        name="FadeInRightScreen"
        component={FadeInRightScreen}
        options={{ title: 'FadeInRight' }}
      />

      <Stack.Screen
        name="FadeInTopLeftScreen"
        component={FadeInTopLeftScreen}
        options={{ title: 'FadeInTopLeft' }}
      />

      <Stack.Screen
        name="FadeInTopRightScreen"
        component={FadeInTopRightScreen}
        options={{ title: 'FadeInTopRight' }}
      />

      <Stack.Screen
        name="FadeInBottomLeftScreen"
        component={FadeInBottomLeftScreen}
        options={{ title: 'FadeInBottomLeft' }}
      />

      <Stack.Screen
        name="FadeInBottomRightScreen"
        component={FadeInBottomRightScreen}
        options={{ title: 'FadeInBottomRight' }}
      />

      <Stack.Screen
        name="FadeOutScreen"
        component={FadeOutScreen}
        options={{ title: 'FadeOut' }}
      />

      <Stack.Screen
        name="FadeOutDownScreen"
        component={FadeOutDownScreen}
        options={{ title: 'FadeOutDown' }}
      />

      <Stack.Screen
        name="FadeOutLeftScreen"
        component={FadeOutLeftScreen}
        options={{ title: 'FadeOutLeft' }}
      />

      <Stack.Screen
        name="FadeOutRightScreen"
        component={FadeOutRightScreen}
        options={{ title: 'FadeOutRight' }}
      />

      <Stack.Screen
        name="FadeOutUpScreen"
        component={FadeOutUpScreen}
        options={{ title: 'FadeOutUp' }}
      />

      <Stack.Screen
        name="FadeOutTopLeftScreen"
        component={FadeOutTopLeftScreen}
        options={{ title: 'FadeOutTopLeft' }}
      />

      <Stack.Screen
        name="FadeOutTopRightScreen"
        component={FadeOutTopRightScreen}
        options={{ title: 'FadeOutTopRight' }}
      />

      <Stack.Screen
        name="FadeOutBottomLeftScreen"
        component={FadeOutBottomLeftScreen}
        options={{ title: 'FadeOutBottomLeft' }}
      />

      <Stack.Screen
        name="FadeOutBottomRightScreen"
        component={FadeOutBottomRightScreen}
        options={{ title: 'FadeOutBottomRight' }}
      />

      <Stack.Screen
        name="FlipScreen"
        component={FlipScreen}
        options={{ title: 'Flip' }}
      />

      <Stack.Screen
        name="FlipInXScreen"
        component={FlipInXScreen}
        options={{ title: 'FlipInX' }}
      />

      <Stack.Screen
        name="FlipInYScreen"
        component={FlipInYScreen}
        options={{ title: 'FlipInY' }}
      />

      <Stack.Screen
        name="FlipOutYScreen"
        component={FlipOutYScreen}
        options={{ title: 'FlipOutY' }}
      />

      <Stack.Screen
        name="FlipOutXScreen"
        component={FlipOutXScreen}
        options={{ title: 'FlipOutX' }}
      />

      <Stack.Screen
        name="LightSpeedInRightScreen"
        component={LightSpeedInRightScreen}
        options={{ title: 'LightSpeedInRight 🌦' }}
      />

      <Stack.Screen
        name="LightSpeedInLeftScreen"
        component={LightSpeedInLeftScreen}
        options={{ title: 'LightSpeedInLeft 🌦' }}
      />

      <Stack.Screen
        name="LightSpeedOutLeftScreen"
        component={LightSpeedOutLeftScreen}
        options={{ title: 'LightSpeedOutLeft 🌦' }}
      />

      <Stack.Screen
        name="LightSpeedOutRightScreen"
        component={LightSpeedOutRightScreen}
        options={{ title: 'LightSpeedOutRight 🌦' }}
      />

      <Stack.Screen
        name="RotateInScreen"
        component={RotateInScreen}
        options={{ title: 'RotateIn ♻️' }}
      />

      <Stack.Screen
        name="RotateInDownLeftScreen"
        component={RotateInDownLeftScreen}
        options={{ title: 'RotateInDownLeft ♻️' }}
      />

      <Stack.Screen
        name="RotateInDownRightScreen"
        component={RotateInDownRightScreen}
        options={{ title: 'RotateInDownRight ♻️' }}
      />

      <Stack.Screen
        name="RotateInUpLeftScreen"
        component={RotateInUpLeftScreen}
        options={{ title: 'RotateInUpLeft ♻️' }}
      />

      <Stack.Screen
        name="RotateInUpRightScreen"
        component={RotateInUpRightScreen}
        options={{ title: 'RotateInUpRight ♻️' }}
      />

      <Stack.Screen
        name="RotateOutScreen"
        component={RotateOutScreen}
        options={{ title: 'RotateOut ♻️' }}
      />

      <Stack.Screen
        name="RotateOutDownLeftScreen"
        component={RotateOutDownLeftScreen}
        options={{ title: 'RotateOutDownLeft ♻️' }}
      />

      <Stack.Screen
        name="RotateOutDownRightScreen"
        component={RotateOutDownRightScreen}
        options={{ title: 'RotateOutDownRight ♻️' }}
      />

      <Stack.Screen
        name="RotateOutUpLeftScreen"
        component={RotateOutUpLeftScreen}
        options={{ title: 'RotateOutUpLeft ♻️' }}
      />

      <Stack.Screen
        name="RotateOutUpRightScreen"
        component={RotateOutUpRightScreen}
        options={{ title: 'RotateOutUpRight ♻️' }}
      />

      <Stack.Screen
        name="HingeScreen"
        component={HingeScreen}
        options={{ title: 'Hinge' }}
      />

      <Stack.Screen
        name="JackInTheBoxScreen"
        component={JackInTheBoxScreen}
        options={{ title: 'JackInTheBox' }}
      />

      <Stack.Screen
        name="RollInScreen"
        component={RollInScreen}
        options={{ title: 'RollIn' }}
      />

      <Stack.Screen
        name="RollOutScreen"
        component={RollOutScreen}
        options={{ title: 'RollOut' }}
      />

      <Stack.Screen
        name="ZoomInScreen"
        component={ZoomInScreen}
        options={{ title: 'ZoomIn' }}
      />

      <Stack.Screen
        name="ZoomInDownScreen"
        component={ZoomInDownScreen}
        options={{ title: 'ZoomInDown' }}
      />

      <Stack.Screen
        name="ZoomInLeftScreen"
        component={ZoomInLeftScreen}
        options={{ title: 'ZoomInLeft' }}
      />

      <Stack.Screen
        name="ZoomInRightScreen"
        component={ZoomInRightScreen}
        options={{ title: 'ZoomInRight' }}
      />

      <Stack.Screen
        name="ZoomInUpScreen"
        component={ZoomInUpScreen}
        options={{ title: 'ZoomInUp' }}
      />

      <Stack.Screen
        name="ZoomOutScreen"
        component={ZoomOutScreen}
        options={{ title: 'ZoomOut' }}
      />

      <Stack.Screen
        name="ZoomOutDownScreen"
        component={ZoomOutDownScreen}
        options={{ title: 'ZoomOutDown' }}
      />

      <Stack.Screen
        name="ZoomOutLeftScreen"
        component={ZoomOutLeftScreen}
        options={{ title: 'ZoomOutLeft' }}
      />

      <Stack.Screen
        name="ZoomOutRightScreen"
        component={ZoomOutRightScreen}
        options={{ title: 'ZoomOutRight' }}
      />

      <Stack.Screen
        name="ZoomOutUpScreen"
        component={ZoomOutUpScreen}
        options={{ title: 'ZoomOutUp' }}
      />

      <Stack.Screen
        name="SlideInDownScreen"
        component={SlideInDownScreen}
        options={{ title: 'SlideInDown' }}
      />

      <Stack.Screen
        name="SlideInLeftScreen"
        component={SlideInLeftScreen}
        options={{ title: 'SlideInLeft' }}
      />

      <Stack.Screen
        name="SlideInRightScreen"
        component={SlideInRightScreen}
        options={{ title: 'SlideInRight' }}
      />

      <Stack.Screen
        name="SlideInUpScreen"
        component={SlideInUpScreen}
        options={{ title: 'SlideInUp' }}
      />

      <Stack.Screen
        name="SlideOutDownScreen"
        component={SlideOutDownScreen}
        options={{ title: 'SlideOutDown' }}
      />

      <Stack.Screen
        name="SlideOutLeftScreen"
        component={SlideOutLeftScreen}
        options={{ title: 'SlideOutLeft' }}
      />

      <Stack.Screen
        name="SlideOutRightScreen"
        component={SlideOutRightScreen}
        options={{ title: 'SlideOutRight' }}
      />

      <Stack.Screen
        name="SlideOutUpScreen"
        component={SlideOutUpScreen}
        options={{ title: 'SlideOutUp' }}
      />
    </Stack.Navigator>
  );
};
