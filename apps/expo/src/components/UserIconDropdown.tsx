import * as DropdownMenu from 'zeego/dropdown-menu'
import { styled } from 'nativewind'
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '~/utils/context/authContext';


const MenuRoot = styled(DropdownMenu.Root, 'bg-black');
const DropdownMenuRoot = DropdownMenu.create(MenuRoot, 'Root')

const MenuTrigger = styled(DropdownMenu.Trigger, 'bg-[#101010] text-white p-2 rounded-md')

const DropdownMenuTrigger = DropdownMenu.create(MenuTrigger, 'Trigger')

const MenuItem = styled(DropdownMenu.Item, 'h-[25px] text-white px-4 py-2 rounded-md hover:text-[#FF9580]')
const DropdownMenuItem = DropdownMenu.create(MenuItem, 'Item')

const MenuContent = styled(DropdownMenu.Content, 'bg-[#101010] text-white p-2 rounded-md')
const DropdownMenuContent = DropdownMenu.create(MenuContent, 'Content')

const MenuItemTitle = styled(DropdownMenu.ItemTitle, 'text-white text-lg')
const DropdownMenuItemTitle = DropdownMenu.create(MenuItemTitle, 'ItemTitle')

const MenuItemIcon = styled(DropdownMenu.ItemIcon, 'text-white text-lg')
const DropdownMenuItemIcon = DropdownMenu.create(MenuItemIcon, 'ItemIcon')

    const user = useAuth()
const UserIconDropdown:Element = () => {<>
    <DropdownMenuRoot>
        <DropdownMenuTrigger >
            <View className={`flex items-center justify-center border-2 border-leadistroRed p-1.5 rounded-full`}>
                <Feather name="user" size={20} color={'#ff9580'} />
            </View>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem key='first'>
                { }
            </DropdownMenuItem>
            <DropdownMenuItem key='second'>
                Account Settings
            </DropdownMenuItem>
            <DropdownMenu.Separator />
            <DropdownMenuItem key='third'>
                Sign Out
            </DropdownMenuItem>
            <DropdownMenu.Arrow />
        </DropdownMenuContent>
    </DropdownMenuRoot >
</>}

export default UserIconDropdown