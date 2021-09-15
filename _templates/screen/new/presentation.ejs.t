---
to: src/screen/<%= name  %>/<%= name %>Screen.presentation.tsx
---

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { I<%= name %>ScreenPresentationProps } from '.';

export const <%= name %>ScreenPresentation: React.FC<I<%= name %>ScreenPresentationProps> = () => {
  return (
    <View>
      <Text>Component Generator</Text>
      <Text><%= name %></Text>
    </View>
  );
};

const styles = StyleSheet.create({});