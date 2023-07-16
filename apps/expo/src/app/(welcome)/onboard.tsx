import { View, Dimensions, ScrollView, Text } from 'react-native'
import React from 'react'
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming
} from 'react-native-reanimated'
import { OnboardingPagesData } from '~/utils/onboardingData';
import Page from '~/components/OnboardingPages';
import { Feather } from '@expo/vector-icons';


const { width: PageWidth } = Dimensions.get('window');


interface DotProps {
    index: number,
    activeDotIndex?: Animated.SharedValue<number>,

}
// interface DotProps {
//     index: number,
//     activeDotIndex?: Animated.SharedValue<number>,

// }

const Dot: React.FC<DotProps> = ({ index, activeDotIndex }) => {
    const reanimatedDotStyle = useAnimatedStyle(() => {
        const isActive = activeDotIndex?.value === index;
        return {
            backgroundColor: withTiming(isActive ? '#fafafa' : '#ff958020', {
                duration: 150,
            }),
        }
    })
    return <Animated.View className='w-5 h-5 mx-2 rounded-full' style={reanimatedDotStyle} />
}


const Onboard: React.FC = () => {
    const translateX = useSharedValue(0)
    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            translateX.value = e.contentOffset.x
        }
    })
    const activeIndex = useDerivedValue(() => {
        return Math.round(translateX.value / PageWidth);
    });
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const onIconPress = React.useCallback(() => {

        if (activeIndex.value === OnboardingPagesData.length - 1) {
            console.log('Completed');
        }
        scrollRef.current?.scrollTo({ x: PageWidth * (activeIndex.value + 1) });
    }, []);
    return (
        <View className='bg-leadistroBlack flex items-center flex-col w-full h-full justify-center'>
            <Animated.ScrollView
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                onScroll={scrollHandler}
                ref={scrollRef}
                scrollEventThrottle={16}
                className={'flex flex-1'}
            >
                {OnboardingPagesData.map((page, index) => (
                    <Page key={index.toString()} page={page} translateX={translateX} index={index} />
                ))}
            </Animated.ScrollView>
            <View className='h-[50px] mb-5 flex flex-row'>
                <View className='flex flex-1 items-center justify-center flex-row'>
                    {OnboardingPagesData.map((_, index) => {
                        return (
                            <Dot
                                key={index.toString()}
                                index={index}
                                activeDotIndex={activeIndex}
                            />
                        );
                    })}
                </View>
                <View className='flex items-center justify-center flex-1'>
                    <Text className='uppercase text-leadistroWhite'>
                        leadistro
                    </Text>
                </View>
                <View className='flex items-center justify-center flex-1'>
                    <Feather
                        name='arrow-right'
                        size={24}
                        color={'#ff9580'}
                        onPress={onIconPress}
                    />
                </View>
            </View>
        </View>
    )
}

export default Onboard