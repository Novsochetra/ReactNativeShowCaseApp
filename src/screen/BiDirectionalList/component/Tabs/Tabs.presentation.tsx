import React, { forwardRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TabItem } from '../TabItem';
import Reanimated from 'react-native-reanimated';
import { ITabsPresentationProps } from './';

export const TabsPresentation = forwardRef<ScrollView, ITabsPresentationProps>(
  (props, ref) => {
    console.log('DATA: ', props.data);

    return (
      <ScrollView ref={ref} showsHorizontalScrollIndicator={false} horizontal>
        {props.data?.map((title: any, index: number) => {
          return (
            <TabItem
              key={`tabitem-${index}`}
              onPress={() => props.onPressTabItem(index)}
              onLayout={({ nativeEvent: { layout } }) => {
                props.onSetTabSizes(index, {
                  width: layout.width,
                  height: layout.height,
                });
              }}
              title={title}
            />
          );
        })}
        <Reanimated.View style={[styles.scrollbar, props.indicatorStyle]} />
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  scrollbar: {
    position: 'absolute',
    bottom: 0,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'rgb(197,47,100)',
  },
});
