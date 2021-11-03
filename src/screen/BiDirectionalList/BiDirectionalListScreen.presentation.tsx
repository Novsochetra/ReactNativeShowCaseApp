import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IBiDirectionalListScreenPresentationProps } from '.';
import { ProductList } from './component/ProductList';
import { Tabs, TAB_DATA, TAB_MENU } from './component/Tabs';

export const BiDirectionalListScreenPresentation: React.FC<IBiDirectionalListScreenPresentationProps> =
  (props) => {
    return (
      <Container>
        <Tabs
          data={TAB_MENU}
          ref={props.refs.tabRef}
          onSetTabSizes={props.onSetTabSizes}
          indicatorStyle={props.indicatorStyle}
          onPressTabItem={props.onPressTabItem}
        />

        <ProductList
          ref={props.refs.sectionRef}
          data={TAB_DATA}
          onScroll={props.onScroll}
        />
      </Container>
    );
  };

const Container: React.FC<{}> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
