import type { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { atom } from "jotai";

const FirebaseUserAtom = atom<FirebaseAuthTypes.User | null>(null);
const loadingAtom = atom<boolean>(false);
// const AuthAtom = atom<FirebaseAuthTypes.AuthProvider | null>(null);

export { FirebaseUserAtom, loadingAtom };
