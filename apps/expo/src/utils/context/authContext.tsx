import type { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useRouter, useSegments } from 'expo-router'
import { useAtom, useAtomValue } from 'jotai'
import React from 'react'
import { FirebaseUserAtom, seenOnboardingStoredAtom } from '../atoms'
import auth from '@react-native-firebase/auth'
const AuthContext = React.createContext<FirebaseAuthTypes.User | null>(null)

export function useAuth() {
    return React.useContext<FirebaseAuthTypes.User | null>(AuthContext)
}

function useProtectedRoute(user: FirebaseAuthTypes.User | null) {
    // Importing the boolean state of the onboarding screens
    const seen = useAtomValue(seenOnboardingStoredAtom);
    const segments = useSegments();
    const router = useRouter();
    React.useEffect(() => {
        // Checking InAuthGroup Always Returns A Boolean therefore string interpolation for the change of segments
        const inAuthGroup = segments[0] === `${seen ? "(auth)" : "(welcome)"}`;
        if (
            // If the user is not signed in and the initial segment is not anything in the auth group.
            !user &&
            !inAuthGroup
        ) {
            // Redirect to the sign-in page.
            // Change of segments on the state of seen requires it to be Added in the logic
            router.replace(seen ? '/login' : '/onboard');
        } else if (user && inAuthGroup) {
            // Redirect away from the sign-in page.
            router.replace("/");
        }
    }, [user, router, segments, seen]);
}

export function AuthProvider(props: { children: React.ReactNode }) {
    const [user, setUser] = useAtom(FirebaseUserAtom)
    React.useEffect(() => {
        auth().onAuthStateChanged(userState => {
            setUser(userState)
        })
    }, [setUser])
    useProtectedRoute(user)
    return (
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    );
}
