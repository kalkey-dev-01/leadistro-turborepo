import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { env } from "../../../../packages/auth/env.mjs";
import auth from '@react-native-firebase/auth'

GoogleSignin.configure({
    webClientId: '976545594978-34lpjndtem6dq86f53ts4q0moqpu00ud.apps.googleusercontent.com',
});

export async function GoogleAuthSignIn() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    const { idToken } = await GoogleSignin.signIn();
    const credential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(credential)
}