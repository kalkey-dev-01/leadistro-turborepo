import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

// interface RadioDataTypes {
//     packageType: string;
//     price: string;
//     checked: number;
//     per: string;
//     onPress?: ((event: GestureResponderEvent) => void) | undefined;
// }
const radioData = [{
    packageType: "Free",
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
const paymentData = [
    {
        optionName: 'Google Pay'
    },
    {
        optionName: 'Apple Pay'
    },
];
const SubscriptionRadio = () => {
    const [checked, setChecked] = React.useState<number>(0);
    const [paymentOption, setPaymentOption] = React.useState(0);
    console.log(checked)
    return (
        <>
            <View className='w-full space-y-4'>
                {radioData.map((val, key) => {
                    return (
                        <View className='w-full' key={val.packageType}>
                            {checked == key ? (
                                <TouchableOpacity className="border-leadistroRed border-2 rounded-2xl" >
                                    <View className="w-full rounded-xl self-center flex flex-col items-center justify-center px-4 py-3">
                                        <View className="flex flex-row justify-between w-full item-center">
                                            <Text className='text-xl font-bold text-leadistroRed'>{val.packageType}</Text>
                                            <Text className='text-xs pt-1 font-light text-leadistroWhite/80'>Current Chosen Plan</Text>
                                            <Ionicons name='ios-radio-button-on-outline' size={24} color="#ff9580" />
                                        </View>
                                        <Text className='font-bold w-full text-leadistroWhite text-xl'>{val.price} <Text className='font-light text-lg'>{val.per}</Text></Text>
                                    </View>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    className='w-full border-leadistroWhite/50 border-2 rounded-2xl'
                                    onPress={() => {
                                        setChecked(key);
                                        console.log(val.packageType)
                                    }}
                                >
                                    <View className="w-full rounded-xl self-center flex flex-col items-center justify-center px-4 py-3">
                                        <View className="flex flex-row justify-between w-full item-center">
                                            <Text className='text-lg font-bold text-leadistroWhite/60'>{val.packageType}</Text>
                                            <Ionicons name='ios-radio-button-off-outline' size={24} color="#818181" />
                                        </View>
                                        <Text className='font-bold w-full text-leadistroWhite text-xl'>{val.price} <Text className='font-light text-lg'>{val.per}</Text></Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    );
                })}
            </View>
            {
                checked === 1
                    ||
                    checked === 2
                    ?
                    <View className='w-full mt-4'>
                        <Text className='text-2xl text-leadistroWhite my-3 px-0.5'>Payment Method</Text>
                        <View className='flex flex-col divide-y-4  divide-leadistroBlack items-center justify-center bg-leadistroBrown   rounded-2xl'>
                            <TouchableOpacity className='flex flex-row py-3 px-4 items-center justify-between w-full'>
                                <MaterialIcons name="payment" size={24} color="#fafafa" />
                                <Text className='text-white text-lg'>Credit Card/Debit Card.</Text>
                                <Ionicons name='ios-radio-button-on-outline' size={24} color="#ff9580" />
                            </TouchableOpacity>
                            <TouchableOpacity className='flex flex-row py-3 px-4 items-center justify-between w-full'>
                                <FontAwesome5 name="plus" size={22} color="#ff9580" />
                                <View className="flex space-x-14 flex-row">
                                    <Text className='text-white text-lg'>Add A Card</Text>
                                    <FontAwesome5 name="cc-visa" size={24} color="#fafafa" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        {paymentData.map((value, key) => {
                            return (
                                <View className="w-full" key={value.optionName}>
                                    {paymentOption == key ? (
                                        <>
                                            <TouchableOpacity className='flex my-2.5 bg-leadistroBrown rounded-xl flex-row py-3 px-4 items-center justify-between w-full'>
                                                <FontAwesome5 name="google-pay" size={24} color="#fafafa" />
                                                <View className="flex space-x-14 flex-row">
                                                    <Text className='text-white text-lg'>{value.optionName}</Text>
                                                    <Ionicons name='ios-radio-button-on-outline' size={24} color="#ff9580" />
                                                </View>
                                            </TouchableOpacity>
                                        </>
                                    ) : (
                                        <>
                                            <TouchableOpacity onPress={() => setPaymentOption(key)} className='flex bg-leadistroBrown rounded-xl flex-row py-3 px-4 items-center justify-between w-full'>
                                                <FontAwesome5 name="apple-pay" size={24} color="#fafafa" />
                                                <View className="flex space-x-14 flex-row">
                                                    <Text className='text-white text-lg'>{value.optionName}</Text>
                                                    <Ionicons name='ios-radio-button-off-outline' size={24} color="#ff9580" />
                                                </View>
                                            </TouchableOpacity>
                                        </>
                                    )}
                                </View>
                            )
                        })}
                        {/* <View className='flex my-2.5 bg-leadistroBrown rounded-xl flex-row py-3 px-4 items-center justify-between w-full'>
                            <FontAwesome5 name="google-pay" size={24} color="#fafafa" />
                            <View className="flex space-x-14 flex-row">
                                <Text className='text-white text-lg'>Google Pay</Text>
                                <Ionicons name='ios-radio-button-off-outline' size={24} color="#ff9580" />
                            </View>
                        </View>
                        <View className='flex bg-leadistroBrown rounded-xl flex-row py-3 px-4 items-center justify-between w-full'>
                            <FontAwesome5 name="apple-pay" size={24} color="#fafafa" />
                            <View className="flex space-x-14 flex-row">
                                <Text className='text-white text-lg'>Apple Pay</Text>
                                <Ionicons name='ios-radio-button-off-outline' size={24} color="#ff9580" />
                            </View>
                        </View> */}
                        <View className='flex flex-row items-center justify-evenly w-full mt-14 p-3 rounded-full bg-leadistroRed '>
                            <Text className='text-leadistroBlack text-xl font-extrabold'>
                                Pay
                            </Text>
                        </View>
                    </View>
                    :
                    <View className='flex flex-col items-start justify-start p-5 w-full bg-leadistroBrown border-2 border-leadistroRed/50 h-60 mt-8 rounded-3xl'>
                        <Text className='text-xl font-extrabold text-leadistroWhite tracking-wide'>
                            leadistro Freemium Beta
                        </Text>
                        <Text className='text-lg font-semibold text-leadistroRed tracking-tight' >
                            Features
                        </Text>
                        <Text className='text-base font-normal text-leadistroWhite tracking-wide' >
                            -  Audience storage
                        </Text>
                        <Text className='text-base font-normal text-leadistroWhite tracking-wide' >
                            -  Prebuilt email and social media templates
                        </Text>
                        <Text className='text-base font-normal text-leadistroWhite tracking-wide' >
                            -  Basic campaign management tools
                        </Text>
                        <Text className='text-base font-normal text-leadistroWhite tracking-wide' >
                            -  Basic AI Help.
                        </Text>
                        <Text className='text-sm py-2 px-4 font-extrabold text-leadistroWhite tracking-tighter'>
                            Upgrade To Enjoy More Features.
                        </Text>
                    </View>
            }
        </>
    );
};
{/* <Text>{val[checked]}</Text> */ }

// const SubscriptionRadioTag: React.FC<RadioDataTypes> = ({ packageType, price, per, onPress, checked }) => {
//     return (
//         <TouchableOpacity key={checked} className='w-full' onPress={onPress}>
//             <View className={`${checked
//                 ? 'border-leadistroRed border-2'
//                 : 'border-leadistroWhite/50 border-2'
//                 } w-full  rounded-xl mt-5 self-center flex flex-col items-center justify-center px-4 py-3`}>
//                 <View className="flex flex-row justify-between w-full item-center">
//                     <Text className='text-xl font-bold text-leadistroRed'>{packageType}</Text>
//                     <Ionicons name={checked ? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline'} size={24} color="#ff9580" />
//                 </View>
//                 <Text className='font-bold w-full text-leadistroWhite text-xl'>{price} <Text className='font-light text-lg'>{per}</Text></Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

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
    // const isPresented = navigation.canGoBack();
    // const [selected, setSelected] = React.useState<number>(0)
    return (
        <View className='flex flex-col p-5 items-center bg-leadistroBlack justify-start w-full h-full'>
            <Feather onPress={() => navigation.goBack()} name='arrow-left' size={27} style={{ position: 'absolute', top: inset.top + 20, left: inset.left + 20 }} color={'#ff9580'} />
            <View style={{ position: 'absolute', top: inset.top + 60, left: inset.left + 20 }} className='py-3.5 px-3 w-full h-[90vh] items-start justify-start flex flex-col'>
                <Text className='text-leadistroWhite tracking-wider text-3xl'>Choose a plan</Text>
                <Text className='text-leadistroWhite/60 tracking-wider text-xl mb-10'>Monthly or Anually ? it&apos;s your call.</Text>
                {/* Creating Radio Tabs map(free, monthy, anually) */}
                <SubscriptionRadio />
            </View>
        </View>
    )
}

export default SubModal