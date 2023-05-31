import * as DropdownMenu from 'zeego/dropdown-menu'
import { styled } from 'nativewind'
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DropdownMenuRoot = DropdownMenu.Root;

const MenuTrigger = styled(DropdownMenu.Trigger, 'bg-[#101010] text-white p-2 rounded-md')

const DropdownMenuTrigger = DropdownMenu.create(MenuTrigger, 'Trigger')

const MenuItem = styled(DropdownMenu.Item, 'h-[25px] text-white px-4 py-2 rounded-md hover:text-[#FF9580]')
const DropdownMenuItem = DropdownMenu.create(MenuItem, 'Item')

const MenuContent = styled(DropdownMenu.Content, 'bg-[#101010] text-white p-2 rounded-md')
const DropdownMenuContent = DropdownMenu.create(MenuContent, 'Content')

const UserIconDropdown = () => <>
    <DropdownMenuRoot>
        <DropdownMenuTrigger >
            <View className={`flex items-center justify-center border-2 border-leadistroRed p-1.5 rounded-full`}>
                <Feather name="user" size={20} color={'#ff9580'} />
            </View>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem key='Item'>
                N-word
            </DropdownMenuItem>
            <DropdownMenu.Separator />
            <DropdownMenu.Arrow />
        </DropdownMenuContent>
    </DropdownMenuRoot >
</>

export default UserIconDropdown