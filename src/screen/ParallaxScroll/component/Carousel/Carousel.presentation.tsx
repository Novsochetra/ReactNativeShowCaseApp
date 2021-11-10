import React, { forwardRef } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ColorValue,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ICarouselPresentationProps } from '.';

export const CarouselPresentation = forwardRef<
  Reanimated.ScrollView,
  ICarouselPresentationProps
>(
  (
    {
      activeSlide,
      style,
      dotStyle,
      activeIndexCountStyle,
      onChangeSlide,
      onScrollHandler,
      controllButtonStyle,
    },
    ref,
  ) => {
    return (
      <Container>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
            position: 'absolute',
            bottom: 16,
            right: 16,
            zIndex: 999,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Reanimated.ScrollView
              ref={ref['scrollActiveCountRef']}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              pagingEnabled
              style={activeIndexCountStyle}>
              {Array.from({ length: 4 }).map((_, index) => (
                <View style={{ height: 20 }} key={`active-text-${index}`}>
                  <Text style={{ color: 'white' }}>{index + 1} </Text>
                </View>
              ))}
            </Reanimated.ScrollView>
            <View>
              <Text style={{ color: 'white' }}>/ 4</Text>
            </View>
          </View>
        </View>

        <Reanimated.ScrollView
          ref={ref['scrollRef']}
          onScroll={onScrollHandler}
          style={[style]}
          // decelerationRate={0.3}
          // scrollEventThrottle={8}
          horizontal
          pagingEnabled
          directionalLockEnabled
          onScrollAnimationEnd={() => {
            console.log('END');
          }}
          showsHorizontalScrollIndicator={false}>
          <CarouselItem
            url="https://static.wixstatic.com/media/231769_f6ba176af0664f92bd6c27216e399e22~mv2.jpg/v1/fill/w_796,h_994,al_c,q_85,usm_0.66_1.00_0.01/231769_f6ba176af0664f92bd6c27216e399e22~mv2.webp"
            backgroundColor="#C85C5C"
          />
          <CarouselItem
            url="https://static.wixstatic.com/media/231769_2d5d1be846d14f149a6eb59502eb1f0c~mv2_d_1537_1920_s_2.jpg/v1/fill/w_796,h_994,al_c,q_85,usm_0.66_1.00_0.01/231769_2d5d1be846d14f149a6eb59502eb1f0c~mv2_d_1537_1920_s_2.webp"
            backgroundColor="#F9975D"
          />
          <CarouselItem
            url="https://static.wixstatic.com/media/231769_b0d167ef9a944d9fa5e1d63c0b970f90~mv2.jpg/v1/fill/w_796,h_994,al_c,q_85,usm_0.66_1.00_0.01/231769_b0d167ef9a944d9fa5e1d63c0b970f90~mv2.webp"
            backgroundColor="#FBD148"
          />
          <CarouselItem
            url="https://static.wixstatic.com/media/231769_c68b89f597834afe8f0a0eb44d2e7e5e~mv2_d_1537_1920_s_2.jpg/v1/fill/w_796,h_994,al_c,q_85,usm_0.66_1.00_0.01/231769_c68b89f597834afe8f0a0eb44d2e7e5e~mv2_d_1537_1920_s_2.webp"
            backgroundColor="#B2EA70"
          />
        </Reanimated.ScrollView>

        <ControllButton
          onChangeSlide={onChangeSlide}
          controllButtonStyle={controllButtonStyle}
          dotStyle={dotStyle}
        />
      </Container>
    );
  },
);

const Container: React.FC = ({ children }) => {
  return <View style={{ alignItems: 'center' }}>{children}</View>;
};

const CarouselItem = ({
  url,
  backgroundColor,
}: {
  url: string;
  backgroundColor?: ColorValue;
}) => {
  return (
    <View style={[styles.carouselItemContainer, { backgroundColor }]}>
      <Image
        source={{
          uri: url,
        }}
        style={{ width: '100%', height: 300 }}
      />
    </View>
  );
};

const ControllButton = ({
  controllButtonStyle,
  onChangeSlide,
  dotStyle,
}: {
  dotStyle: any;
  controllButtonStyle: any;
  onChangeSlide: (index: number) => void;
}) => {
  return (
    <ControllButtonContainer controllButtonStyle={controllButtonStyle}>
      <ControllButtonItem value="1" onPress={() => onChangeSlide(0)} />
      <ControllButtonItem value="2" onPress={() => onChangeSlide(1)} />
      <ControllButtonItem value="3" onPress={() => onChangeSlide(2)} />
      <ControllButtonItem value="4" onPress={() => onChangeSlide(3)} />

      <Reanimated.View style={dotStyle} />
    </ControllButtonContainer>
  );
};

const ControllButtonItem = ({
  value,
  onPress,
}: {
  value: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ControllButtonItemContainer>
        {/* <Text>{value}</Text> */}
      </ControllButtonItemContainer>
    </TouchableOpacity>
  );
};

// Style Component
const ControllButtonContainer: React.FC = ({
  children,
  controllButtonStyle,
}) => {
  return (
    <Reanimated.View
      style={[styles.controllButtonContainer, controllButtonStyle]}>
      {children}
    </Reanimated.View>
  );
};

const ControllButtonItemContainer: React.FC = ({ children }) => {
  return (
    <View style={styles.controllButtonItemContainer}>
      <View
        style={{
          backgroundColor: 'transparent',
          width: 16,
          height: 16,
          borderRadius: 16,
          borderWidth: 2,
          borderColor: 'white',
        }}>
        {children}
      </View>
    </View>
  );
};

// End Style Component

const styles = StyleSheet.create({
  carouselItemContainer: {
    width: Dimensions.get('window').width,
    height: 300,
    backgroundColor: '#F9975D',
  },

  // controll button carousel
  controllButtonContainer: {
    position: 'absolute',
    zIndex: 999,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },

  controllButtonItemContainer: {
    width: 20,
    height: 20,
    margin: 4,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
