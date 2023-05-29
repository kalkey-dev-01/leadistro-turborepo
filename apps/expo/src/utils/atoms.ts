import { atom } from 'jotai'
import type { FirebaseAuthTypes } from '@react-native-firebase/auth'

const FirebaseUserAtom = atom<FirebaseAuthTypes.User | null>(null);
const loadingAtom = atom<boolean>(false)

export { FirebaseUserAtom, loadingAtom }