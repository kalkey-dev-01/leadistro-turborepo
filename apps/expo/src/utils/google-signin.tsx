import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { env } from "../../../../packages/auth/env.mjs";
import auth from '@react-native-firebase/auth'
// import React from 'react'
// import { api } from './api';
// import { api } from './api';
// const util = api.useContext()
GoogleSignin.configure({
    webClientId: '976545594978-a1ul5imti6ruqb1qlb7ipta7kk6q5elh.apps.googleusercontent.com',
    iosClientId: '976545594978-oasuhjp8th16td7op8jc9immp14l22vq.apps.googleusercontent.com'
});
// const [input, setInput] = React.useState<Fir();
export async function GoogleAuthSignIn() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    const { idToken } = await GoogleSignin.signIn();
    const credential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(credential).then((user) => {
        // const { mutate } = api.mobileAuth.create.useMutation()
        // console.log('Mutate Starts')
        // mutate({
        //     email: user.user.email as string,
        //     id: user.user.uid,
        //     emailVerified: user.user.emailVerified,
        //     userName: user.user.displayName as string,
        //     providerId: user.user.providerId,
        //     photoUrl: user.user.photoURL as string
        // })
        console.log(user, 'from Promise and the mutate ends')
    }).catch((error) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log(error.message, error)
    }).finally(() => {
        console.log('GoogleAuthSignIn Completed')
    })
}