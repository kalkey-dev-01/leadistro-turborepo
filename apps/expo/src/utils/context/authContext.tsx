import type { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useRouter, useSegments } from 'expo-router'
import { useAtom } from 'jotai'
import React from 'react'
import { FirebaseUserAtom } from '../atoms'
import auth from '@react-native-firebase/auth'
const AuthContext = React.createContext<FirebaseAuthTypes.User | null>(null)

export function useAuth() {
    return React.useContext<FirebaseAuthTypes.User | null>(AuthContext)
}

function useProtectedRoute(user: FirebaseAuthTypes.User | null) {
    const segments = useSegments();
    const router = useRouter();
    React.useEffect(() => {
        const inAuthGroup = segments[0] === "(auth)";
        if (
            // If the user is not signed in and the initial segment is not anything in the auth group.
            !user &&
            !inAuthGroup
        ) {
            // Redirect to the sign-in page.
            router.replace("/login");
        } else if (user && inAuthGroup) {
            // Redirect away from the sign-in page.
            router.replace("/home");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, segments]);
}

export function AuthProvider(props: { children: React.ReactNode }) {
    const [user, setUser] = useAtom(FirebaseUserAtom)
    React.useEffect(() => {
        auth().onAuthStateChanged(userState => {
            setUser(userState)
        })
    })
    useProtectedRoute(user)
    return (
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    );
}
