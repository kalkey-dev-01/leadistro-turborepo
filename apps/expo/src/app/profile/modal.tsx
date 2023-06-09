import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';

const SubscriptionRadioTag: React.FC = ({ }) => {
    const [sel, setSel] = React.useState(0)
    return (
        <View className={`${isSelected
            ? 'border-leadistroRed border-2'
            : 'border-leadistroWhite/50 border-2'
            } w-full  rounded-xl mt-5 self-center flex flex-col items-center justify-center px-4 py-3`}>
            <View className="flex flex-row justify-between w-full item-center">
                <Text className='text-xl font-bold text-leadistroRed'>{name}</Text>
                <Ionicons name={isSelected ? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline'} size={24} color="#ff9580" />
            </View>
            <Text className='font-bold w-full text-leadistroWhite text-xl'>{name === "Monthly" ? '$19.00' : '$228.00'} <Text className='font-light text-lg'>{name === "Monthly" ? '/month' : '/year'}</Text></Text>
        </View>
    )
}

const SubModal = () => {
    const inset = useSafeAreaInsets()
    // const pathName = usePathname()
    // console.log(pathName)
    const navigation = useNavigation();
    // If the page was reloaded or navigated to directly, then the modal should be presented as
    // a full screen page. You may need to change the UI to account for this.
    const radioData = ["Freeium", "Monthly", "Anually"];
    const isPresented = navigation.canGoBack();
    const [selected, setSelected] = React.useState<boolean>(false)
    return (
        <View className='flex flex-col p-5 items-center bg-leadistroBlack justify-start w-full h-full'>
            <Feather onPress={() => navigation.goBack()} name='arrow-left' size={27} style={{ position: 'absolute', top: inset.top + 20, left: inset.left + 20 }} color={'#ff9580'} />
            <View style={{ position: 'absolute', top: inset.top + 60, left: inset.left + 20 }} className='py-4 px-3 w-full h-[90vh] gap-2 items-start justify-start flex flex-col'>
                <Text className='text-leadistroWhite tracking-wider text-3xl'>Choose a plan</Text>
                <Text className='text-leadistroWhite/60 tracking-wider text-xl mb-10'>Monthly or ? it&apos;s your call.</Text>
                {/* Creating Radio Tabs map(free, monthy, anually) */}
                <TouchableOpacity className='w-full' onPress={() => setSelected(!selected)}>
                    <SubscriptionRadioTag isSelected={selected} name='Monthly' />
                </TouchableOpacity>
                <TouchableOpacity className='w-full' onPress={() => setSelected(!selected)} >
                    <SubscriptionRadioTag isSelected={selected} name='Anually' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SubModal