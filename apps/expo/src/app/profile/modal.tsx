import { View, Text, TouchableOpacity, type GestureResponderEvent } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';

interface RadioDataTypes {
    packageType: string;
    price: string;
    checked: number;
    per: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Radio = () => {
    const [checked, setChecked] = React.useState(0);
    const radioData = [{
        packageType: "Freemium",
        price: "$ 0",
        per: "/month",
    }, {
        packageType: "Monthly",
        price: "$ 19.99",
        per: "/month",
    },
    {
        packageType: "Anually",
        price: "$ 284",
        per: "/yearly",
    }];
    return (
        <View>
            <View >
                {radioData.map((val, key) => {
                    return (
                        <View className='w-full' key={val.packageType}>
                            {checked == key ? (
                                <TouchableOpacity className={checked == key ? 'border-leadistroRed border-2'
                                    : 'border-leadistroWhite/50 border-2'
                                } >
                                    <View className="w-full  rounded-xl mt-5 self-center flex flex-col items-center justify-center px-4 py-3">
                                        <View className="flex flex-row justify-between w-full item-center">
                                            <Text className='text-xl font-bold text-leadistroRed'>{val.packageType}</Text>
                                            <Ionicons name='ios-radio-button-on-outline' size={24} color="#ff9580" />
                                        </View>
                                        <Text className='font-bold w-full text-leadistroWhite text-xl'>{val.price} <Text className='font-light text-lg'>{val.per}</Text></Text>
                                    </View>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    className='w-full'
                                    onPress={() => {
                                        setChecked(key);
                                    }}
                                >
                                    <View className="w-full  rounded-xl mt-5 self-center flex flex-col items-center justify-center px-4 py-3">
                                        <View className="flex flex-row justify-between w-full item-center">
                                            <Text className='text-xl font-bold text-leadistroRed'>{val.packageType}</Text>
                                            <Ionicons name='ios-radio-button-on-outline' size={24} color="#ff9580" />
                                        </View>
                                        <Text className='font-bold w-full text-leadistroWhite text-xl'>{val.price} <Text className='font-light text-lg'>{val.per}</Text></Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    );
                })}
            </View>
            {/* <Text>{val[checked]}</Text> */}
        </View>
    );
};

const SubscriptionRadioTag: React.FC<RadioDataTypes> = ({ packageType, price, per, onPress, checked }) => {
    return (
        <TouchableOpacity key={checked} className='w-full' onPress={onPress}>
            <View className={`${checked
                ? 'border-leadistroRed border-2'
                : 'border-leadistroWhite/50 border-2'
                } w-full  rounded-xl mt-5 self-center flex flex-col items-center justify-center px-4 py-3`}>
                <View className="flex flex-row justify-between w-full item-center">
                    <Text className='text-xl font-bold text-leadistroRed'>{packageType}</Text>
                    <Ionicons name={checked ? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline'} size={24} color="#ff9580" />
                </View>
                <Text className='font-bold w-full text-leadistroWhite text-xl'>{price} <Text className='font-light text-lg'>{per}</Text></Text>
            </View>
        </TouchableOpacity>
    )
}

const SubModal = () => {
    const inset = useSafeAreaInsets()
    // const pathName = usePathname()
    // console.log(pathName)
    const navigation = useNavigation();
    // If the page was reloaded or navigated to directly, then the modal should be presented as
    // a full screen page. You may need to change the UI to account for this.
    // const radioData = [{
    //     packageType: "Freemium",
    //     price: "$ 0",
    //     per: "/month",

    // }, {
    //     packageType: "Monthly",
    //     price: "$ 19.99",
    //     per: "/month",
    // },
    // {
    //     packageType: "Anually",
    //     price: "$ 284",
    //     per: "/yearly",
    // }];
    // radioData.map((val,index) => {
    //     val
    // })
    const isPresented = navigation.canGoBack();
    const [selected, setSelected] = React.useState<number>(0)
    return (
        <View className='flex flex-col p-5 items-center bg-leadistroBlack justify-start w-full h-full'>
            <Feather onPress={() => navigation.goBack()} name='arrow-left' size={27} style={{ position: 'absolute', top: inset.top + 20, left: inset.left + 20 }} color={'#ff9580'} />
            <View style={{ position: 'absolute', top: inset.top + 60, left: inset.left + 20 }} className='py-4 px-3 w-full h-[90vh] gap-2 items-start justify-start flex flex-col'>
                <Text className='text-leadistroWhite tracking-wider text-3xl'>Choose a plan</Text>
                <Text className='text-leadistroWhite/60 tracking-wider text-xl mb-10'>Monthly or Anually ? it&apos;s your call.</Text>
                {/* Creating Radio Tabs map(free, monthy, anually) */}
                <Radio />
            </View>
        </View>
    )
}

export default SubModal