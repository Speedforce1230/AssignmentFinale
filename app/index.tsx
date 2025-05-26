import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
} from "@react-native-firebase/auth";
import {
    GoogleSignin,
    GoogleSigninButton,
    isErrorWithCode,
    statusCodes,
} from "@react-native-google-signin/google-signin";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
GoogleSignin.configure({
    webClientId:
        "184134956461-i32io746jvnququa9bo1oj40vibpm3b0.apps.googleusercontent.com",
});
const authState = getAuth();
export default function Index() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
    const [signingIn, setSigningIn] = useState(false);
    const signIn = async () => {
        if (signingIn) return;
        setSigningIn(true);
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            });
            console.log("Signing In");
            // Get the users ID token
            const GoogleUser = await GoogleSignin.signIn();
            const idToken = GoogleUser.idToken;
            console.log(idToken);
            const credential = GoogleAuthProvider.credential(idToken);

            await signInWithCredential(authState, credential);
        } catch (error) {
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.IN_PROGRESS:
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        break;
                    default:
                }
            } else {
            }
        }
    };
    useEffect(() => {
        const subscriber = onAuthStateChanged(authState, (user) => {
            setUser(user);
            if (initializing) setInitializing(false);
        });
        return subscriber;
    }, [initializing]);
    if (initializing) return null;
    if (!user) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <GoogleSigninButton onPress={signIn}></GoogleSigninButton>
            </View>
        );
    }
    return (
        <View>
            <Text>Congrats you are logged in: {user.email}</Text>
        </View>
    );
}
