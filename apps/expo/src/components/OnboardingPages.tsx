import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dimensions, View, Image, Text } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, } from 'react-native-reanimated';
import type { OnboardingPagesDataInterface } from '~/utils/onboardingData';

interface Props {
    page: OnboardingPagesDataInterface
    translateX: Animated.SharedValue<number>
    index: number
}

const { width: PageWidth, height: PageHeight } = Dimensions.get('window');
const CircleWidth = PageWidth * 0.7


const Page: React.FC<Props> = ({ page, translateX, index }) => {
    const inputRange = [
        (index - 1) * PageWidth,
        index * PageWidth,
        (index + 1) * PageWidth,
    ]
    const reanimatedCircleStyle = useAnimatedStyle(() => {

        const scale = interpolate(translateX.value, inputRange, [0.35, 1.25, 0.35], Extrapolate.CLAMP)

        return {
            transform: [{ scale: scale }]
        }
    });
    const reanimatedImageStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateX.value,
            inputRange,
            [0.25, 1, 0.25],
            Extrapolate.CLAMP
        );
        const scale = interpolate(translateX.value, inputRange, [0, 1, 0], Extrapolate.CLAMP)
        return {
            opacity: opacity,
            transform: [{
                scale
            }]
        }
    })
    const reanimatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateX.value,
            inputRange,
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
        );
        const scale = interpolate(translateX.value, inputRange, [0.25, 1.125, 0.25], Extrapolate.CLAMP)


        return {
            opacity: opacity,
            transform: [{
                scale
            }]
        }
    })
    return (
        <View
            style={{
                width: PageWidth,
                height: PageHeight
            }}
            className='items-center justify-center flex px-12'
        >
            <View style={{ aspectRatio: 1, width: CircleWidth }} className='flex items-center justify-center mb-36'>
                <Animated.View
                    style={[
                        reanimatedCircleStyle,
                        { borderRadius: CircleWidth / 2, aspectRatio: 1 }
                    ]}
                    className={'w-full h-full bg-leadistroBrown'}
                />
                <Animated.Image
                    source={page.source}
                    resizeMode={'contain'}
                    style={[
                        reanimatedImageStyle,
                        {
                            aspectRatio: 1,
                            position: 'absolute',
                            height: PageHeight * .33
                        }
                    ]}
                />
            </View>
            <Animated.View style={reanimatedTextStyle}>
                <Text className="text-center mb-3 text-leadistroWhite font-bold text-3xl">
                    {page.title}
                </Text>
                <Text className="text-center mb-3 text-leadistroWhite font-bold text-base">
                    {page.description}
                </Text>
            </Animated.View>
        </View>
    )
}
export default Page