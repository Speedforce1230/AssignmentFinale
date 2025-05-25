import auth, { getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import {
    GoogleSignin,
    GoogleSigninButton,
    isErrorWithCode,
    statusCodes,
} from "@react-native-google-signin/google-signin";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
const Index = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
    GoogleSignin.configure({
        webClientId:
            "184134956461-i32io746jvnququa9bo1oj40vibpm3b0.apps.googleusercontent.com",
    });

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            });
            console.log("Signing In");
            // Get the users ID token
            const response = await GoogleSignin.signIn();
            console.log("awaited");
            console.log("response", response);
            const credential = auth.GoogleAuthProvider.credential(
                response.data?.idToken
            );

            return auth().signInWithCredential(credential);
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
    const handleAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };
    useEffect(() => {
        const subscriber = onAuthStateChanged(
            getAuth(),
            handleAuthStateChanged
        );
        return subscriber;
    }, []);
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
};
export default Index;
