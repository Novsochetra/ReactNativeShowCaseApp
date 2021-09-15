---
to: src/component/<%= name  %>/<%= name %>.presentation.tsx
---

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { I<%= name %>PresentationProps, Constant } from './';

export const <%= name %>Presentation: React.FC<I<%= name %>PresentationProps> = () => {
  return (
    <View>
      <Text>Component Generator</Text>
      <Text><%= name %></Text>
    </View>
  );
};

const styles = StyleSheet.create({});