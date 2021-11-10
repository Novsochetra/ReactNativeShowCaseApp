import React, { forwardRef } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IParallaxScrollScreenPresentationProps } from '.';
import { Carousel } from './component/Carousel';

export const ParallaxScrollScreenPresentation = forwardRef<
  Reanimated.ScrollView,
  IParallaxScrollScreenPresentationProps
>(
  (
    {
      offsetY,
      animatedHeaderStyle,
      animatedScrollViewStyle,
      onScrollHandler,
      onScrollEndDrag,
      animatedControllStyle,
    },
    ref,
  ) => {
    return (
      <>
        <Reanimated.ScrollView
          ref={ref}
          // snapToOffsets={[150, 0]}
          // decelerationRate={0}
          onScroll={onScrollHandler}
          showsVerticalScrollIndicator={false}
          onScrollEndDrag={onScrollEndDrag}
          style={[animatedScrollViewStyle]}>
          <Carousel
            style={animatedHeaderStyle}
            animatedControllStyle={animatedControllStyle}
            offsetY={offsetY}
          />
          <View style={{ backgroundColor: '#EEEEEE' }}>
            <View
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 16,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    // fontFamily: 'SF-Mono',
                  }}>
                  Controll Ball
                </Text>
              </View>

              <View>
                <Text style={{ marginVertical: 4 }}>
                  The white grip camouflage ball is now available to pre-order.
                  The ball will be in stock later in October / early November.
                  You will be notified as soon as it's in stock and when it has
                  been shipped out.
                </Text>

                <Text style={{ marginVertical: 4 }}>
                  Please note that if your order includes more products they
                  will be shipped out together with the pre-ordered product when
                  it arrives in our warehouse. If you do want your other
                  products earlier you will have to place a separate order.
                </Text>

                <Text style={{ marginVertical: 4 }}>
                  The Grip camouflage ball is made out of rubber and has a good
                  grip and soft touch. The bumpy texture will prevent the ball
                  from slipping and will give you a perfect grip no matter the
                  conditions. It's a normal weight ball molded to make it
                  perfectly round. Practice your block tricks and get more
                  friction!
                </Text>
              </View>
            </View>

            <ColorSection />

            <SizeSection />

            <SellRecommendation />
          </View>
        </Reanimated.ScrollView>
      </>
    );
  },
);

const ColorSection = () => {
  return (
    <View
      style={{ backgroundColor: 'white', marginTop: 16, paddingVertical: 8 }}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Choose Color</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 8,
          paddingVertical: 8,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#C85C5C',
            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 8,
          }}>
          <View
            style={{
              backgroundColor: '#C85C5C',
              width: 46,
              height: 46,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 50,
            }}></View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#F9975D',
            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 8,
          }}>
          <View
            style={{
              backgroundColor: '#F9975D',
              width: 46,
              height: 46,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 50,
            }}></View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#FBD148',
            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 8,
          }}>
          <View
            style={{
              backgroundColor: '#FBD148',
              width: 46,
              height: 46,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 50,
            }}></View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#B2EA70',
            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 8,
          }}>
          <View
            style={{
              backgroundColor: '#B2EA70',
              width: 46,
              height: 46,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 50,
            }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SizeSection = () => {
  return (
    <View
      style={{ backgroundColor: 'white', marginTop: 16, paddingVertical: 8 }}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Choose Size</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 8,
          paddingVertical: 8,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            borderColor: '#C85C5C',
            width: 50,
            height: 50,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 8,
            borderWidth: 2,
          }}>
          <Text>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: '#C85C5C',
            width: 50,
            height: 50,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 8,
            borderWidth: 2,
          }}>
          <Text>4.5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: '#C85C5C',
            width: 50,
            height: 50,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 8,
            borderWidth: 2,
          }}>
          <Text>5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SellRecommendation = () => {
  return (
    <View
      style={{ marginTop: 16, backgroundColor: 'white', paddingVertical: 8 }}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Sell Recommendation
        </Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 8 }}>
        <Image
          source={{
            uri: 'https://static.wixstatic.com/media/231769_f6ba176af0664f92bd6c27216e399e22~mv2.jpg/v1/fill/w_796,h_994,al_c,q_85,usm_0.66_1.00_0.01/231769_f6ba176af0664f92bd6c27216e399e22~mv2.webp',
          }}
          style={{
            width: Dimensions.get('window').width / 2 - 24,
            height: Dimensions.get('window').width / 2 - 8,
            margin: 8,
            borderRadius: 8,
          }}
        />

        <Image
          source={{
            uri: 'https://static.wixstatic.com/media/231769_f6ba176af0664f92bd6c27216e399e22~mv2.jpg/v1/fill/w_796,h_994,al_c,q_85,usm_0.66_1.00_0.01/231769_f6ba176af0664f92bd6c27216e399e22~mv2.webp',
          }}
          style={{
            width: Dimensions.get('window').width / 2 - 24,
            height: Dimensions.get('window').width / 2 - 8,
            margin: 8,
            borderRadius: 8,
          }}
        />

        <Image
          source={{
            uri: 'https://static.wixstatic.com/media/231769_f6ba176af0664f92bd6c27216e399e22~mv2.jpg/v1/fill/w_796,h_994,al_c,q_85,usm_0.66_1.00_0.01/231769_f6ba176af0664f92bd6c27216e399e22~mv2.webp',
          }}
          style={{
            width: Dimensions.get('window').width / 2 - 24,
            height: Dimensions.get('window').width / 2 - 8,
            margin: 8,
            borderRadius: 8,
          }}
        />

        <Image
          source={{
            uri: 'https://static.wixstatic.com/media/231769_f6ba176af0664f92bd6c27216e399e22~mv2.jpg/v1/fill/w_796,h_994,al_c,q_85,usm_0.66_1.00_0.01/231769_f6ba176af0664f92bd6c27216e399e22~mv2.webp',
          }}
          style={{
            width: Dimensions.get('window').width / 2 - 24,
            height: Dimensions.get('window').width / 2 - 8,
            margin: 8,
            borderRadius: 8,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});
