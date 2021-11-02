import React, { forwardRef } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IProduct, ITabItem, Tabs, TAB_DATA, TAB_MENU } from './component/Tabs';
import { IBiDirectionalListScreenPresentationProps } from '.';

const AnimatedSectionList = Reanimated.createAnimatedComponent(SectionList);

export const BiDirectionalListScreenPresentation: React.FC<IBiDirectionalListScreenPresentationProps> =
  forwardRef((props, ref) => {
    return (
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <ScrollView
            ref={ref['tabRef']}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {TAB_MENU.map((title, index) => {
              return (
                <TouchableOpacity onPress={() => props.onPressTabItem(index)}>
                  <View
                    onLayout={({ nativeEvent: { layout } }) => {
                      props.onSetTabSizes(index, {
                        width: layout.width,
                        height: layout.height,
                      });
                    }}
                    style={{
                      paddingHorizontal: 32,
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>{title}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            <Reanimated.View style={props.indicatorStyle} />
          </ScrollView>
        </View>

        <AnimatedSectionList
          ref={ref['sectionRef']}
          onScroll={props.onScroll}
          sections={TAB_DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }: { item: IProduct; index: number }) => (
            <View
              style={{
                height: 100,
                paddingVertical: 8,
                paddingHorizontal: 16,
                flexDirection: 'row',
              }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.title}</Text>
                <Text>From {item.price}</Text>
              </View>

              <View>
                <Image
                  source={{
                    uri: item.productURL,
                  }}
                  style={{
                    borderRadius: 12,
                    height: '100%',
                    aspectRatio: 280 / 300,
                  }}
                />
              </View>
            </View>
          )}
          SectionSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: 'lightgray' }} />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: 'lightgray' }} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View
              style={{
                height: 100,
                paddingHorizontal: 16,
                justifyContent: 'center',
              }}>
              <Text style={styles.header}>{title}</Text>
            </View>
          )}
        />
      </View>
    );
  });

const TabIndicator = ({
  scrollY,
}: {
  scrollY: Reanimated.SharedValue<number>;
}) => {
  return <Reanimated.View style={{ height: 10, backgroundColor: 'red' }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    // color: 'white',
  },

  name: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
