import AsyncStorage from "@react-native-async-storage/async-storage";
import type { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const FirebaseUserAtom = atom<FirebaseAuthTypes.User | null>(null);
const loadingAtom = atom<boolean>(false);
const seenOnboarding = atom<boolean>(false);
// const AuthAtom = atom<FirebaseAuthTypes.AuthProvider | null>(null);

const storage = createJSONStorage<boolean>(() => AsyncStorage);
const seenOnboardingStoredAtom = atomWithStorage<boolean>(
  "seen",
  false,
  storage,
);
export {
  FirebaseUserAtom,
  loadingAtom,
  seenOnboarding,
  seenOnboardingStoredAtom,
};
