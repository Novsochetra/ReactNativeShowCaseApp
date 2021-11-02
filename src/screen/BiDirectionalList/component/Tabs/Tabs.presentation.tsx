import { useTabSize } from '@screen/BiDirectionalList/hook/useTabSize';
import React, { forwardRef, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  LayoutChangeEvent,
} from 'react-native';
import { ITabsPresentationProps } from './';

export const TabsPresentation: React.FC<ITabsPresentationProps> = forwardRef(
  (props, ref) => {
    const [_, setTabSizes] = useTabSize();
    return (
      <ScrollView ref={ref} showsHorizontalScrollIndicator={false} horizontal>
        {props.data.map((title, index) => {
          return (
            <TabItem
              label={title}
              onLayout={({ nativeEvent: { layout } }) =>
                setTabSizes(index, {
                  width: layout.width,
                  height: layout.height,
                })
              }
            />
          );
        })}
      </ScrollView>
    );
  },
);

const TabItem = ({
  label,
  onLayout,
}: {
  label: string;
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
}) => {
  return (
    <View style={styles.tabItemContainer} onLayout={onLayout}>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
  },

  tabItemContainer: {
    backgroundColor: 'yellow',
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
